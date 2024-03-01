import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";


const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
      <img src={image} alt="" />
      <div className="mt-2 text-xs font-bold text-Velvet">{category}</div>
      <div className="text-xs mt-2 ">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineUser className="text-Svelvet" />
          </div>
          <div className="text-sm font-bold">{participants}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineStar className="text-gold" />
          </div>
          <div className="text-sm font-bold">{rating}</div>
        </div>
        <div className="text-sm font-bold">Rs.{price}</div>
      </div>
    </div>
  );
};

export default Course;
