import { PageHeader } from "../../src/components/PageHeader/PageHeader";
import { Program } from "../../src/components/Programs/Program/Program";
import {  useStagesList } from "../../src/components/StagesList/StagesList";
import { AdminLayout } from "../../src/layouts/AdminLayout/AdminLayout";

export const ProgramPage : React.FC = () => {

    return (
        <AdminLayout>
            <Program/>
        </AdminLayout>
    )

}

export default ProgramPage;