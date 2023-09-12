"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const TOGGLE = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <section className="container-fluid navbar_fluid">
      <div className="container">
        <input type="checkbox" id="check_btn" />
        <nav className="navbar">
          <div className="logo">un-degenx</div>
          <ul>
            <Link href={""} className="link_item">
              home
            </Link>
            <Link href={""} className="link_item">
              about us
            </Link>
            <Link href={""} className="link_item">
              contact
            </Link>
            <Link href={""} className="link_item link_connect">
              connect
            </Link>
            <Link href={""} className="link_item">
              <form action="">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="form-control"
                  placeholder="Search cryptocurrecny..."
                />
              </form>
            </Link>
          </ul>
          <label htmlFor="check_btn">
            {toggle === false ? (
              <FaBars className="fa_icon" onClick={TOGGLE} />
            ) : (
              <IoCloseSharp className="fa_icon" onClick={TOGGLE} />
            )}
          </label>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
