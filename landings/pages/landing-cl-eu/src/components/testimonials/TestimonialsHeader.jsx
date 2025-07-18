import { useTranslation } from "react-i18next";

const TestimonialsHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className='font-semibold text-blue-2 text-center font-titillium text-3xl sm:text-4xl xl:text-5xl mb-6'>
        {t("index.testimonials.heading")}
      </h3>
      <p
        className='
  text-neutral-black
  text-base
  sm:text-xl
  font-normal
  font-sans
  leading-6
  text-center
'
      >
        {t("index.testimonials.subheading")}
      </p>
    </>
  );
};

export default TestimonialsHeader;
