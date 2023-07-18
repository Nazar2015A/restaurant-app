import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import Header from "./components/Header";

function App() {
  const [show, setShow] = useState(false)
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('corsin')) {

      const local = JSON.parse(localStorage.getItem('corsin'))
      setItems(local)
    }
    else {
      setItems([])
    }
  },[])
  
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header items={items} setItems={setItems} show={show} setShow={setShow} />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer items={items} setItems={setItems}  show={show} setShow={setShow}/>} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
