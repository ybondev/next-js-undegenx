"use client";
import useAxios from "@hook/useAxios";
import Image from "next/image";
import Link from "next/link";

const TrendingSearches = () => {
  const { response } = useAxios(`search/trending`);

  if (!response) {
    return (
      <div className="loading">loading</div>  
    );
  }
  return (
    <>
      {response &&
        response.coins?.map((x) => {
          return (
            <Link href="" className="link_item" key={x.item.id}>
              <div className="data">
                <Image
                  src={x.item.large}
                  width={32}
                  height={0}
                  alt={x.item.name}
                  className="img-fluid"
                ></Image>
                <div className="text">
                  <span className="name">
                    {x.item.name}{" "}
                    <span className="symbol">({x.item.symbol})</span>
                  </span>
                </div>
                <div className="text">
                  <span className="rank">#{x.item.market_cap_rank}</span>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default TrendingSearches;
