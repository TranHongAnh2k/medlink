import styled from "styled-components";

export const Container = styled.div `
    margin: 20px;
    background-color: var(--bs-gray-300);
    padding: 5px;
    min-height: 100vh;
    span{
        font-size: 1.5rem;
    }

    svg{
        width: 15px;
        height: 15px;
    }
    
`



export const InputProduct = styled.div `
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    margin:10px auto;
    position: relative;
    background-color: var(--bs-white);
`
export const styleButton = {
    color: "white",
    backgroundColor: "var(--bs-teal)",
    borderRadius: '10px',
    outline:'none',
    border:'none',
    margin:'0 10px',

    
};

export const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const Add = styled.div`
    display: flex;
    align-items: center;

    h3{
        font-size: 1.8rem;
        margin-top: 10px;
    }
`
export const Search = styled.div`
    font-size: 1.5rem;

`
export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    label{
        font-size: 1.5rem;
        min-width: 100px;
        margin-right: 10px;
        font-weight: 500;
    }
`

export const Access = styled.div`
    /* position: absolute; */
    margin: 30px;
`



