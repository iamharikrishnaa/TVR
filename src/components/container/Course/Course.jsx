import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-2 shadow-lg  bg-white rounded-lg">
      <img src={image} alt="courseImage" />
      <div className="flex md:flex-row justify-center items-center space-x-1 mt-2">
        <div className="rounded-full">
          <AiOutlineUser className="text-gold" />
        </div>
        <div className="text-sm mt-1 text-gold">{participants} Students</div>
      </div>
      <div className="flex md:flex-row justify-between items-between mb-2">
        <div className="text-xs font-bold ">{category}</div>
        <div className="flex md:flex-row bg-Svelvet rounded-full p-1">
          <div>
            <AiOutlineStar className="text-gold" />
          </div>
           <div className="text-sm font-bold">{rating}</div>
        </div>
      </div>
      <div className="text-[4px] font-space-grotesk">{title}</div>
      <div className="flex items-center justify-between ">
        <div className="text-sm text-gold font-bold">Rs.{price}</div>
        <button className="bg-gold rounded-lg p-1 text-white ">Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;
