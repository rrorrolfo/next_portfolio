"use client";

import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Breakpoints } from "@/types/globals";

import PagesList from "./PagesList";
import { CloseButton, MenuButton, OverlayMenu } from "./ActionButtons";

const DropdownMenu = () => {
  const [showMenu, toggleMenu] = useState(false);

  // Screen breakpoints
  const isSX = useMediaQuery("(min-width:0px)");
  const isSM = useMediaQuery("(min-width:600px)");
  const isMD = useMediaQuery("(min-width:900px)");
  const isLG = useMediaQuery("(min-width:1200px)");
  const isXL = useMediaQuery("(min-width:1536px)");

  const breakpoints: Breakpoints = {
    isSX,
    isSM,
    isMD,
    isLG,
    isXL,
  };

  return (
    <>
      <div style={{ border: "2px solid #fffb32" }}>
        <OverlayMenu toggleMenu={toggleMenu} showMenu={showMenu} />
        <MenuButton showMenu={showMenu} />
        <CloseButton
          toggleMenu={toggleMenu}
          showMenu={showMenu}
          breakpoints={breakpoints}
        />
        <PagesList showMenu={showMenu} breakpoints={breakpoints} />
      </div>

      <style jsx>
        {`
          /* The container <div> - needed to position the dropdown content */
          div {
            position: relative;
            display: block;
            width: 55px;
            margin-left: auto !important;
            border-radius: 4px;
          }

          @media (min-width: 900px) {
            div {
              position: absolute;
              right: 0;
              border: ${showMenu ? "none" : "2px solid rgb(255, 145, 77)"};
            }
          }
        `}
      </style>
    </>
  );
};

export default DropdownMenu;
