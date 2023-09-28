import { Breakpoints } from "@/types/globals";

import { pagesItems } from "../menuItems";

type Props = {
  showMenu: boolean;
  breakpoints: Breakpoints;
};

const PagesList = ({ showMenu, breakpoints }: Props) => {
  return (
    <div>
      {!breakpoints.isLG && showMenu ? (
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
      <style jsx>
        {`
          div {
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

          @media (min-width: 900px) {
            a {
              display: none;
              padding-left: 20px;
              padding-right: 20px;
            }

            div {
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
    </div>
  );
};

export default PagesList;
