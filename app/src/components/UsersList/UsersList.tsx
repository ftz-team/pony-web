import { useState } from "react"
import { PageHeader } from "../PageHeader/PageHeader"
import DashBoard from '../../components/PackComponents/src/views/RTL/RTLPage'
import { UsersTable } from "./UsersTable/UsersTable"

export const UsersList:React.FC = () => {

    return (
        <>
            <PageHeader>Программы</PageHeader>
            <DashBoard></DashBoard>
            <br></br>
            <UsersTable/>
        </>
    )
}