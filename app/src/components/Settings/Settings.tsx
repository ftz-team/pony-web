import { PageHeader } from "../PageHeader/PageHeader"
import { SaveButton, ServiceThumb, SettingsCard, SettingsCardHeader, SettingsGrid, SettingsInput } from "./Settings.styled"
import DashBoard from '../PackComponents/src/views/RTL/RTLPage';
import React from "react";

export const Settings : React.FC = () => {

    const [name, setName] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [wash, setWash] = React.useState<any>({});

    React.useEffect(() => {
        fetch("http://188.93.211.127:8000/api/wash/list/?id=1").then((data) => {
            data.json().then((res) => {
                setWash(
                    res[0]
                );
                setDesc(res[0].description)
                setName(res[0].name)
                setUrl(res[0].image)
            })
        })

    }, [])

    const patchChanges = () => {
        const formData  = new FormData();
        formData.append("name", name);
        //formData.append("image", url);
        formData.append("description", desc);
        fetch("http://188.93.211.127:8000/api/upd_wash/1/",{
            method: "PATCH",
            body: formData,
        })
    }

    return (

        <>
            <PageHeader>
                Редактирование точки
            </PageHeader>
            <DashBoard></DashBoard>
            <br></br><br></br>
            <SettingsGrid>
                <SettingsCard>
                    <SettingsCardHeader>
                        Общая информация
                    </SettingsCardHeader>
                    <br></br><br></br>
                    <SettingsGrid>
                        <div>
                            <PageHeader>Название:</PageHeader>
                            <br></br>
                            <SettingsInput value={name} onChange={(e) => setName(e.target.value)}></SettingsInput>
                            <br></br><br></br>
                            <PageHeader>Изображение:</PageHeader>
                            <br></br>
                            <SettingsInput value={url} onChange={(e) => setUrl(e.target.value)}></SettingsInput>
                            <br></br><br></br>
                        </div>
                        <div>
                            <PageHeader>Описание:</PageHeader>
                            <br></br>
                            <SettingsInput value={desc} onChange={(e) => setDesc(e.target.value)}></SettingsInput>
                        </div>
                    </SettingsGrid>
                    
                    <SaveButton onClick={patchChanges}>Сохранить</SaveButton>
                </SettingsCard>
                <SettingsCard>
                    <SettingsCardHeader>
                        Услуги
                    </SettingsCardHeader>
                    
                    {
                        wash.services ? wash.services.map((service:any) => {
                            return <><br></br><ServiceThumb>{service.type_name +" - " + service.price}</ServiceThumb></>
                        }): null
                    }
                    <br></br>
                    <img height="50" width="50" src="https://static.thenounproject.com/png/3557455-200.png"></img>
                </SettingsCard>
            </SettingsGrid>
        </>

    )


}