import CardGroup from "./components/CardGroup";
import CardsHeader from "./components/CardsHeader";
import Header from "./components/Header";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <div className="container-flex">
        <Header />
        <main className="card-main">
          <CardsHeader />
          <CardGroup />
        </main>
      </div>
    </div>
  );
}
