import useMediaQuery from "@mui/material/useMediaQuery";
import Ticker from "./ticker";
import PhoneSupport from "./phoneSupport";
import SwitchLanguage from "./switchLanguage";
import NavbarMenu from "./navbarMenu";
import A365Logo from "./a365logo";
import SideBar from "./sideBar";

const Navbar = () => {
  const lg = useMediaQuery("(min-width: 1024px)");
  const sm = useMediaQuery("(max-width: 767px)");

  return (
    <div className="w-full bg-[#0371e8] flex items-center justify-center flex-col">
      {lg && <Ticker />}
      <div
        className="w-full max-w-[358px] sm:max-w-[633px] 
            md:max-w-[753px] 
            md:px-0 
            md:pr-4
            md:justify-start
            xl:max-w-[1210px] 
            xl:px-4
            xl:pr-0
            px-4 sm:pr-6 relative flex items-center justify-between h-[80px] mt-5"
      >
        <div className="flex items-center">
          <A365Logo />
          {!sm && <NavbarMenu />}
        </div>
        <div className="flex items-center sm:justify-end">
          {!sm && <PhoneSupport />}
          <SwitchLanguage />
          {sm && <SideBar />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
