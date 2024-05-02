import { OrderItem, Item } from "../types/Item";
import { formatPrice } from "../utils";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: Item["id"]) => void;
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-grey-200 py-5 last-of-type:border-b"
          >
            <div>
              <p>
                {item.name} - {formatPrice(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.cantidad} -{" "}
                {formatPrice(item.price * item.cantidad)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContents;
