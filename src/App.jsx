import { useState } from "react";
import React from "react";
import { Sidebar } from "./components/shared/Sidebar";
import { RiAddLine, RiCloseLine, RiLightbulbLine, RiMenu2Fill, RiPieChart2Line, RiUser2Fill } from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const toggleMenu = ()=>{
    setShowMenu(!showMenu);
  }
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar  showMenu = {showMenu}/>
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between
      rounded-tl-xl rounded-tr-xl" >
        <button className="p-2">
          <RiUser2Fill />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChart2Line />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
        {showMenu ? <RiCloseLine /> : <RiMenu2Fill /> }
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
      <div className="lg:col-span-6 bg-red-400">Hola 1</div>
      <div className="lg:col-span-2 bg-red-200"> productos</div>

      </main>
    </div>
  );
}

export default App;
