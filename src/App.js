import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);
  const [hasPineapple, setHasPineapple] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  function removePineapple() {
    let filteredToppings;
    const pinapple = "pinapple (seriously?)";
    if (pizza.toppings.includes(pinapple)) {
      setHasPineapple(true);
      filteredToppings = pizza.toppings.filter((item) => item !== pinapple);
      setPizza({ ...pizza, toppings: filteredToppings });
    }
  }

  function resetPizza() {
    setPizza({ base: "", toppings: [] });
    setHasPineapple(false);
  }

  return (
    <>
      <Header />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        resetPizza={resetPizza}
      />
      {/* exitBeforeEnter make sure any exiting component is completed before next component's animations */}
      {/* everytime an exit completes (so we go to another page) setShowModal to false */}
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <main>
          <Switch location={location} key={location.key}>
            <Route path="/base">
              <Base addBase={addBase} pizza={pizza} />
            </Route>
            <Route path="/toppings">
              <Toppings
                addTopping={addTopping}
                pizza={pizza}
                removePineapple={removePineapple}
              />
            </Route>
            <Route path="/order">
              {/* setShowModal as a prop to change state and display the modal */}
              <Order
                pizza={pizza}
                setPizza={setPizza}
                setShowModal={setShowModal}
                hasPineapple={hasPineapple}
              />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
