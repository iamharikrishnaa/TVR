// import TVR from "../../assets/TVR.png";
// import image from "../../assets/image.png";

// const Cosmetology = () => {
//   return (
//     <div className="bg-Velvet md:w-full justify-around p-16 ">
//       <div className="section" id="Cosmetology">
//         <div className="grid md:grid-cols-2 place-items-center">
//           <div className="leading-loose cursor-pointer">
//             <div className="font-bold text-white font-space-grotesk sm:text-[1.875rem] text-[1.5rem] mt-10">
//               Saloon and Cosmetology
//             </div>
//             <p className="text-sm text-white leading-8 mb-4">
//               The Velvet Room is your ultimate destination for comprehensive
//               pampering. Our salon offers a range of hair services including
//               haircuts,coloring, styling, extensions, spa treatments, and more.
//               We also provide skin treatments like facials, waxing, threading,
//               and nail services such as gel polish, extensions, and intricate
//               nail art. Bridal and groom makeup services are also available.
//             </p>
//           </div>
//           <div className="rounded-lg mt-20">
//             <img src={TVR} alt="TVR Logo" className="p-4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// const Cosmetology1 = () => {
//   return (
//     <div className="section flex md:flex-row justify-between gap-8" >
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

// export  {Cosmetology,Cosmetology1}



import TVR from "../../assets/TVR.png";
import image from "../../assets/image.png";

// const Cosmetology = () => {
//   return (
//     <div className="bg-Velvet md:w-full justify-around p-16">
//       <div className="section" id="Cosmetology">
//         <div className="grid md:grid-cols-2 place-items-center">
//           <div className="leading-loose cursor-pointer">
//             <div className="font-bold text-white font-space-grotesk sm:text-[1.875rem] text-[1.5rem] mt-10">
//               Saloon and Cosmetology
//             </div>
//             <p className="text-sm text-white leading-8 mb-4">
//               The Velvet Room is your ultimate destination for comprehensive
//               pampering. Our salon offers a range of hair services including
//               haircuts, coloring, styling, extensions, spa treatments, and more.
//               We also provide skin treatments like facials, waxing, threading,
//               and nail services such as gel polish, extensions, and intricate
//               nail art. Bridal and groom makeup services are also available.
//             </p>
//           </div>
//           <div className="rounded-lg mt-20">
//             <img src={TVR} alt="TVR Logo" className="p-4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Cosmetology = () => {
  return (
    <div className="bg-Velvet md:w-full justify-around p-16">
      <div className="section" id="Cosmetology">
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="leading-loose cursor-pointer">
            <div className="font-bold text-white font-space-grotesk sm:text-[1.875rem] text-[1.5rem] mt-10">
              Saloon and Cosmetology
            </div>
            <p className="text-sm text-white leading-8 mb-4">
              The Velvet Room is your ultimate destination for comprehensive
              pampering. Our salon offers a range of hair services including
              haircuts, coloring, styling, extensions, spa treatments, and more.
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

const Cosmetology1 = () => {
  return (
    <div className="section flex flex-col md:flex-row justify-between gap-8">
      <div className="place-items-center gap-12">
        <div className="pl-5">
          <div className="font-bold font-space-grotesk text-5xl mb-5">
            Mind, body, soul: <br />
            prioritize self-care.
          </div>
          <p className="text-sm leading-7 mb-5">
            Saloon and Cosmetology offer services to help you look and feel
            your best. Come in, relax, and let our professionals help you find a
            color and cut that are just right for you. Hair, makeup, skin care,
            nails, and much more are available at our place. And don’t forget the spa.
          </p>
          <button
            type="button"
            className="text-white bg-gold gap-2 font-space-grotesk rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
          >
            Book Appointment Now
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

export { Cosmetology, Cosmetology1 };
