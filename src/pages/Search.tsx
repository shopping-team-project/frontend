import { redirect, useParams } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import fakeitemdb from "../fakeitemdb.json";

export type fakeItemDB = typeof fakeitemdb;

export default function Search() {
  const { item } = useParams();
  console.log(item);
  if (item === undefined) {
    redirect("/");
  }

  return (
    <>
      <Header />
      <div className="mx-auto mt-4 h-screen min-w-max max-w-5xl">
        <div className="flex h-36 w-full items-center justify-center border-b-2 border-gray-100 py-4 text-4xl font-bold">
          <span>{item}에 대한 검색 결과</span>
        </div>
        <div className="mx-auto my-8 grid max-w-4xl grid-cols-3 gap-8">
          {fakeitemdb
            .filter((i) => i.itemName.includes(item!))
            .map((i) => {
              return <Card item={i} key={i.itemid} />;
            })}
        </div>
      </div>
    </>
  );
}
