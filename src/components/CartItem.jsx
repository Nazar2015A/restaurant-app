import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

const CartItem = ({ item, items,  setItems, flag, setFlag}) => {
  
  const [qty, setQty] = useState(item.qty);

  const plusQty = () => {
    item.qty++
    setItems([...items])
    setQty((prev) => prev + 1)
    setFlag(flag + 1);
  }
  const minusQty = () => {
    if (qty >= 2) {
      item.qty--
      setItems([...items])
      setQty((prev) => prev - 1)
      setFlag(flag + 1);
    }
    if (qty == 1) {
      setItems([...items.filter((el) => {
        return el.id !== item.id
      })])
      setFlag(flag + 1);
    }
  }

  useEffect(() => {
    setItems([...items])
  },[item])
  useEffect(() => {
    setQty(item.qty)
  },[item.qty])

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 select-none">
      <img
        src={item?.image}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {item.qty * parseFloat(item.price)}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto">
        <motion.div
          whileTap={{ scale: 0.75 }}
        onClick={() => minusQty()}
        >
          <BiMinus className="text-gray-50 cursor-pointer" />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => plusQty()}
        >
          <BiPlus className="text-gray-50 cursor-pointer" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;