import styled from 'styled-components';

export const StagesGrid = styled.div`
    display: grid;
    grid-template-columns:1.5fr 2fr;
    grid-column-gap: 80px;
`

export const ApplicationsBox = styled.div`
    background-color: white;
    padding: 30px 40px;
    border-radius: 15px;
`

export const ApplicationCard = styled.div<any>`
    width: 100%;
    background: #F8F9FA;
    border-radius: 12px;
    transition: all 2s;
    margin-top: 20px;
    padding:26px;
    cursor: pointer;
`

export const ApplicationCardName = styled.div<any>`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */


    /* Gray/Gray-500 */

    color: #718096;

`

export const AppTopRow = styled.div<any>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const AppLicationStatus = styled.div<any>`

    color: black;
    border-top: 1px solid #718096;
    padding-top:10px;
    margin: 10px 0px;
    font-weight: bold;
    font-size: 24px;

`

export const ThumbsRow = styled.div<any>`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
`