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
    margin: 0px 10px;

    /* Black&amp;White/White */

    color: #FFFFFF;
    background-color: ${props => !props.active ? "#A0AEC0": props.type == 0 ? "#F6AD55" : props.type == 1 ? "black" : "#E53E3E"};

`