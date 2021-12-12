import styled from "styled-components"

export const UsersListTop = styled.div`
    padding: 28px 34px;
    background-color: white;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`

export const UsersListHeader = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 140%;
    /* or 25px */


    /* Gray/Gray-700 */

    color: #2D3748;

`

export const UsersListGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    background-color: white;
    padding: 0 36px;
`

export const UsersListColName = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 150%;
    /* identical to box height, or 15px */


    /* Gray/Gray-400 */

    color: #A0AEC0;
    min-width:10vw;
`

export const UsersTableCard = styled.div`
    padding: 15px 0px;
    border-top: 1px solid #E2E8F0;
    
`

export const ReviewLimiter = styled.div`
    max-width:300px;
`

export const UserInfo = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 40px;
    grid-column-gap: 25px;

`

export const UserAvatar = styled.div<any>`
    background: ${props => `url(${props.url}) no-repeat center center `};
    background-size: 100%;
    border-radius: 30px;

`

export const UserName = styled.div<any>`
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 140%;
/* identical to box height, or 20px */


/* Gray/Gray-700 */

color: #2D3748;
`

export const UserEmail = styled.div<any>`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 140%;
/* identical to box height, or 20px */


/* Gray/Gray-500 */

color: #718096;
`

export const UsersListBottom = styled.div<any>`
        border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    height: 10px;
    width: 100%;
    background-color: white;
`