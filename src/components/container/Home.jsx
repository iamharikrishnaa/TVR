import video from "../../assets/video.mp4";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";


const Home = () => {
  return (
    <div className="section h-[766px]" id="home">
      <video
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-[766px] object-cover video-background"
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10">
        <div className="md:flex items-center justify-center">
          <div>
            <div className="mt-12 font-space-grotesk text-[93px]  text-white font-bold">
              Indulge in Luxury <br /> Pampering at{" "}
              <span className="text-gold">
                The
                <br /> Velvet Room.
              </span>
            </div>
            <div className="h-[67px] w-[493px] flex flex-inline ">
              <div className="flex justify-center items-center gap-[30px]">
              <button className="w-[246px] h-[67px]  font-bold text-white bg-gold rounded-[5px] text-lg">
                Contact-Us
              </button>
              <div className="flex w-[217px] h-[48px] justify-center items-center">
                <PlayCircleOutlineIcon
                  className="text-gold"
                  style={{ fontSize: "3rem" }}
                />
                <div className="w-[80px] border-b-2 -mx-0"></div>
                <p className="text-white ml-3 h-[26px] w-[73px]">Explore</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
