import { useEffect, useState } from "react"
import { PageHeader } from "../../PageHeader/PageHeader"
import { useStagesList } from "../../StagesList/StagesList"
import { UsersList } from "../../UsersList/UsersList"
import { ProgramCard } from "../ProgramCard/ProgramCard"
import { CardBox, ProgramGrid, StagesBox, StatsBox, UsersBox } from "./Program.styled"
import DashBoard from '../../../components/PackComponents/src/views/RTL/RTLPage'
import dynamic from 'next/dynamic'
import { UsersTable } from "../../UsersList/UsersTable/UsersTable"
import Link from "next/link"
const LineChart = dynamic(() => import('../../PackComponents/src/components/Charts/LineChart'), {
    ssr: false
  })
export const Program : React.FC = () => {

    const [programData, setProgramData] = useState<any>( null)

    useEffect(() => {
        fetch("http://188.93.211.127:8000/api/wash/list/?id=1").then((data) => {
            data.json().then((res) => {
                setProgramData(
                    res[0]
                )
            })
        })

    }, [])

    return (
        <>
            <PageHeader>Сводка информации</PageHeader>
            <DashBoard></DashBoard>
            <br></br>
            <ProgramGrid>
                <CardBox>
                    <ProgramCard card={programData}></ProgramCard>
                </CardBox>
                <StatsBox>
                <PageHeader>&nbsp;&nbsp;Посещения</PageHeader>
                &nbsp;&nbsp;&nbsp;&nbsp;Данные за декабрь 2021
                <LineChart />
                </StatsBox>
                <UsersBox>
                    <UsersTable/>
                </UsersBox>
                <StagesBox>
                    <Link href="./stages" passHref>
                        <a>
                            {useStagesList(false)[1]}
                        </a>
                    </Link>
                </StagesBox>
            </ProgramGrid>
        </>
    )

}