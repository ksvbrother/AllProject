import "./App.css";
import AccTable from "./Component/AccTable";
import NavBar from "./Component/NavBar";
import SwiperAcc from "./Component/SwiperAcc";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <AccTable></AccTable>

      <SwiperAcc />
    </div>
  );
}

export default App;
