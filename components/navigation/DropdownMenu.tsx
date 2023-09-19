"use client";

import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import useMediaQuery from "@mui/material/useMediaQuery";

import { pagesItems } from "./menuItems";

const DropdownMenu = () => {
  const [showMenu, toggleMenu] = useState(false);

  // Screen breakpoints
  const isSM = useMediaQuery("(min-width:600px)");
  const isMD = useMediaQuery("(min-width:960px)");
  const isLG = useMediaQuery("(min-width:1280px)");

  const setCloseButtonPercentage = () => {
    if (isLG || isMD) {
      return "0";
    }

    if (isSM) {
      return "17%";
    }

    return "17%";
  };

  return (
    <>
      <div className="dropdown">
        <div
          className="overlay-menu"
          onClick={() => {
            toggleMenu(!showMenu);
          }}
        />
        <button className="dropbtn">
          {!showMenu ? (
            <MenuRoundedIcon
              style={{
                height: "35px",
                width: "35px",
                color: "#fffb32",
                backgroundColor: "rgb(0,0,0)",
              }}
            />
          ) : null}
        </button>
        <div
          className="close-button"
          onClick={() => {
            toggleMenu(!showMenu);
          }}
        >
          <span>X</span>
        </div>
        <div className="dropdown-nav">
          {!isLG && showMenu ? (
            <ul>
              {pagesItems.map((item) => (
                <li key={item.title}>
                  <a href={item.to} title={item.title}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <style jsx>
        {`
          ul {
            list-style: none;
            padding: 0;
          }

          a {
            font-weight: 500;
            font-size: 36px;
            line-height: 1.4;
            color: rgb(0, 0, 0);
            padding: 20px 40px;
            text-decoration: none;
            display: block;
          }

          a:hover {
            background-color: rgba(0, 0, 0, 0.04);
          }

          h4 {
            margin: 5px 0;
            font-size: 20px;
            font-weight: 500;
          }

          span {
            display: block;
            margin-top: 12.5px;
          }

          @media (min-width: 960px) {
            a {
              display: none;
              padding-left: 20px;
              padding-right: 20px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .dropdown-nav {
            position: fixed;
            background-color: rgb(222, 215, 16);
            z-index: 999999;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding-top: 100px;
            overflow: auto;
            border-radius: 4px;
            display: ${showMenu ? "initial" : "none"};
          }

          .dropbtn {
            cursor: pointer;
            height: 50px;
            width: 50px;
            background-color: rgb(0, 0, 0);
            border: none;
          }

          .overlay-menu {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .dropbtn:hover,
          .dropbtn:focus {
            background-color: #2980b9;
          }

          /* The container <div> - needed to position the dropdown content */
          .dropdown {
            position: relative;
            display: block;
            border: 2px solid #fffb32;
            // height: 50px;
            width: 55px;
            margin-left: auto !important;
            border-radius: 4px;
          }

          .panel-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 999999;
          }

          .close-button {
            height: 55px;
            width: 55px;
            position: fixed;
            top: 20px;
            right: ${setCloseButtonPercentage()};
            border: 2px solid rgb(0, 0, 0);
            z-index: 9999999;
            border-radius: 4px;
            color: rgb(0, 0, 0);
            font-weight: 900;
            font-size: 25px;
            text-align: center;
            display: ${showMenu ? "initial" : "none"};
          }

          .menu-prestamos-item {
            font-size: 16px !important;
            height: 25px !important;
            display: block !important;
          }

          @media (min-width: 960px) {
            .close-button {
              color: rgb(255, 145, 77);
              border: 2px solid rgb(255, 145, 77);
              position: absolute;
              top: 0;
            }

            .dropdown {
              position: absolute;
              right: 0;
              border: ${showMenu ? "none" : "2px solid rgb(255, 145, 77)"};
            }

            .dropdown-nav {
              position: absolute;
              max-width: 240px;
              top: 65px;
              padding-top: 0;
              left: auto;
              height: 250px;
              overflow: unset;
            }
          }
        `}
      </style>
    </>
  );
};

export default DropdownMenu;
