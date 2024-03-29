import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";

const MenuContainer = ({product, items, setItems}) => {
  const [filter, setFilter] = useState("chicken");

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our hot dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 mt-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((item) => (
              <motion.div
               whileTap={{scale: 0.8}}
                key={item.id}
                className={`group ${
                  filter === item.urlParamName ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-xl drop-shadow-lg flex flex-col items-center gap-3 justify-center hover:bg-red-600 duration-100 transition-all ease-in-out`}
                onClick={() => setFilter(item.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    filter === item.urlParamName ? "bg-card" : "bg-cartNumBg"
                  } group-hover:bg-card flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === item.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === item.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {item.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
            <RowContainer items={items} setItems={setItems} flag={false} data={product.filter((item) => item.categories == filter)}/>
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
