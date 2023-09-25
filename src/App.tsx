import Header from "./components/Header";
import Nav from "./components/Nav";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Counter />
      <div>메인페이지 </div>
    </>
  );
}

export default App;
