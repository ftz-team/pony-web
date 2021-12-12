import styled from 'styled-components';

export const Card = styled.div<any>`
    
    border-radius: 15px;
    padding: 20px 25px;
    background: ${props => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${props.background}) no-repeat top center`};
    display: flex;
    margin:25px;
    height: 290.5px;
    flex-direction: column;
    position: relative;
    z-index: 1;
    transform-style: preserve-3d;
    cursor: pointer;
    &::after {
        left: -20px;
        top: -20px;
    height: 290.5px;
        width: 100%;
        border-radius: 15px;
        background-color: white;
        border: 20px solid white;
        transform: translateZ(-1px);
        position: absolute;
        z-index: -1;
        content:"";
    }
`

export const CardHeader = styled.div<any>`
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 140%;
    width: 100%;
    /* or 25px */


    /* Black&amp;White/White */

    color: #FFFFFF;
    margin-bottom: 6px;
`

export const CardDescriptions = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    width: 100%;
    /* or 20px */


    /* Black&amp;White/White */

    color: #FFFFFF;
`