import image from "../../assets/image.png";

const Training = () => {
  return (
    <div 
      className="section flex flex-row justify-between "
      id="Training"
    >
      <div className="flex flex-col justify-center gap-[18px]">
        <div className="font-bold font-space-grotesk text-[49px]">
          Mind, body, soul: <br />
          prioritize self-care.
        </div>
        <p className="text-[18px] w-[580px] h-[108px] font-f37">
          Salon and Cosmetology offers services to help you look and feel your
          best. Come in, relax, and let our professionals help you find a color
          and cut that are just right for you. The hair, makeup, skin care,
          nails and so much more is available at our place. And don’t forget
          the spa.
        </p>
        <div className="mt-[15px]">
          <button
            type="button"
            className="text-white bg-gold gap-2 font-space-grotesk rounded-lg text-sm px-2 py-2.5 inline-flex items-center"
          >
            Book Appointment Now
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>  {/*left 3 items*/}
      <div className="grid gap-1 width-[600px] sm:grid-cols-2">
        <img src={image} alt="service" />
        <img src={image} alt="service" />
        <img src={image} alt="service" />
        <img src={image} alt="service" />
        <img src={image} alt="service" />
        <img src={image} alt="service" />
      </div>{/*left 3 items*/}
    </div>
  );
};

export default Training;
