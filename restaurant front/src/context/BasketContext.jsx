import React, { createContext } from "react";
import useLocalHook from "../hook/useLocalHook";
export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalHook("basket", []);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      setBasket([...basket[index].count++]);
    }
  }
  function deleteBasket(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
  }
  function incDecCount(item, oper) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (oper === "inc") {
        basket[index].count++
      setBasket([...basket]);
      return;
    } else if (oper === "dec") {
      if (basket[index].count > 1) {
        basket[index].count--
        setBasket([...basket]);
      }
    }
  }
  return (
    <BasketContext.Provider value={{ basket,addBasket, deleteBasket, incDecCount }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
