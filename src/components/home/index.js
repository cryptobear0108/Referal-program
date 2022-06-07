import React, { Fragment, useEffect, useState } from "react";

// ----- image import -----
import TokenImg from "../../assets/images/token.png";
import NftImg from "../../assets/images/gorilla/nft.png";
import AuthorImg from "../../assets/images/author-3.jpg";
import authImg from "../../assets/images/author-9.jpg";
import thumbImg from "../../assets/images/thumbnail-7.jpg";
import staticImg from "../../assets/images/static-9.jpg";
import subHedImg from "../../assets/images/subheader.jpg";

// ----- layout import -----
import HeaderFir from "../../layout/header-fir";
import Footer from "../../layout/footer";
import axios from "axios";

// ----- react-animations -----
import AOS from "aos";
import { useLocation } from 'react-router-dom';
import "../../../node_modules/aos/dist/aos.css";

const Home = () => {
  const search = useLocation().search;
  const refcode = new URLSearchParams(search).get('ref');
  const [Inwallet, setInwallet] = useState("");
  const [Msg, setMsg] = useState("");
  const [generatedLink, setGenLink] = useState("");
  const [count, setCount] = useState(0);
  const [withdrawMsg, setWithdrawmsg] = useState("");
  const [copyBtn, setcopyBtn] = useState('Copy');
  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    setInwallet(wallet);
    if (wallet) {
      axios.post("/api/invite/get", {wallet: wallet})
      .then(res=> {
        if(res.data.invite) {
          setCount(res.data.invite.count);
          setGenLink(res.data.invite.code);
        }
      });
    }
  }, []);
  const handleclaim = () => {
    if (Inwallet.length !== 42) {
      setMsg("The wallet address is incorrect. Please check and try again.");
      return;
    }
    localStorage.setItem('wallet', Inwallet);
    axios.post("/api/invite/count", {wallet:Inwallet})
    .then(res => {
      const link = Inwallet.substring(5, 10).toUpperCase() + res.data.count.toString();
      axios.post("/api/invite/add", {address:Inwallet, link: link, refcode:refcode})
      .then(res=>{
        setGenLink(res.data.invite.code);
        setCount(res.data.invite.count);
      });
    })
  };
  const handleWithdraw =() =>{
    setWithdrawmsg("You can claim ABC token after airdrop ends.");
  }
  AOS.init({ once: true, duration: 1200 });
  return (
    <Fragment>
      <HeaderFir />
      <div className="section padding-top-bottom-big" id="faq">
        <div className="container mt-5">
          <div className="row mt-5" data-aos="fade-up">
            <div
              className="col-md-6 mb-4 mb-md-0"
              data-scroll-reveal="enter bottom move 100px over 1.6s after 0.3s"
              data-scroll-reveal-id="8"
              data-scroll-reveal-initialized="true"
              data-scroll-reveal-complete="true"
            >
              {/* <center> */}
              <div className="img-wrap fif-six-section mb-5">
                <span
                  style={{
                    fontSize: "42px",
                    fontWeight: 600,
                    color: "#000",
                    lineHeight: "2.2rem",
                  }}
                >
                  Next-generation decentralized NFT marketplace
                </span>
                <br />
                <div>
                  <p style={{ lineHeight: "2rem", marginTop: "1.5rem" }}>
                    RareSea is a fork of OpenSea. It aims to be a
                    next-generation decentralized NFT platform with the largest
                    scale, the lowest fee, and multi-chain support. SEA is the
                    governance token of RareSea, with a total issuance of only
                    5,000,000.
                  </p>
                  <p style={{ lineHeight: "2rem" }}>
                    SEA will be listed on exchanges such as Binance, Upbit and
                    Coinbase. The estimated listing price of SEA is $100.
                  </p>
                </div>
                <br />
              </div>
              {/* </center> */}
            </div>
            <div
              className="col-md-6"
              data-scroll-reveal="enter bottom move 100px over 1.6s after 0.3s"
              data-scroll-reveal-id="9"
              data-scroll-reveal-initialized="true"
              data-scroll-reveal-complete="true"
            >
              <center>
                <div className="img-wrap fif-six-section">
                  <img
                    src={NftImg}
                    width="350"
                    style={{ marginTop: "20px", visibility: "visible" }}
                    data-xblocker="passed"
                    alt="NftImg"
                  />
                  <br />
                </div>
              </center>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
      <section
        id="introduce"
        className="no-top no-bottom"
        style={{ backgroundSize: "cover", outline: "none" }}
      >
        <div className="container" style={{ backgroundSize: "cover" }}>
          <div className="row" style={{ backgroundSize: "cover" }}>
            <div className="col-lg-12" style={{ backgroundSize: "cover" }}>
              <div className="text-center" style={{ backgroundSize: "cover" }}>
                <h2>Introduce</h2>
                <div
                  className="small-border bg-color-2"
                  style={{ backgroundSize: "cover" }}
                ></div>
              </div>
            </div>
            <div
              className="col-md-6 mb-sm-30 introduce-column"
              style={{ backgroundSize: "cover", marginTop: "20px" }}
            >
              <div
                className="feature-box f-boxed style-3 p-4"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="wow fadeInUp bg-color-2 i-boxed icon_wallet animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                ></i>
                <div className="text" style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Community airdrop
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    ● Quantity: 1,000,000 SEA (20%)
                  </p>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    ● Airdrop rules: RareSea will end community airdrop at 6:00
                    (UTC-8) on May 13, 2022. Community users can participate in
                    airdrop by submitting the ETH wallet address on the RareSea
                    website. The initial amount of each address is 10 SEA
                    tokens. The airdrop is completely free, and airdrop rewards
                    will be distributed to your submitted address after the
                    airdrop ends.
                  </p>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    ● Invitation rules: Users can get additional rewards by
                    inviting friends to participate in the airdrop. You can get
                    10 SEA tokens for each friend you invite. You can invite up
                    to 50 friends, and get up to 500 SEA tokens. The quantity
                    for airdrop is limited, and SEA issuance is small. The
                    estimated price of SEA is $100. Hurry up and share it with
                    your friends.
                  </p>
                </div>
                <i className="wm icon_wallet"></i>
              </div>
            </div>
            <div
              className="col-md-6 mb-sm-30 introduce-column"
              style={{ backgroundSize: "cover", marginTop: "20px" }}
            >
              <div
                className="feature-box f-boxed style-3 p-4"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                ></i>
                <div className="text" style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Pre-sale
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    ● Pre-sale quantity: 2,500,000 SEA (50%)
                  </p>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    ● Pre-sale price: 1 ETH = 10,000 SEA. The minimum purchase
                    is 0.1 ETH, and the maximum purchase is 100 ETH (the
                    pre-sale quantity is limited, and the excess ETH will be
                    automatically returned).
                  </p>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    ● Pre-sale rules: Send ETH from your wallet to the pre-sale
                    address. Our system will immediately send the corresponding
                    amount of SEA tokens to your wallet. The quantity of SEA
                    tokens for pre-sale is limited, and the quota is sorted
                    according to the arrival time of ETH. First come first
                    served.
                  </p>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    ● Once the pre-sale is over. 50% of the funds raised will be
                    used for listing on Binance, Upbit and Coinbase. The other
                    50% will be used to buyback SEA tokens. This action will
                    prevent people from dumping.
                  </p>
                </div>
                <i className="wm icon_cloud-upload_alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section padding-top-bottom-big background-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap text-center">
                <h2>Pre-sale is live</h2>
                <div
                  className="small-border bg-color-2"
                  style={{ backgroundSize: "cover" }}
                ></div>
                <div
                  className="small-border bg-color-2"
                  style={{ backgroundSize: "cover" }}
                ></div>
                <div
                  className="alert alert-success mx-lg-5"
                  role="alert"
                  style={{ backgroundSize: "cover", marginTop: 20 }}
                >
                  <h4 className="alert-heading">Pre-sale Address</h4>
                  <p>0x9c680Fd3A73006A430C1605c9CE3C229c7265f7D</p>
                  <p className="mb-0">
                    <a
                      href="."
                      className="btn btn-main copy"
                      data-text="0x9c680Fd3A73006A430C1605c9CE3C229c7265f7D"
                    >
                      Copy Address
                    </a>
                  </p>
                </div>
                <div className="mx-lg-6" style={{ backgroundSize: "cover" }}>
                  <p>Pre-sale supply: 2,500,000 SEA</p>
                  <p>Pre-sale price: 1 ETH = 10,000 SEA</p>
                  <p>
                    Send ETH from your wallet to the pre-sale address above. Our
                    system will send SEA tokens to your wallet immediately.
                  </p>
                  <p>
                    The minimum purchase is 0.1 ETH, and the maximum purchase is
                    100 ETH.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="airdrop"
        className="text-light my-4 airdrop"
        data-bgimage={subHedImg}

        // style="background: url('./assets/images/subheader.jpg') 0% 0% / cover"
      >
        {generatedLink.length === 0 ? (
          <div
            id="newuser"
            className="center-y relative"
            style={{ backgroundSize: "cover" }}
          >
            <div className="container" style={{ backgroundSize: "cover" }}>
              <div
                id="airdrop-block"
                className="row"
                style={{ backgroundSize: "cover" }}
              >
                <div
                  className="col-md-8 offset-md-2"
                  style={{ backgroundSize: "cover" }}
                >
                  <div
                    className="col text-center"
                    style={{ backgroundSize: "cover" }}
                  >
                    <div
                      className="spacer-single"
                      style={{ backgroundSize: "cover" }}
                    ></div>
                    <h1 style={{ color: "#fff" }}>Airdrop</h1>
                    <div
                      id="airdrop-form"
                      className="row form"
                      data-lpignore="true"
                    >
                      <input name="ref" type="hidden" value="" />
                      <div
                        className="col text-center"
                        style={{ backgroundSize: "cover" }}
                      >
                        <div
                          className="spacer-10"
                          style={{ backgroundSize: "cover" }}
                        ></div>
                        <input
                          id="wallet_address"
                          name="address"
                          type="text"
                          className="form-control"
                          placeholder="Enter your ETH address"
                          value={Inwallet}
                          onChange={(e) => {
                            setMsg("");
                            setInwallet(e.target.value);
                          }}
                        />
                        <button
                          id="btn-submit"
                          className="border-0"
                          onClick={handleclaim}
                        >
                          Claim
                        </button>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        color: "red",
                        marginTop: "15px",
                      }}
                    >
                      {Msg}
                    </p>
                    <div
                      className="spacer-20"
                      style={{ backgroundSize: "cover" }}
                    ></div>
                  </div>
                  <div
                    className="clearfix"
                    style={{ backgroundSize: "cover" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="user"
            className="center-y relative"
            style={{ backgroundSize: "cover" }}
          >
            <div className="container" style={{ backgroundSize: "cover" }}>
              <div
                id="airdrop-block"
                className="row"
                style={{ backgroundSize: "cover" }}
              >
                <div className="col-12 text-center">
                  <div className="spacer-single"></div>
                  <h1 style={{color: 'white'}}>Airdrop</h1>
                </div>
                <div className="col-12 col-sm-10 col-md-9 col-lg-8 offset-md-1 offset-lg-2 px-2">
                  <div className="text-break">
                    <span className="me-3">
                      <b>Refer Link:</b>
                    </span>
                    <span
                      id="referlink"
                      className="text-light copy lh-lg"
                      data-text="https://raresea.live/ "
                      data-bs-original-title=""
                      title=""
                      aria-describedby="tooltip709244"
                    >
                      https://raresea.live?ref={generatedLink}
                    </span>
                    <a
                      className="copy text-white"
                      style={{cursor:'pointer'}}
                      onClick={()=>{
                        setcopyBtn("Copied");
                        navigator.clipboard.writeText("https://raresea.live?ref=" + generatedLink)
                      }}
                    >
                      <i className="fa fa-copy ms-2"></i> {copyBtn}
                    </a>
                  </div>
                  <div className="mt-1">
                    Copy and share your refer link, you and the invitee will be
                    rewarded 10 SEA at the same time, each person can invite up
                    to 50 people, and the reward can be up to 500 SEA tokens.
                  </div>
                  <div className="row mt-4 text-center justify-content-between">
                    <div className="col-3">
                      <div className="heading-h5">
                        <span className="">10</span> SEA
                      </div>
                      <div>Balance</div>
                    </div>
                    <div className="col-3">
                      <div className="heading-h5">{count}</div>
                      <div>Referred</div>
                    </div>
                    <div className="col-3">
                      <div className="heading-h5">
                        <span className="">10</span> SEA
                      </div>
                      <div>Rewards</div>
                    </div>
                    <div className="col-12 col-sm-3 justify-content-around pt-3 pt-sm-0">
                      <button
                        id="withdraw"
                        data-address="0xb04712c148aa46e19e5d64664da6168f71f5cfd5"
                        className="btn btn-main"
                        style={{backgroundColor:'#8364E2', color:'white'}}
                        onClick={handleWithdraw}
                      >
                        Withdraw
                      </button>
                    </div>
                  </div>
                  <p style={{fontSize:'1.3rem', color:'red', marginTop:'30px'}}>{withdrawMsg}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section
        id="token"
        aria-label="section"
        style={{ backgroundSize: "cover", outline: "none" }}
      >
        <div className="container" style={{ backgroundSize: "cover" }}>
          <div className="row" style={{ backgroundSize: "cover" }}>
            <div className="col-lg-12" style={{ backgroundSize: "cover" }}>
              <div className="text-center" style={{ backgroundSize: "cover" }}>
                <h2>Token</h2>
                <div
                  className="small-border bg-color-2"
                  style={{ backgroundSize: "cover" }}
                ></div>
              </div>
            </div>
            <div
              className="col-md-7"
              style={{ backgroundSize: "cover", marginTop: "20px" }}
            >
              <div className="blog-read" style={{ backgroundSize: "cover" }}>
                <img
                  alt=""
                  src={TokenImg}
                  className="img-fullwidth rounded"
                  style={{ width: "100%" }}
                />
                <div className="post-text" style={{ backgroundSize: "cover" }}>
                  <p>
                    RareSea is a fork of OpenSea. It aims to eliminate the
                    inherent flaws of OpenSea, improve platform performance,
                    adopt a more decentralized management model, support
                    multi-chain, and provide lower rates to improve the NFT
                    ecosystem. RareSea will be built into a decentralized NFT
                    platform with the largest scale, the lowest fee, and
                    multi-chain support.
                  </p>
                  <p>
                    SEA is the governance token of RareSea, with a total
                    issuance of only 5,000,000. It is intended to create a
                    high-priced token to attract popularity! 1,000,000 SEA
                    tokens for community airdrop. 2,500,000 SEA tokens for
                    pre-sale, and the pre-sale price is 1 ETH = 10,000 SEA.
                    After the pre-sale ends, SEA will be listed on exchanges
                    such as Binance, Upbit and Coinbase. The estimated listing
                    price of SEA is $100.
                  </p>
                </div>
              </div>
              <a
                href="/"
                target="_blank"
                className="btn-main wow lead animated"
                style={{ visibility: "visible" }}
              >
                Whitepaper
              </a>
              <div
                className="spacer-single"
                style={{ backgroundSize: "cover" }}
              ></div>
            </div>
            <div
              id="sidebar"
              className="col-md-5"
              style={{ backgroundSize: "cover", marginTop: "20px" }}
            >
              <div
                className="widget widget-post"
                style={{ backgroundSize: "cover" }}
              >
                <h4>SEA Token Contract</h4>
                <div
                  className="small-border"
                  style={{ backgroundSize: "cover" }}
                ></div>
                <ul>
                  <li>
                    <span className="date">Contract Address</span>
                    <a
                      href="."
                      className="text-break"
                      style={{ fontSize: "12px" }}
                    >
                      0xbFD7DEE158cc8c7A324C6D67adC283c5f67E238b
                    </a>
                    <a
                      href="https://cn.etherscan.com/token/0xbFD7DEE158cc8c7A324C6D67adC283c5f67E238b"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-external-link-alt text-primary"></i>
                    </a>
                  </li>
                  <li>
                    <span className="date">Symbol</span> <a href=".">SEA</a>
                  </li>
                  <li>
                    <span className="date">Decimals</span> <a href=".">18</a>
                  </li>
                  <li>
                    <span className="date">Total Supply</span>{" "}
                    <a href=".">5,000,000</a>
                  </li>
                  <li>
                    <span className="date">Blockchain</span>{" "}
                    <a href=".">Ethereum ERC20</a>
                  </li>
                </ul>
              </div>
              <div
                className="widget widget-text"
                style={{ backgroundSize: "cover" }}
              >
                <h4>Tokenomics</h4>
                <div
                  className="small-border"
                  style={{ backgroundSize: "cover" }}
                ></div>
                <p>● Total Supply：5,000,000 SEA</p>
                <p>● Airdrop：1,000,000 SEA (20%)</p>
                <p>● Pre-sale：2,500,000 SEA (50%)</p>
                <p>● Team &amp; Further Development：1,500,000 SEA (30%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="roadmap"
        aria-label="section"
        style={{ backgroundSize: "cover", outline: "none" }}
      >
        <div className="container" style={{ backgroundSize: "cover" }}>
          <div className="row" style={{ backgroundSize: "cover" }}>
            <div className="col-lg-12" style={{ backgroundSize: "cover" }}>
              <div className="text-center" style={{ backgroundSize: "cover" }}>
                <h2>Roadmap</h2>
                <div
                  className="small-border bg-color-2"
                  style={{ backgroundSize: "cover" }}
                ></div>
              </div>
            </div>
            <div className="col-12" style={{ backgroundSize: "cover" }}>
              <ul className="activity-list">
                <li className="act_follow">
                  <img className="lazy" src={AuthorImg} alt="" />
                  <div
                    className="act_list_text"
                    style={{ backgroundSize: "cover" }}
                  >
                    <h4>Phase 1</h4>
                    <span className="act_list_date">April 2022</span>
                    <p className="mb-1">
                      √ Official website launched &amp; smart contract deployed
                    </p>
                    <p className="mb-1">
                      √ Social media sites (twitter, telegram, etc.) launched
                    </p>
                    <p className="mb-1">√ Pre-sale &amp; airdrop started</p>
                    <p className="mb-1">√ Developing the NFT platform</p>
                  </div>
                </li>
                <li className="act_like">
                  <img src={authImg} alt="" />
                  <div
                    className="act_list_text"
                    style={{ backgroundSize: "cover" }}
                  >
                    <h4>Phase 2</h4>
                    <span className="act_list_date">May 2022</span>
                    <p className="mb-1">&gt; Pre-sale completed</p>
                    <p className="mb-1">&gt; Airdrop distribution completed</p>
                    <p className="mb-1">
                      &gt; SEA listed on binance, Upbit and coinbase exchanges
                    </p>
                    <p className="mb-1">&gt; Buyback SEA tokens</p>
                  </div>
                </li>
                <li className="act_like">
                  <img src={thumbImg} alt="" />
                  <div
                    className="act_list_text"
                    style={{ backgroundSize: "cover" }}
                  >
                    <h4>Phase 3</h4>
                    <span className="act_list_date">June 2022</span>
                    <p className="mb-1">&gt; NFT platform launched</p>
                    <p className="mb-1">
                      &gt; Artists and high-quality projects settled in the
                      platform
                    </p>
                    <p className="mb-1">
                      &gt; Start large-scale marketing online
                    </p>
                  </div>
                </li>
                <li className="act_like">
                  <img src={staticImg} alt="" />
                  <div
                    className="act_list_text"
                    style={{ backgroundSize: "cover" }}
                  >
                    <h4>Phase 4</h4>
                    <span className="act_list_date">July 2022</span>
                    <p className="mb-1">
                      &gt; More functions, more activities in planning
                    </p>
                    <p className="mb-1">&gt; Start the Metaverse project</p>
                    <p className="mb-1">&gt; Roadmap update</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Home;
