import React from "react";
import { Sidebar } from "./components/shared/Sidebar";
import { RiAddLine, RiLightbulbLine, RiMenu2Fill, RiPieChart2Line, RiUser2Fill } from "react-icons/ri";

function App() {
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar />
      {/* Menu Movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between
      rounded-tl-xl rounded-tr-xl" >
        <button>
          <RiUser2Fill />
        </button>
        <button>
          <RiAddLine />
        </button>
        <button>
          <RiPieChart2Line />
        </button>
        <button className="text-white">
          <RiMenu2Fill />
        </button>
      </nav>
    </div>
  );
}

export default App;
