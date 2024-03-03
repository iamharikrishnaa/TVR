// import image from "../../assets/image.png";
  
// const Training = () => {
//   return (
//     <div className="section flex justify-between gap-8" id="Training">
//          <div className="place-items-center gap-12">
//            <div className="pl-5">
//               <div className="font-bold font-space-grotesk text-5xl mb-5">
//                  Mind, body, soul: <br />
//                  prioritize self-care.
//               </div>
//               <p className="text-sm leading-7 mb-5">
//                 Saloon and Cosmetology offers services to help you look and feel
//                 your best. Come in, relax, and let our professionals help you find a
//                 color and cut that are just right for you. The hair, makeup, skin
//                 care, nails and so much more is available at our place. And don’t
//                 forget the spa.
//               </p>
//               <button
//                 type="button"
//                 className="text-white bg-gold gap-2 font-space-grotesk rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
//               >
//                Book Appointment Now
//              <svg
//               className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//               >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//               </svg>
//               </button>
//            </div>  
//          </div>
//          <div className=" grid  gap-2 sm:grid-cols-2">
//           <img className="w-full " src={image} alt="service"/>
//           <img className="w-full " src={image} alt="service"/>
//           <img className="w-full " src={image} alt="service"/>
//           <img className="w-full " src={image} alt="service"/>
//           <img className="w-full " src={image} alt="service"/>
//           <img className="w-full " src={image} alt="service"/>
//          </div>
//     </div>
//   );
// };
// export default Training;


import image from "../../assets/image.png";

const Training = () => {
  return (
    <div className="section flex flex-col sm:flex-row justify-between gap-8" id="Training">
      <div className="place-items-center gap-12">
        <div className="pl-5">
          <div className="font-bold font-space-grotesk text-5xl mb-5">
            Mind, body, soul: <br />
            prioritize self-care.
          </div>
          <p className="text-sm leading-7 mb-5">
            Salon and Cosmetology offers services to help you look and feel your
            best. Come in, relax, and let our professionals help you find a
            color and cut that are just right for you. The hair, makeup, skin
            care, nails and so much more are available at our place. And don’t
            forget the spa.
          </p>
          <button
            type="button"
            className="text-white bg-gold gap-2 font-space-grotesk rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
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
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <img className="w-full mb-2 sm:mb-0" src={image} alt="service" />
        <img className="w-full mb-2 sm:mb-0" src={image} alt="service" />
        <img className="w-full mb-2 sm:mb-0" src={image} alt="service" />
        <img className="w-full mb-2 sm:mb-0" src={image} alt="service" />
        <img className="w-full mb-2 sm:mb-0" src={image} alt="service" />
        <img className="w-full mb-2 sm:mb-0" src={image} alt="service" />
      </div>
    </div>
  );
};

export default Training;
