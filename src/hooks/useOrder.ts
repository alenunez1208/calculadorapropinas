import { useState } from "react";
import { Item, OrderItem } from "../types/Item";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [propina, setPropina] = useState(0);

  const handleAddItem = (item: Item) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updateOrder: OrderItem[] = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, cantidad: orderItem.cantidad + 1 }
          : orderItem
      );

      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...item, cantidad: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: Item["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const guardarPedido = () => {
    setOrder([]);
    setPropina(0);
  };

  return {
    order,
    propina,
    setPropina,
    handleAddItem,
    removeItem,
    guardarPedido,
  };
};

export default useOrder;
