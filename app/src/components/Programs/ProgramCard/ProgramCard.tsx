import Router from "next/router";
import { Card, CardDescriptions, CardHeader } from "./ProgramCard.styled";

export const ProgramCard: React.FC<any> = ({ card }) => {

  if (!card){
    return null;
  }

  return (
    <>
      <Card background={card.image} onClick={() => Router.push("/programs/1")}>
        <CardHeader>{card.name}</CardHeader>
        <CardDescriptions>{card.description}</CardDescriptions>
      </Card>
    </>
  );
};
