import useMediaQuery from "@mui/material/useMediaQuery";
import feature from "./../../../assets/img/features/feature_3.svg";
import { useTranslation } from "react-i18next";
import RingBackground from "../../shared/RingBackground";

const Feature3 = () => {
  const { t } = useTranslation();
  const xs = useMediaQuery("(max-width:639px");

  return (
    <div className="w-full relative">

      {xs && (
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
            fill="#2F6DE0"
            fillOpacity="1"
          ></path>
        </svg>
      )}
      <div
        className="flex flex-col place-items-center justify-around relative h-auto pb-16 sm:pb-8 
        sm:grid sm:grid-cols-[auto_358px] sm:max-w-[633px] sm:mx-auto
        xl:flex xl:flex-row xl:items-center xl:justify-center xl:max-w-[1210px] xl:px-0 xl:pb-0
        "
      >
        <img
          src={feature}
          alt="Banner"
          className="w-[227px] h-[229px] mt-10 sm:mt-0 
          xl:w-[458px] xl:h-[455px]"
        />
        <div className="px-6 sm:px-0 mt-14 xl:px-0 xl:flex xl:items-center xl:justify-center xl:flex-col">
          <h2
            className="font-titillium text-3xl sm:text-4xl font-semibold text-center text-blue-2 pb-3 
          sm:max-w-[260px]
          sm:mt-8
          mx-auto
          xl:text-[64px]
          xl:font-bold
          xl:max-w-[606px]
          xl:leading-[70px]
          xl:mt-0
          "
          >
            {t("index.features.3.title")}
          </h2>
          <p className="font-titillium text-xl font-semibold text-center text-neutral-black leading-7 xl:max-w-[520px]">
            {t("index.features.3.content")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
