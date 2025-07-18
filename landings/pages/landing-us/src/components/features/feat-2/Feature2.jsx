import useMediaQuery from "@mui/material/useMediaQuery";
import feature2 from "./../../../assets/img/features/feature_2.svg";
import ButtonQuote from "./../ButtonQuote";
import { useTranslation } from "react-i18next";

const Feature2 = () => {
  const { t } = useTranslation();
  const xs = useMediaQuery("(max-width:639px");

  return (
    <div className="w-full bg-blue-secondary relative">
      <div className="w-full">
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
              fill="#EFF1F4"
              fillOpacity="1"
            ></path>
          </svg>
        )}
      </div>
      <div
        className="flex flex-col place-items-center justify-around relative h-auto pb-5 text-center
    sm:grid sm:grid-cols-[auto_358px] sm:max-w-[633px] mx-auto px-4 sm:px-0
    xl:flex xl:flex-row-reverse xl:items-center xl:justify-center xl:max-w-[1210px] xl:px-0 xl:pb-0"
      >
        <img
          src={feature2}
          alt="Banner"
          className="w-[231px] h-[230px] mt-8 mb-4 sm:m-0 mx-auto xl:w-[400px] xl:h-[400px] xl:transform xl:-scale-x-100 scale-100"
        />
        <div className="sm:mt-24 sm:mb-20 xl:max-w-[606px] xl:mt-36 xl:mb-48">
          <h2
            className="
            font-titillium 
            text-4xl 
            font-semibold 
            text-center
            text-white
            pb-3
            sm:max-w-[200px]
            mx-auto
            xl:text-[64px] 
            xl:leading-[70px]
            xl:max-w-[480px]
            xl:font-bold
          "
          >
            {t("index.features.2.title")}
          </h2>
          <p
            className="font-titillium text-xl font-normal text-center text-white leading-7 mb-6
          xl:max-w-[520px] xl:mb-9 xl:font-medium xl:leading-6
          "
          >
            {t("index.features.2.content")}
          </p>
          {!xs && <ButtonQuote />}
        </div>
      </div>
    </div>
  );
};

export default Feature2;
