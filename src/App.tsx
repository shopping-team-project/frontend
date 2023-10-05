import Banner from "./components/Banner";
import Card from "./components/Card";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <div className="mx-auto mt-4 h-screen min-w-max max-w-5xl">
        <div className="block flex h-36 w-full items-center justify-center border-b-2 border-gray-100 py-4 text-4xl font-bold">
          <span>방금 올라왔어요</span>
        </div>
        <div className="mx-auto my-8 grid max-w-4xl grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
