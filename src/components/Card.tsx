import { Item } from "../responseTypes";

interface ItemProps {
  item: Item;
}

function Card({ item }: ItemProps) {
  return (
    <div>
      <div className="h-64 w-64 rounded-2xl bg-gray-100">이미지 섹션</div>
      <div className="mt-2 text-lg font-bold">{item.itemName}</div>
      <div className="text-slate-400">{item.sellPlace}</div>
      <div className="font-semibold text-orange-400">{item.price}</div>
    </div>
  );
}

export default Card;
