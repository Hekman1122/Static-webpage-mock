import { BiDownArrow } from "react-icons/bi";
import { nanoid } from "nanoid";
const NavList = ({ item }) => {
  return (
    <div className="  relative group">
      <div className="text-base cursor-pointer flex justify-center items-center xl:gap-2 tracking-wider font-semibold ">
        {item.title}
        <span className="w-0 h-[1px] group-hover:w-full bg-yellow-500 absolute bottom-[-2px] left-0 duration-500"></span>
        {item?.subtitles && (
          <BiDownArrow className="text-neutral-500 group-hover:rotate-180 duration-500" />
        )}
      </div>

      {/* toggle list */}
      <div className="absolute top-[30px] translate-x-[-25%] opacity-0 py-2 flex flex-col gap-2 w-36 border border-neutral-400 rounded-lg bg-white  group-hover:opacity-100 duration-300  hover:opacity-100">
        {item?.subtitles.map((list) => {
          return (
            <p
              key={nanoid()}
              className="text-sm font-semibold text-neutral-500 p-2 text-center cursor-pointer hover:text-yellow-600 duration-300"
            >
              {list}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NavList;
