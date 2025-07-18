import hamburguer from "./../../assets/img/navbar/hamburguer.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Whatsapp from "./../../components/navbar/logo_whatsapp.svg";
import PhoneIcon from "./../../components/navbar/phone.svg";

export default function SideBar() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <div className="text-right bg-[#0371e8] ">
      <>
        <button
          type="button"
          onClick={toggleDrawer(true)}
          className="ml-9 mt-1"
        >
          <img src={hamburguer} />
        </button>
        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
          <Box
            className="bg-[#0371e8] h-screen "
            sx={{ width: 320 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <div className="flex justify-end pt-6">
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon className="text-white " fontSize="large" />
              </IconButton>
            </div>
            <div className="text-right text-white text-2xl font-medium pt-[122px] space-y-8 pr-4 flex items-end justify-center flex-col">
              <div className="flex flex-col justify-center space-y-8">
                <a href="#">Mi Voucher</a>
                <a href="#">Preguntas Frecuentes</a>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <a href="#" className="flex justify-end pt-[112px]">
                  <img src={PhoneIcon} className="mr-[10px]" />
                  Teléfono
                </a>
                <a href="#" className="flex justify-end">
                  <img src={Whatsapp} className="mr-[10px]" />
                  Ventas
                </a>
              </div>
            </div>
          </Box>
        </Drawer>
      </>
    </div>
  );
}
