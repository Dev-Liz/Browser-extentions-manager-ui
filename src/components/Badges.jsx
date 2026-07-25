import React from "react";
import Badge from "./Badge";

export default function Badges() {
  const texts = [
    {
      name: "All",
      variant: "active",
    },
    {
      name: "Active",
      variant: "",
    },
    {
      name: "Inactive",
      variant: "",
    },
  ];

  return (
    <div classname="badges-flex">
      {texts.map((text) => (
        <Badge key={text.name} variant={text.variant}>
          {text.name}
        </Badge>
      ))}
    </div>
  );
}
