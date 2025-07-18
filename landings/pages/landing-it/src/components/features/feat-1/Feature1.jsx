import feature from "../../../assets/img/features/feature_1.svg";
import { useTranslation } from "react-i18next";
import RingBackground2 from "../../shared/RingBackground2";

const Feature1 = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full relative lg:mb-[90px]">
      <div
        className="
        flex flex-col place-items-center justify-around
        relative h-auto pb-16 px-6
        sm:grid sm:grid-cols-[auto_358px] sm:pb-14 sm:mt-[170px] sm:max-w-[633px] mx-auto 
        xl:flex xl:flex-row xl:items-center xl:justify-start xl:max-w-[1210px] xl:px-0 xl:pb-0"
      >
        <img
          src={feature}
          alt="Banner"
          className="w-[231px] h-[230px] mt-20 sm:mt-0 mb-9 sm:mb-0 xl:w-[458px] xl:h-[455px]"
        />
        <div className="w-full xl:w-[606px]">
          <h2
            className="
          font-titillium
          text-4xl
          xl:text-[64px]
          sm:mt-10
          font-bold
          sm:font-semibold
          text-center text-blue-2 mb-3 sm:max-w-[200px] sm:mx-auto
          xl:max-w-full
          xl:pb-4
          xl:mt-0
          xl:font-bold
          "
          >
            {t("index.features.1.title")}
          </h2>
          <p className="font-titillium text-xl font-semibold text-center text-[#323334] leading-7">
            {t("index.features.1.content")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
