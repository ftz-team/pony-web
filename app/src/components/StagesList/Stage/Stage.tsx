import { StageCard, StageCardIcon, StageLine, StagesCardHeader, StagesCardSubHeader } from "./Stage.styled"


export const Stage: React.FC<any> = ({icon, text, date, opened}) => {

    return (
        <StageCard active={opened}>
            <StageCardIcon background={icon}/>
            <StagesCardHeader active={opened}>{text}</StagesCardHeader>
            <StageLine/>
            <StagesCardSubHeader>{date}</StagesCardSubHeader>
        </StageCard>
    )

}