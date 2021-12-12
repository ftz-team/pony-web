import { Stage } from "./Stage/Stage";
import { StagesCard, StagesCardHeader } from "./StagesList.styled";
import not from "../../assets/img/not.png";
import { useEffect, useState } from "react";

type StagesProps = {
  collapsable?: boolean;
};

export const hardCodeTimes = {
  0: '09:00 - 10:00',
  1: '10:00 - 11:00',
  2: '11:00 - 12:00',
  3: '12:00 - 13:00',
  4: '13:00 - 14:00',
  5: '14:00 - 15:00',
  6: '15:00 - 16:00',
  7: '16:00 - 17:00',
  8: '17:00 - 18:00'
}

export const useStagesList: any = (collapsable: any) => {
  const [opened, setOpened] = useState(0);
  const [reservations, setReservations] = useState<any>([]);

  useEffect(() => {

    fetch("http://188.93.211.127:8000/api/get_reservations/?wash=1").then((data) => {
      data.json().then((res) => {
        setReservations(res);
        console.log(res);
        
      })
    })

  },[])

  const onItemClick = (num: any) => {
    if (collapsable) {
      setOpened(num);
    }
  };

  useEffect(() => {
    if (!collapsable) {
      setOpened(-1);
    }
  }, [collapsable]);

  return [
    opened,
    <>
      <StagesCard>
        <StagesCardHeader>Очередь</StagesCardHeader>
        {reservations && [1,2,3,4,5,6,7,8].map((index : any ) => {
          let l = reservations.filter((el:any)=> {return el.slot == index});
          if (l.length > 0) {
            return  <Stage
          opened={opened == 0}
          icon={not.src}
          text={l[0].user.name+` (#${l[0].code})`}
          //@ts-ignore
          date={hardCodeTimes[index]}
        />
          }else{
            return <Stage
            opened={opened == 0}
            icon={not.src}
            text={"Свободно"}
            //@ts-ignore
            date={hardCodeTimes[index]}
          />
          }
          

          
        })}
      </StagesCard>
    </>,
  ];
};
