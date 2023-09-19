import { Breakpoints } from "@/types/globals";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

type Props = {
  toggleMenu: (showMenu: boolean) => void;
  showMenu: boolean;
};

export const OverlayMenu = ({ toggleMenu, showMenu }: Props) => {
  return (
    <>
      <div
        className="overlay-menu"
        onClick={() => {
          toggleMenu(!showMenu);
        }}
      />
      <style jsx>
        {`
          div {
            position: absolute;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

export const MenuButton = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <button>
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
      <style jsx>
        {`
          button {
            cursor: pointer;
            height: 50px;
            width: 50px;
            background-color: rgb(0, 0, 0);
            border: none;
          }

          button:hover,
          button:focus {
            background-color: #2980b9;
          }
        `}
      </style>
    </button>
  );
};

export const CloseButton = ({
  toggleMenu,
  showMenu,
  breakpoints,
}: { breakpoints: Breakpoints } & Props) => {
  const { isLG, isMD, isSM } = breakpoints;

  const setCloseButtonPercentage = () => {
    if (isLG || isMD) {
      return "0";
    }

    if (isSM) {
      return "12%";
    }

    return "12%";
  };

  return (
    <div
      onClick={() => {
        toggleMenu(!showMenu);
      }}
    >
      <span>X</span>
      <style jsx>
        {`
          span {
            display: block;
            margin-top: 12.5px;
          }

          div {
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

          @media (min-width: 960px) {
            div {
              color: rgb(255, 145, 77);
              border: 2px solid rgb(255, 145, 77);
              position: absolute;
              top: 0;
            }
          }
        `}
      </style>
    </div>
  );
};
