"use client";
import Nav from "@components/Nav";
import Link from "next/link";
import Image from "next/image";
import TrendingSearches from "@components/TrendingSearches";
import MoverShakers from "@components/MoverShakers";
import Ranking from "@components/Ranking";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useRef } from "react";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="container-fluid home_section">
        <div className="container">
          <div className="row gy-3 mb-3">
            <div className="col-md-6">
              <div className="left_col">
                <div className="title">data analytics</div>
                <div className="text">
                  <p>
                    Traders use data analytics to develop trading strategies.
                    These strategies may involve algorithmic trading, where
                    automated systems execute trades based on predefined
                    criteria and data-driven signals.
                    <br />
                    <br />
                    Data analytics is a powerful tool in the cryptocurrency
                    industry, as it enables participants to navigate the complex
                    and rapidly changing landscape while making data-driven
                    decisions to mitigate risks and maximize returns.
                  </p>
                </div>
                <div className="btn_container">
                  <Link href="" className="btn_link">
                    <button>learn more</button>
                  </Link>
                  <ConnectWallet />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img_container">
                <Image
                  src={"/assets/undraw_all_the_data_re_hh4w.svg"}
                  width={660}
                  height={0}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_col">
                <div className="title">trending searches</div>
                <TrendingSearches />
              </div>
            </div>
          </div>
          <div className="row gy-3 row_second">
            <div className="col-md-6">
              <div className="left_second_col">
                <div className="title">top 3 mover shakers</div>
                <MoverShakers />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left_second_col">
                <div className="title">top 3 cryptocurrency by ranking</div>
                <Ranking />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
