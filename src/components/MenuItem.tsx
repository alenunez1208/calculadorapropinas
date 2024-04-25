import { Item } from "../types/Item";

type MenuItemProps = {
  item: Item;
  handleAddItem: (item: Item) => void;
};

const MenuItem = ({ item, handleAddItem }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 text-lg rounded-lg flex justify-between"
      onClick={() => handleAddItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
