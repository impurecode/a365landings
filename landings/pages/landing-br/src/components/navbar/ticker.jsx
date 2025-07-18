import "./ticker.css";

const Ticker = () => {
  return (
    <>
      <div className="ticker-container">
        <div className="fade-left"></div>
        <p className="marquee">
          <span>
            25% off en viajes de hasta 89 días + 3 cuotas sin interés - del 11
            al 24 de septiembre 25% off en viajes de hasta 89 días + 3 cuotas
            sin interés - del 11 al 24 de septiembre
          </span>
        </p>
        <p className="marquee marquee2">
          <span>
            25% off en viajes de hasta 89 días + 3 cuotas sin interés - del 11
            al 24 de septiembre 25% off en viajes de hasta 89 días + 3 cuotas
            sin interés - del 11 al 24 de septiembre
          </span>
        </p>
        <div className="fade-right"></div>
      </div>
    </>
  );
};

export default Ticker;
