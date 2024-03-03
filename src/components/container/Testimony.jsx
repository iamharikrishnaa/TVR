// import Slider from "react-slick";
// import { carouselData } from "../../Data";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimony = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="section" id="Pricing ">
//       <div className="mb-8">
//         <p className="text-gold font-space-grotesk">TESTIMONIAL</p>
//         <div className="font-bold font-space-grotesk sm:text-[1.875rem] text-[1.5rem]">
//           What are they saying?
//         </div>
//       </div>
//       <div className="flex flex-col justify-evenly ">
//         <Slider  {...settings} >
//           {carouselData.map((d) => (
//             <div
//               key={d.id}
//             >
//               <div className="m-4 px-6 py-6 rounded-xl border cursor-pointer hover:border-gold border-grey">
//                 <div className="">
//                   <p className="mb-8">{d.Review}</p>
//                 </div>
//                 <div className=" rounded-t-xl flex flex-row gap-4 ">
//                   <img
//                     src={d.Pic}
//                     alt="pic"
//                     className="h-[54px] w-[54px] rounded-full "
//                   />
//                   <div className="flex flex-col">
//                     <h1 className="font-bold">{d.name}</h1>
//                     <p>{d.Designation}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Testimony;


import Slider from "react-slick";
import { carouselData } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="section" id="Testimony">
      <div className="mb-8">
        <p className="text-gold font-space-grotesk">TESTIMONIAL</p>
        <div className="font-bold font-space-grotesk sm:text-[1.875rem] text-[1.5rem]">
          What are they saying?
        </div>
      </div>
      <div className="flex flex-col justify-evenly">
        <Slider {...settings}>
          {carouselData.map((d) => (
            <div key={d.id}>
              <div className="m-4 px-6 py-6 rounded-xl border cursor-pointer hover:border-gold border-grey">
                <div className="">
                  <p className="mb-8">{d.Review}</p>
                </div>
                <div className="rounded-t-xl flex flex-row gap-4 items-center">
                  <img
                    src={d.Pic}
                    alt="pic"
                    className="h-[54px] w-[54px] rounded-full"
                  />
                  <div className="flex flex-col flex-grow">
                    <h1 className="font-bold">{d.name}</h1>
                    <p>{d.Designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimony;
