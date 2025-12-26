import { Search, Menu, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className=" fixed w-full h-20 px-6 flex items-center justify-between bg-[#f7f4f2]">
      <div className="flex-1 flex justify-start pl-[350px]">
        <div className="relative w-[550px] max-w-full">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder='Try searching "insights"'
            className="w-full h-11 pl-11 pr-4 rounded-full bg-white text-sm 
                       placeholder-gray-400 border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200">
          <Menu size={18} />
        </button>

        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500" />

        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white">
          <Plus size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
