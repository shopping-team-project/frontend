interface ItemProps {
  item: number;
}

function Card({ item }: ItemProps) {
  return (
    <div>
      <div className="h-64 w-64 rounded-2xl bg-gray-100">이미지 섹션</div>
      <div className="mt-2 text-lg font-bold">제목{item}</div>
      <div className="text-slate-400">지역</div>
      <div className="font-semibold text-orange-400">20,000</div>
    </div>
  );
}

export default Card;
