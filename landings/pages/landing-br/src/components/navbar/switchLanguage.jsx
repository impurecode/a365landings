import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import OutsideClickHandler from "react-outside-click-handler";

const SwitchLanguage = () => {
  const [openLang, setOpenLang] = useState(false);

  const openLanguage = () => {
    setOpenLang(!openLang);
  };

  return (
    <div className="relative">
      <div
        onClick={openLanguage}
        className="
                w-[108px]
                h-[46px]
                md:w-[80px]
                md:h-[30px] 
                xl:h-[40px] 
                flex items-center justify-between 
                xl:w-[177px] 
                px-4 rounded-lg text-sm xl:text-xl font-inter 
                xl:mr-[14px] pl-4 md:pl-2 xl:pl-4 pr-0 xl:pr-2 border-white border text-white cursor-pointer"
      >
        <div className="flex items-center justify-start">
          <svg
            className="w-[24px] h-[24px] md:w-[20px] md:h-[20px] xl:w-[25px] xl:h-[25px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.15824 11.4426H7.49305C7.60009 9.58693 7.95342 7.87749 8.49842 6.50134C6.75971 7.56822 5.50885 9.35278 5.15824 11.4426ZM12.2587 3.0426C6.95676 3.0426 2.65869 7.34067 2.65869 12.6426C2.65869 17.9445 6.95676 22.2426 12.2587 22.2426C17.5606 22.2426 21.8587 17.9445 21.8587 12.6426C21.8587 7.34067 17.5606 3.0426 12.2587 3.0426ZM12.2587 5.4426C12.1674 5.4426 11.9801 5.48067 11.7003 5.75681C11.4154 6.03804 11.1037 6.50449 10.8161 7.17561C10.3497 8.26393 10.0086 9.7453 9.89753 11.4426H14.6199C14.5088 9.7453 14.1677 8.26393 13.7013 7.17561C13.4137 6.50449 13.102 6.03804 12.8171 5.75681C12.5373 5.48067 12.35 5.4426 12.2587 5.4426ZM17.0243 11.4426C16.9173 9.58693 16.564 7.87749 16.019 6.50134C17.7577 7.56822 19.0085 9.35278 19.3591 11.4426H17.0243ZM14.6199 13.8426H9.89753C10.0086 15.5399 10.3497 17.0213 10.8161 18.1096C11.1037 18.7807 11.4154 19.2472 11.7003 19.5284C11.9801 19.8045 12.1674 19.8426 12.2587 19.8426C12.35 19.8426 12.5373 19.8045 12.8171 19.5284C13.102 19.2472 13.4137 18.7807 13.7013 18.1096C14.1677 17.0213 14.5088 15.5399 14.6199 13.8426ZM16.019 18.7839C16.564 17.4077 16.9173 15.6983 17.0243 13.8426H19.3591C19.0085 15.9324 17.7577 17.717 16.019 18.7839ZM8.49842 18.7839C7.95343 17.4077 7.60009 15.6983 7.49305 13.8426H5.15824C5.50885 15.9324 6.75971 17.717 8.49842 18.7839Z"
              fill="white"
            />
          </svg>
          <span className="pl-1 xl:pl-2 text-base md:text-sm xl:text-base uppercase xl:capitalize w-[23px] md:w-[20px] xl:w-full overflow-hidden ">
            Español
          </span>
        </div>
        <svg
          className={"ml-4 md:ml-0 " + (openLang ? "transform rotate-180" : "")}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.51358 9.54569C6.98221 9.07706 7.74201 9.07706 8.21064 9.54569L12.1621 13.4972L16.1136 9.54569C16.5822 9.07706 17.342 9.07706 17.8106 9.54569C18.2793 10.0143 18.2793 10.7741 17.8106 11.2427L13.0106 16.0427C12.542 16.5114 11.7822 16.5114 11.3136 16.0427L6.51358 11.2427C6.04495 10.7741 6.04495 10.0143 6.51358 9.54569Z"
            fill="white"
          />
        </svg>
      </div>

      {openLang && (
        <OutsideClickHandler onOutsideClick={() => setOpenLang(false)}>
          <div className="language-selector px-4 absolute top-[46px] rounded-lg bg-white w-[177px] z-10 border-[#5C95E5] border-[2px]">
            <FormControl>
              <RadioGroup defaultValue="es" name="radio-buttons-language">
                <FormControlLabel
                  value="es"
                  control={<Radio />}
                  label="Español"
                />
                <FormControlLabel
                  value="pt"
                  control={<Radio />}
                  label="Portugués"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default SwitchLanguage;
