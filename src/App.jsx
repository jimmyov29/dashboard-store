import { useState } from "react";
import React from "react";
import { Sidebar } from "./components/shared/Sidebar";
import {
  RiAddLine,
  RiArrowDownSLine,
  RiCloseLine,
  RiDeleteBin6Line,
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
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8 ">
          {/* Header */}
          <header>
            {/* title and searh */}
            <div className="flex flex-col md:flex-row md: justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className=" text-2xl text-gray-300">Jeager Restor</h1>
                <p className=" text-gray-500">16 mayo 2023</p>
              </div>
              <form>
                <div className=" w-full relative">
                  <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  ></input>
                </div>
              </form>
            </div>
            <nav className=" text-gray-300 flex items-center justify-between md:justify-start  md: gap-8 border-b">
              <a
                href="#"
                className=" relative  py-2 pr-4 text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] "
              >
                hot dishes
              </a>
              <a href="#" className=" py-2 pr-4">
                Cold dishes
              </a>
              <a href="#" className=" py-2 pr-4">
                Soup
              </a>
              <a href="#" className=" py-2">
                Grill
              </a>
              {/*1.38.12*/}
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className=" text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 pr-4 rounded-lg">
              {" "}
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className=" p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className=" bg-[#1f1d2b] p-8  rounded-xl flex flex-col items-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              ></img>
              <p className="text-xl">Spicy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 bowls available</p>
            </div>
            {/* Card */}
            <div className=" bg-[#1f1d2b] p-8  rounded-xl flex flex-col items-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              ></img>
              <p className="text-xl">Spicy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 bowls available</p>
            </div>
            {/* Card */}
            <div className=" bg-[#1f1d2b] p-8  rounded-xl flex flex-col items-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              ></img>
              <p className="text-xl">Spicy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 bowls available</p>
            </div>
            {/* Card */}
            <div className=" bg-[#1f1d2b] p-8  rounded-xl flex flex-col items-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              ></img>
              <p className="text-xl">Spicy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 bowls available</p>
            </div>
            {/* Card */}
            <div className=" bg-[#1f1d2b] p-8  rounded-xl flex flex-col items-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              ></img>
              <p className="text-xl">Spicy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 bowls available</p>
            </div>
            {/* Card */}
            <div className=" bg-[#1f1d2b] p-8  rounded-xl flex flex-col items-center text-gray-300">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              ></img>
              <p className="text-xl">Spicy Seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2  fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full"> {/*quite el w-full*/}
          {/* Orders */}
          <div className="relative  pt-16 p-8 text-gray-300 h-full overflow-scroll bg-red-400 pb-96">
            <RiCloseLine className="absolute  p-3 box-content text-gray-400 bg-[#262837] rounded-full left-4 top-4 text-xl" />
            <h1 className=" text-2xl my-4">Order #15</h1>
            {/* Pills buttons */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] py-2 px-4 rounded-xl">
                Dine in
              </button>
              <button className="text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500">
                To go
              </button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                Delivery
              </button>
            </div>
            {/* Card */}
            <div>
              <div className=" grid grid-cols-6 mb-4 p-4 ">
                <h5 className="col-span-4">Items</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className=" grid grid-cols-6 mb-2">
                  {/* Product Description */}
                  <div className=" flex items-center gap-2 col-span-4">
                    <img
                      src="comida.png"
                      className="w-10 h-10 object-cover
                  "
                    ></img>
                    <div>
                      <h5 className="text-sm">Spicy Seasoned sea...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5 ">
                    <input
                      type="text"
                      className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order Note..."
                    ></input>
                  </form>
                  <div>
                    <button className=" border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className=" grid grid-cols-6 mb-2">
                  {/* Product Description */}
                  <div className=" flex items-center gap-2 col-span-4">
                    <img
                      src="comida.png"
                      className="w-10 h-10 object-cover
                  "
                    ></img>
                    <div>
                      <h5 className="text-sm">Spicy Seasoned sea...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5 ">
                    <input
                      type="text"
                      className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order Note..."
                    ></input>
                  </form>
                  <div>
                    <button className=" border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className=" grid grid-cols-6 mb-2">
                  {/* Product Description */}
                  <div className=" flex items-center gap-2 col-span-4">
                    <img
                      src="comida.png"
                      className="w-10 h-10 object-cover
                  "
                    ></img>
                    <div>
                      <h5 className="text-sm">Spicy Seasoned sea...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5 ">
                    <input
                      type="text"
                      className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order Note..."
                    ></input>
                  </form>
                  <div>
                    <button className=" border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/* Submit payment */}
          <div className="bg-[#262837] absolute bottom-0 left-0 p-4 w-full">
              <div className="flex items-center justify-between mb-4">
                <span className=" text-gray-400">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className=" text-gray-400">Subtotal</span>
                <span>$201.03</span>
              </div>
              <div>
                <button className="bg-[#ec7c6a] w-full py-6 px-4 rounded-lg">Continue to payment</button>
              </div>
            {/* Lo movi arriba min */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
