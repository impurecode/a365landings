import { Button } from "@mui/material";
import arrow_right from "./../../assets/img/arrow_right.svg";

const ButtonQuote = () => {
  return (
    <div className="flex items-center justify-end lg:justify-center sm:w-[210px] lg:w-[333px] sm:ml-auto xl:m-auto">
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{
          backgroundColor: "#FFBC82",
          color: "#1B2225",
          width: "100%",
          fontWeight: "600",
          fontSize: "20px",
          textTransform: "capitalize",
          fontFamily: "Inter",
          lineHeight: "24px",
          letterSpacing: 0,
          padding: "16px",
          borderRadius: "8px",
          ":hover": {
            backgroundColor: "#FFBC82",
          },
          ":active": {
            backgroundColor: "#FFBC82",
          },
        }}
        variant="contained"
      >
        Cotizar seguro
        <img className="ml-2" src={arrow_right} />
      </Button>
    </div>
  );
};

export default ButtonQuote;
