import styled from "styled-components";

export const Container = styled.div`
    min-width: 50px;
    
    svg{
        width: 20px;
        height: 20px;
    }
`

export const Item = styled.div`
    display: flex;
    padding: 5px 5px;
    align-items: center;
    

    :hover{
        cursor: pointer;
        background-color: var(--bs-teal);
        color: var(--bs-white);
        h3{
            color: var(--bs-white);
        }
    }

    h3{
        font-size: 1.5rem;
        padding-top: 5px;
        margin-left: 3px;
        
    }
`

