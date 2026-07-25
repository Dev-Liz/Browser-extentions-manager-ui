import { data } from "../data";
import data1 from "../data.json";
import Card from "./Card";

export default function CardGroup() {
  return (
    <div className="card-group">
      {data1.map((data) => (
        <Card
          key={data.id}
          logo={data.logo}
          name={data.name}
          description={data.description}
          isActive={data.isActive}
        />
      ))}
    </div>
  );
}
