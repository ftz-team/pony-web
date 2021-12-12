import styled from "styled-components";


export const MainContainer = styled.div`

    background-color: #F8F9FA;
    display: grid;
    grid-template-areas: "navigation content";
    grid-template-columns: 1fr 5fr;
    height: 100vh;

`

export const Navigation = styled.div`
    grid-area: navigation;
    padding: 0px 10%;
`

export const Content = styled.div`
    grid-area: content;
    padding: 55px 5%;
    height: 100vh;
    overflow-y: scroll;
`

export const NavigationItem = styled.div<any>`
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-column-gap: 12px;
    background-color: ${props => props.active ? "white" : "transparent"};
    color: ${props => props.active ? "black" : "#A0AEC0"};
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 150%;
    transition: all 1s;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 20px;
    padding: 12px 16px;
    align-items: center;
`