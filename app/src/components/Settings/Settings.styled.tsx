import styled from "styled-components";

export const SettingsGrid = styled.div`
    display: grid;
    grid-template-columns: 3.5fr 1.5fr;
    grid-column-gap: 50px;
`

export const SettingsCard = styled.div`

    background-color: white;
    padding: 25px;
    border-radius: 15px;

`

export const SettingsCardHeader = styled.div`

    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 140%;
    /* or 50px */


    /* Gray/Gray-700 */

    color: #2D3748;

` 

export const SaveButton = styled.div`

    background: #4FD1C5;
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
    border-radius: 24px;
    padding: 10px;
    text-align: center;
    min-width: 185px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 200px;

`

export const SettingsInput = styled.textarea`
    
    border-radius: 15px; 
    padding: 10px 25px;
    outline: none;
    border: 1px solid ;

`

export const ServiceThumb = styled.div`

    border-radius: 15px; 
    padding: 10px 25px;
    background-color: black;
    color: white;

`