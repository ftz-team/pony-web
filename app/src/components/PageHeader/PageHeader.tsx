import { Header } from "./PageHeader.styled"

export const PageHeader : React.FC = ({ children }) => {

    return (
        <>
            <Header>
                {children}
            </Header>
        </>
    )

}