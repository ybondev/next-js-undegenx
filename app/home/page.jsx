import Nav from "@components/Nav";
import Link from "next/link";
import Image from "next/image";
import TrendingSearches from "@components/TrendingSearches";
import MoverShakers from "@components/MoverShakers";
import Ranking from "@components/Ranking";

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
                    -Un-degen your trading
                    <br />
                    -use data
                    <br />
                    -to listen to the community
                  </p>
                </div>
                <div className="btn_container">
                  <Link href="" className="btn_link">
                    <button>learn more</button>
                  </Link>
                </div>
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
