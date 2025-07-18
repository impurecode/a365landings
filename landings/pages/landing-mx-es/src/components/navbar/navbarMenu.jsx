import logo_whatsapp from "./logo_whatsapp.svg";

const NavbarMenu = () => {
  return (
    <div
      className="navbar-menu text-white font-titillium text-base xl:text-xl font-semibold space-x-[20px] xl:space-x-[43px] flex
        xl:ml-[202px]
        md:pl-[34px]
        md:pr-[55px]
        "
    >
      <a href="#">Mi Voucher</a>
      <a href="#">Preguntas Frecuentes</a>
      <a href="#" className="flex">
        <img className="mr-2" src={logo_whatsapp} />
        <span>Ventas</span>
      </a>
    </div>
  );
};

export default NavbarMenu;
