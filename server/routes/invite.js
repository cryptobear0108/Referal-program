const routerx = require('express-promise-router');
const router=routerx();
const Invitation = require('../models/invitation');

router.post('/add', function(req, res) {
    Invitation.find({walletAddress: req.body.address}, function(err, data) {
        if(err) {
            console.log("Save Err", err);
        }
        if(data.length === 0) {
            Invitation.findOne({code: req.body.refcode}, function(error, item) {
                if(error) {
                    console.log("Can't ref now.");
                }
                if(item != null && item['count'] < 30) {
                    item['count'] = item['count'] +1;
                    item.save();
                }
            })
            Invitation.count({}, function(err, count) {
                if(err) {
                    console.log("Count Error:: " , err);
                }
                const invite = new Invitation({
                    idx: count +1,
                    walletAddress: req.body.address,
                    code: req.body.link,
                    count: 0
                })
                invite.save();
                res.send({'invite': invite});
            })
        }
        else res.send({'invite': data[0]});
    })

});
router.post('/count', function(req, res) {
    Invitation.find({walletAddress: req.body.wallet}, function(error, data) {
        if(error) {
            console.log("Error:");
        }
        else {
            if(data.length > 0) {
                res.send({'count': data[0].idx})
            }
            else {
                Invitation.count({}, function(err, count) {
                    if(err) {
                        console.log("Count Error:: " , err);
                    }
                    res.send({'count': count})
                })
            }
        }
    })
})
router.post('/get', function(req, res) {
    Invitation.find({walletAddress: req.body.wallet}, function(err, data) {
        if(err){
            console.log(err);
            res.send({'msg':"Error"});
        }
        if(data.length > 0) {
            res.send({'invite': data[0]});
        }
        else res.send({'mgs':"can't find wallet address."});
    })
})
module.exports = router;