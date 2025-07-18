import React from "react";
import flag_ar from "./../../assets/img/testimonials/flag_ar.svg";
import flag_cl from "./../../assets/img/testimonials/flag_cl.svg";
import flag_mx from "./../../assets/img/testimonials/flag_mx.svg";
import { useTranslation } from "react-i18next";

const TestimonialsSlide = ({ index }) => {
  const { t } = useTranslation();
  const country_code = t(`index.testimonials.content.${index}.country_code`);
  const flag =
    country_code === "ar" ? flag_ar : country_code === "cl" ? flag_cl : flag_mx;

  return (
    <div className="mx-auto pb-2">
      <div className="bg-white w-full rounded-lg p-4 card-shadow shadow-lg max-w-[320px] sm:max-w-[360px] h-[210px] testimonial-card">
        <div className="flex items-center gap-4 pb-4">
          <div>
            <img src={flag} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-365-black-primary text-left">
              {t(`index.testimonials.content.${index}.name`)}
            </h4>
            <span>{t(`index.testimonials.content.${index}.country_name`)}</span>
          </div>
        </div>
        <p className="text-base font-normal text-left text-365-black-secondary">
          {t(`index.testimonials.content.${index}.content`)}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSlide;
