import { useState } from "react";
import { Item, OrderItem } from "../types/Item";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const handleAddItem = (item: Item) => {
    const newItem: OrderItem = { ...item, cantidad: 1 };
    setOrder([...order, newItem]);
  };

  return { handleAddItem };
};

export default useOrder;
