import { useState } from "react";
import React from "react";
import { Sidebar } from "./components/shared/Sidebar";
import {
  RiAddLine,
  RiCloseLine,
  RiLightbulbLine,
  RiMenu2Fill,
  RiPieChart2Line,
  RiSearch2Line,
  RiUser2Fill,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <nav
        className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between
      rounded-tl-xl rounded-tr-xl"
      >
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
          {showMenu ? <RiCloseLine /> : <RiMenu2Fill />}
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 ">
          {/* Header */}
          <header className="p-4">
          {/* title and searh */}
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <h1 className=" text-2xl text-gray-300">Jeager Restor</h1>
                <p className=" text-gray-500">16 mayo 2023</p>
              </div>
              <form>
                <div className=" w-full relative">
                  <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Search">

                  </input>
                </div>
              </form>
            </div>
            <nav className=" text-gray-300 flex items-center ">
              <a href="#" className="border-b py-2 pr-4 border-[#ec7c6a]">hot dishes</a>
              <a href="#" className="border-b py-2 pr-4">Cold dishes</a>
              <a href="#" className="border-b py-2 pr-4">Soup</a>
              <a href="#" className="border-b py-2">Grill</a>
              {/*1.38.12*/}
            </nav>
          </header>
        </div>
        <div className="lg:col-span-2  fixed lg:carrito right-0 "> carrito</div>
      </main>
    </div>
  );
}

export default App;
