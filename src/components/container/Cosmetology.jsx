import TVR from "../../assets/TVR.png";

const Cosmetology = () => {
  return (
    <div className="bg-Velvet w-full justify-around p-16 ">
      <div className="section" id="Cosmetology">
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="leading-loose hover:leading-none cursor-pointer">
            <div className="font-bold text-white font-space-grotesk sm:text-[1.875rem] text-[1.5rem] mt-10">
              Saloon and Cosmetology
            </div>
            <p className="text-sm text-white leading-8 mb-4">
              The Velvet Room is your ultimate destination for comprehensive
              pampering. Our salon offers a range of hair services including
              haircuts,coloring, styling, extensions, spa treatments, and more.
              We also provide skin treatments like facials, waxing, threading,
              and nail services such as gel polish, extensions, and intricate
              nail art. Bridal and groom makeup services are also available.
            </p>
          </div>
          <div className="rounded-lg mt-20">
            <img src={TVR} alt="TVR Logo" className="p-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmetology;
