import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-2 shadow-lg bg-white rounded-lg">
      <img className="w-full h-auto" src={image} alt="courseImage" />
      <div className="flex md:flex-row justify-center items-center space-x-1 mt-2">
        <div className="rounded-full">
          <AiOutlineUser className="text-gold" />
        </div>
        <div className="text-xs mt-1 text-gold">{participants} Students</div>
      </div>
      <div className="flex md:flex-row justify-between items-center mb-2">
        <div className="text-xs font-bold">{category}</div>
        <div className="flex md:flex-row bg-Svelvet rounded-full p-1">
          <div>
            <AiOutlineStar className="text-gold" />
          </div>
          <div className="text-sm font-bold">{rating}</div>
        </div>
      </div>
      <div className="text-sm font-space-grotesk">{title}</div>
      <div className="flex md:flex-row items-center justify-between">
        <div className="text-xs md:text-sm text-gold font-bold">Rs.{price}</div>
        <button className="bg-gold rounded-lg p-1 text-white text-xs md:text-sm">Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;
