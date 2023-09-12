"use client";
import Countdown from "@components/Countdown";
import Particle from "@components/Particle";
import { ConnectWallet, useAddress, useContract } from "@thirdweb-dev/react";
import Image from "next/image";
import Swal from "sweetalert2";
import { useState, useEffect, useRef } from "react";

const Verification = () => {
  const address = useAddress();
  const { contract } = useContract(
    "0xaE72B57371d157C1fC873c69c9C6fa0c4cB1cd75"
  );
  const [isVerify, setVerify] = useState(false);

  const VERIFY_ADDRESS = async () => {
    try {
      const data = await contract?.call(
        "verify", // Name of your function as it is on the smart contract
        [address]
      );
      Swal.fire({
        title: "Verification success!",
        icon: "success",
        html: "Your account has been verified.",
        background: "#f3f3f3",
      });
      setVerify(true);
    } catch (error) {
      Swal.fire({
        title: "Verification failed!",
        icon: "error",
        html: `You don't have <b>FRYMATES NFT</b>. <br/> Get one here <a href="https://opensea.io/collection/frymates" target="_blank">opensea</a> or <a href="https://ybondev.github.io/next-js-frymates/mint" target="_blank">frymates.com</a>`,
        background: "#f3f3f3",
      });
      setVerify(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (isVerify === true) {
        window.location.href = "/home";
      }
    }, 4000);
    return () => clearTimeout();
  });
  return (
    <>
      <section className="container-fluid verify_section">
        <Particle />
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-6">
              <div className="left_col">
                <div className="header">Un-DegenX</div>
                <div className="text">
                  <p>
                    a data analytics website where we can provide you with
                    information about assets or cryptocurrency. It focuses for
                    the new and experienced traders, with the help of our
                    data-driven tools you'll un-degen your trading.
                    <br />
                    <br />
                    Our goal is to help traders by providing or giving some
                    insights into the assets in which they want to invest. We
                    are also developing this kind of tool or service, like smart
                    contract audits, social media listeners, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_col">
                <Image
                  src={"./assets/logos_metamask-icon.png"}
                  width={0}
                  height={0}
                  alt=""
                  className="img-fluid"
                />
                <div className="btn_container">
                  {address === undefined ? (
                    <ConnectWallet className="connect_wallet" />
                  ) : (
                    <button className="btn_verify" onClick={VERIFY_ADDRESS}>
                      verify your account
                    </button>
                  )}
                </div>
                <div className="status_container">
                  {isVerify === true ? (
                    <div className="status connected">
                      redirecting...
                      <Countdown seconds={5} />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verification;
