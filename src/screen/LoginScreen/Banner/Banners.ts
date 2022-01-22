import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
`

export const Item = styled.div`
    position: relative;

    img{
        width: 100%;
        filter: brightness(80%);

    }
`

export const Button = styled.button`
    padding: 10px 20px;
    outline: none;
    border-radius: 5px;
    border:none;
    background-color:var(--bs-green) ;
    font-size: 1.5rem;
    color:var(--bs-white);
    margin-top: 10px;
    :hover{
        cursor: pointer;
        background-color: var( --bs-teal);
        opacity: .9;
    }
`

export const Decription = styled.div`
    position: absolute;
    bottom:20%;
   
    left: 10%;

`

export const Content = styled.div`
    h2{
        font-size: 2.5rem;
        font-weight: 500;
        color:var(--bs-white);
        letter-spacing: 1;
        text-shadow: 1px 1px 0px var(--bs-gray-700);
    }
    h3{
        font-size: 1.8rem;
        font-weight: 500;
        color:var(--bs-white);
        text-shadow: 1px 1px 0px var(--bs-gray-800);
    }
`

