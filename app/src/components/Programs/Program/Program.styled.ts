import styled from 'styled-components';

export const ProgramGrid = styled.div`

    display: grid;
    grid-template-areas: 
        "card card stats stats"
        "users users users stages";
    grid-column-gap: 45px;
    grid-row-gap: 50px;
    grid-template-columns: 1.3fr 1fr 1fr 2fr ;
    grid-template-rows: 1fr 3fr;

`

export const CardBox = styled.div`
    grid-area: card;
`


export const StatsBox = styled.div`
    grid-area: stats;
    background-color: white;
    border-radius: 15px;
    padding: 15px;
`



export const UsersBox = styled.div`
    grid-area: users;
`



export const StagesBox = styled.div`
    grid-area: stages;
    cursor: pointer;
`
