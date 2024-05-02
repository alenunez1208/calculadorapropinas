import { useMemo } from "react";
import { OrderItem } from "../types/Item";
import { formatPrice } from "../utils";

type OrderTotalsProps = {
  order: OrderItem[];
  propina: number;
  guardarPedido: () => void;
};

const OrderTotals = ({ order, propina, guardarPedido }: OrderTotalsProps) => {
  const subtotal = useMemo(
    () => order.reduce((total, item) => total + item.cantidad * item.price, 0),
    [order]
  );
  const formatPropina = useMemo(() => subtotal * propina, [propina, subtotal]);
  const totalPago = useMemo(
    () => formatPropina + subtotal,
    [formatPropina, subtotal]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold"> {formatPrice(subtotal)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold"> {formatPrice(formatPropina)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold"> {formatPrice(totalPago)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalPago === 0}
        onClick={guardarPedido}
      >
        Guardar Pedido
      </button>
    </>
  );
};

export default OrderTotals;
