import { useEffect, useState } from "react";
import { PageHeader } from "../PageHeader/PageHeader"
import { useStagesList } from "../StagesList/StagesList";
import { StageThumb } from "../StageThumb/StageThumb";
import StatusThumb from '../StatusThumb/StatusThumb';
import { ApplicationCard, ApplicationCardName, ApplicationsBox, AppLicationStatus, AppTopRow, StagesGrid, ThumbsRow } from "./Stages.styled";

export const Stages : React.FC = () => {

    const [activeStage, StagesComponent] = useStagesList(true);

    const [activeApplication, setActiveApplication] = useState(123);

    const [applications, setApplications] = useState<any>([]);

    const [filtered, setFiltered] = useState<any>([]);

    useEffect(() => {

        const list = [
            {
                confirmed: true,
                result: 1,
                name: "Oliver Liam",    
                id: 123,
                stage: 0,
                email: "oliver@burrito.com",
                phone: "+79897949179",
                questions: [
                    {
                        title: "Что вас мотивирует?",
                        answer: "Природа волки, тигры. Много чего, люблю писать код, да и просто писать люблю."
                    }
                ]
            }
        ]

        setApplications(list)

        setFiltered(list)
    }, [])

    const changeApp = (id : any) => {
        if (activeApplication  == id){
            setActiveApplication(-1)
        }else{
            setActiveApplication(id)
        }
    }

    const changeAppStatus = (id:any) => {

    }

    return (
        <>  
            <PageHeader>
                Этапы
            </PageHeader>
            <br></br>
            <StagesGrid>
                {StagesComponent}
                <ApplicationsBox>
                    <PageHeader>
                        Заявки на этот этап
                    </PageHeader>
                    {filtered.map((app : any) => {
                        return <ApplicationCard onClick={() => changeApp(app.id)}>
                            <AppTopRow>
                                <ApplicationCardName>
                                    {app.name}
                                </ApplicationCardName>
                                {StageThumb(app.stage)}
                            </AppTopRow>
                            <div onClick={() => changeApp(app.id)}>
                            {app.id == activeApplication ? app.questions.map((q : any) => {
                                return <>
                                    <h1>{q.title}</h1>
                                    <h3>{q.answer}</h3>
                                </>
                            }) : null}
                            </div>
                            <AppLicationStatus>
                                Статус:
                            </AppLicationStatus>
                            <ThumbsRow>
                                <div onClick={() => changeAppStatus(app.id)} >{StatusThumb("Отклонена", true, 2)}</div>
                                <div onClick={() => changeAppStatus(app.id)} >{StatusThumb("На рассмотрении", true, 0)}</div>     
                                <div onClick={() => changeAppStatus(app.id)} >{StatusThumb("Принята", true, 1)}</div>
                                                           
                            </ThumbsRow>
                        </ApplicationCard>
                    })}
                </ApplicationsBox>
            </StagesGrid>
            
        </>
    )

}