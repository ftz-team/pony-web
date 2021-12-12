import { Faq } from "../src/components/Faq/Faq"
import { PageHeader } from "../src/components/PageHeader/PageHeader"
import { AdminLayout } from "../src/layouts/AdminLayout/AdminLayout"

export default () => {

    return <AdminLayout>
        <PageHeader>
            FAQ:
        </PageHeader>
        <br></br>
        <Faq/>
        </AdminLayout>

}