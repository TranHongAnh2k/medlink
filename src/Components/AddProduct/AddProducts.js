import styled from "styled-components"

export const Container = styled.div`
    margin: 10px;
    background-color: var(--bs-gray-200);

    svg{
        min-width: 15px;
        min-height: 15px;

    }

    span{
        font-size: 1.5rem;
    }
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    h3{
        font-size: 1.5rem;
        margin-left: 5px;
        padding-top:5px;
    }
`
export const Search = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    h4{
        font-size: 1.2rem;
        min-width: 25%;
      
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
`

export const styleButton= {
    borderRadius:'10px',
    margin:'0 10px',
    backgroundColor:'var(--bs-teal)',
    outline:'none',
    border:'var(--bs-teal)'
}



