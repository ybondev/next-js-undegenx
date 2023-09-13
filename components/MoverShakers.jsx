"use client";
import useAxios from "@hook/useAxios";
import Image from "next/image";
import Link from "next/link";

const MoverShakers = () => {
  const { response } = useAxios(
    `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
  );

  if (!response) {
    return <div className="loading">loading</div>;
  }
  return (
    <>
      {response &&
        response
          .sort(
            (a, b) =>
              b.price_change_percentage_24h_in_currency -
              a.price_change_percentage_24h_in_currency
          )
          .slice(0, 3)
          .map((x) => {
            return (
              <Link href={""} key={x.id} className="link_item">
                <div className="data">
                  <Image
                    src={x.image}
                    width={25}
                    height={0}
                    alt=""
                    className="img-fluid"
                  ></Image>
                  <div className="text">
                    <span className="name">
                      {x.name} <span className="symbol">({x.symbol})</span>
                    </span>
                  </div>
                  <div className="text">
                    <span className="price">
                      ${x.current_price.toFixed(5)}
                      {x.price_change_percentage_24h_in_currency > 0 ? (
                        <span className="percent_up">
                          {x.price_change_percentage_24h_in_currency.toFixed(1)}
                          %
                        </span>
                      ) : (
                        <span className="percent_down">
                          {x.price_change_percentage_24h_in_currency.toFixed(1)}
                          %
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
    </>
  );
};

export default MoverShakers;
