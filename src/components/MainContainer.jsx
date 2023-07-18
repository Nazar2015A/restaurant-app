import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";

import { product } from "../utils/data";
import CartContainer from "./CartContainer";
import { useStateValue } from "../context/StateProvider";

const MainContainer = ({show, setShow, items, setItems }) => {

  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue])

  const scrollMinus = () => {
    if (scrollValue >= 0 ) {
      setScrollValue(0)
      setScrollValue((prev) => prev - 200)
    }
    if (scrollValue < 0) {
      
      setScrollValue((prev) => prev - 200)
    }
  }

  const scrollPlus = () => {
    if (scrollValue >= 0 ) {
      setScrollValue((prev) => prev + 200)
    }
    if (scrollValue < 0) {
      setScrollValue(0)
      setScrollValue((prev) => prev + 200)
    }
  }

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full lg:my-6 mt-20 mb-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">Our fresh & healthy fruits</p>
          <div className="hidden md:flex gap-3 item-center">
            <motion.div onClick={() => scrollMinus()} whileTap={{scale: 0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"><MdChevronLeft className="text-lg text-white" /></motion.div>
            <motion.div onClick={() => scrollPlus()}  whileTap={{scale: 0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"><MdChevronRight className="text-lg text-white" /></motion.div>
          </div>
        </div>
        <RowContainer items={items} setItems={setItems} flag={true} scrollValue={scrollValue} data={product.filter((item) => item.categories === 'fruits')}/>
      </section>

      <MenuContainer items={items} setItems={setItems} product={product} />

      {
        show && (<CartContainer items={items} setItems={setItems} show={show} setShow={setShow} />)
      }
    </div>
  );
};

export default MainContainer;
