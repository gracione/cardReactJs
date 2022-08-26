import styled from "styled-components"

export const Cartao = styled.div`
    width:350px;
    height:120px;
    background:white;
    border-left:solid 10px blue;
    border-radius:5px;

    display:flex;
    justify-content: space-between;
    .dados-horario{
        width:40%;

        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding:1px;
        }
    .horario{
        font-size:45px;
        font-weight:500;
        color:blue;

        display:flex;
        justify-content: center;
        align-items:center;

    }
    .dados-usuario{
        width:60%;

        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding:1px;
        }
    li{
        display:flex;
    }
    li h2{
        color:blue;
    }
    .confirmar-desmarcar{
        height:30px;
        text-align:center;
        font-size:13px;
        font-weight:500;
        
        display:flex;
    }
    .confirmar{
        width:50%;
        background:blue;
        padding:16px;

        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .desmarcar{
        width:50%;
        background:red;
        padding:16px;

        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    `;