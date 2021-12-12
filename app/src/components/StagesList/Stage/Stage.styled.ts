import styled from "styled-components";

export const StageCard = styled.div<any>`
    cursor: pointer;
    margin-top: ${props => props.active ? "50px":"7px"};
    margin-bottom: ${props => props.active ? "50px":"0px"};
    display: grid;
    grid-template-columns: 35px 1fr;
    transition: all 1.5s;

`

export const StageCardIcon = styled.div<any>`
    
    background: ${props => `url(${props.background}) no-repeat top center`};
    height: 18px;
    width: 18px;
    background-size: 100%;

`

export const StagesCardHeader = styled.div<any>`

    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.active ? "24px":"14px"};;
    line-height: 140%;
    transition: color 1.5s, font-size 1.5s; 
    /* identical to box height, or 20px */


    /* Gray/Gray-700 */

    color: #2D3748;

`

export const StagesCardSubHeader = styled.div`

    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 150%;
    /* identical to box height, or 18px */


    /* Gray/Gray-400 */

    color: #A0AEC0;


`

export const StageLine = styled.div`

width: 3px;
height: 34px;
    border: 2px solid #E2E8F0;
    margin-top: 1px;
    margin-left: 7px;

`