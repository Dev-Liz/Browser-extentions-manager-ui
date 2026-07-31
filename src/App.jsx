import Extensions from "./components/Extensions";
import Header from "./components/Header";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <div className="container-flex">
        <Header />
        <Extensions />
      </div>
    </div>
  );
}
