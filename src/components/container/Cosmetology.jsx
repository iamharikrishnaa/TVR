import TVR from "../../assets/TVR.png";


const Cosmetology = () => {
  return (
    <div className="bg-Velvet h-[575px] md:w-full  justify-around">
      <div className="section h-[575px] md:w-full " id="Cosmetology">
        <div className="grid grid-cols-2  ">
          <div className="grid grid-rows-2 w-[660px] h-[352px] ">
            <div className="font-bold justify-center items-center w-[681px] text-[54px] h-[78px] text-white font-space-grotesk">
              Saloon and Cosmetology
            </div>
            <p className="text-[18px] -mt-20 w-[550px] font-f37 text-white">
              The Velvet Room is your ultimate destination for comprehensive
              pampering. Our salon offers a range of hair services including
              haircuts, coloring, styling, extensions, spa treatments, and more.
              We also provide skin treatments like facials, waxing, threading,
              and nail services such as gel polish, extensions, and intricate
              nail art. Bridal and groom makeup services are also available.
            </p>
          </div>
          <div className="w-[573px]">
            <img  src={TVR} alt="TVR Logo" className="ml-[34px] mt-[58px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmetology;
