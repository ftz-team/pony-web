import styled from 'styled-components';  

export const Thumb = styled.div<any>`
    padding: 4px 11px;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    text-align: center;
    border-radius: 20px;
    max-width: 100px;

    /* Black&amp;White/White */

    color: #FFFFFF;
    background-color: ${props => props.stage == 0 ? "black" : props.stage == 1 ? "#4FD1C5" : props.stage == 2 ? "#6FCF97" : "#00FF6A"};
`