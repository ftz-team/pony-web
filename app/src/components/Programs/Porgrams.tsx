import { SetStateAction, useEffect, useState } from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import DashBoard from "../../components/PackComponents/src/views/RTL/RTLPage";
import { CardsContainer } from "./Porgrams.styled";
import { ProgramCard } from "./ProgramCard/ProgramCard";
import { EventService } from "../../services/Event";
import { withAuth } from "../../hoc/withAuth";

const eventService = new EventService();

const getEvents = async () => {
  const r = await eventService.getEvents();
  console.log(r);
  return r;
};

export const Programs: React.FC = withAuth(() => {
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getEvents();
      setPrograms(res || []);
    }
    fetchData();
  }, []);

  return (
    <>
      <PageHeader>Программы</PageHeader>
      <DashBoard></DashBoard>
      <br />
      <CardsContainer>
        {programs.map((program) => (
          <ProgramCard card={program} />
        ))}
      </CardsContainer>
    </>
  );
});
