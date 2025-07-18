import OutsideClickHandler from "react-outside-click-handler";
import closeBtn from "./../../assets/img/closeBtn.svg";

const PhoneSupportDialog = ({ dialogVisibility }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] fixed top-0 bottom-0 left-0 right-0 w-full h-screen z-40 flex items-center justify-center">
      <OutsideClickHandler onOutsideClick={() => dialogVisibility(false)}>
        <div className="bg-white text-text-primary rounded-lg p-6 shadow-lg w-[585px] h-[240px] relative z-50">
          <button
            onClick={() => dialogVisibility(false)}
            className="absolute right-4 top-5"
            type="button"
          >
            <img src={closeBtn} />
          </button>
          <h1 className=" text-2xl font-bold text-left mb-3">
            ¡Sumamos atención teléfonica!
          </h1>
          <p className="text-sm">
            De Lunes a Viernes de 09 a 21hs, puedes comunicarte con nosotros si:
            <ul className="list-disc pl-4 pt-3">
              <li>
                Necesitas ayuda para elegir la asistencia al viajero ideal para
                tu viaje.
              </li>
              <li>
                Ya tienes tu voucher con nosotros y tienes dudas o precisas
                hacer cambios.
              </li>
            </ul>
          </p>
          <h2 className="text-2xl text-center font-bold mt-5">
            0810 - 345 - 0684
          </h2>
          <h3 className="text-blue-primary mx-auto text-center font-semibold font-lg">
            ¡No dudes en llamarnos!
          </h3>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default PhoneSupportDialog;
