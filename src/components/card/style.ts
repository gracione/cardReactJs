import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100vh;
    background:blue;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:1px;
    `;
export const Cartao = styled.div`
    width:60vh;
    height:18vh;
    background:white;
    border:solid;
    border-radius:5px;

    display:flex;
    justify-content: space-between;
    .dados-horario{
        width:50%;
        border:solid;
        display:flex;

        flex-direction: column;
        justify-content: space-between;
        padding:1px;
        }
    .dados-usuario{
        width:50%;
        border:solid;

        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding:1px;
        }
    li{
        display:flex;
    }
    .confirmar-desmarcar{
        display:flex;
        justify-content: space-between;
    }
    .confirmar{
        background:green;
    }
    .desmarcar{
        background:red;
    }
    `;