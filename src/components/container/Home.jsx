import video from "../../assets/video.mp4";



const Home = () => {
  return (
    <div className="section" id="home">
      <video
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full object-cover video-background"
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10">
        <div className="md:flex items-center justify-center">
          <div>
            <div className="sm:text-[2.5rem] mt-32 font-space-grotesk text-10xl text-white font-bold">
              Indulge in Luxury <br /> Pampering at{" "}
              <span className="text-gold">
                The
                <br /> Velvet Room.
              </span>
            </div>
            <div className="mt-15 flex items-center justify-center">
              <button className="px-12 py-4 font-bold text-white bg-gold rounded-lg mr-40 text-sm"> 
                Contact-Us 
                {/* mr-should be changed to align this button to the center of the div */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
