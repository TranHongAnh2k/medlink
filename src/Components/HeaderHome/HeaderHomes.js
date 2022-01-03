import styled from "styled-components";

export const Container = styled.header`
    height: 60px;
    background-color: var(--bs-teal);
    opacity: .9;
    display: flex;
    justify-content: space-between;
    color: var(--bs-white);
    align-items: center;
    text-align: center;
    padding: 0 20px;

    @media screen and (max-width:1080px){
            svg{
                width: 20px;
                height: 20px;
            }
        }

    @media screen and (max-width:880px){
            svg{
                width: 15px;
                height: 15px;
            }
        }
`

export const Brand = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    h3{
        color: var(--white);
        font-size: 1.8rem;
        font-weight: 500;
        padding: 15px 15px 2px;
        letter-spacing: 1.2px;
        @media screen and (max-width:1080px){
            font-size: 1.5rem;
        }
    }

    :hover{
        cursor: pointer;
    }
`

export const Home = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    h3{
        color: var(--white);
        font-size: 1.8rem;
        font-weight: 400;
        padding: 15px 5px 2px;
        
        @media screen and (max-width:1080px){
            font-size: 1.5rem;
        }

        @media screen and (max-width:880px){
            font-size: 1.2rem;
        }
    }
    :hover{
        cursor: pointer;
    }
`

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`


export const CreateOrder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    /* margin: 0 20px; */
    padding: 2px 10px 0px 10px;
    background-color: var(--bs-yellow);
    border-radius: 5px;
    color: var(--bs-gray-900);
    h3{
        color: var(--bs-gray-900)!important;
        font-size: 1.5rem;
        font-weight: 500;
        padding-left: 5px;
        margin-top:7px ;
        @media screen and (max-width:1080px){
            font-size: 1.5rem;
        }
        @media screen and (max-width:880px){
            font-size: 1.2rem;
        }
    }

    :hover{
        cursor: pointer;
    }
`

export const Buy = styled.div`

`

export const Notify = styled.div``

export const Setting = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-top: 10px;
    h3{
        color: var(--bs-light);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 0 5px;
        letter-spacing: 1.2px;
        padding-top: 5px;
        @media screen and (max-width:1080px){
            font-size: 1.4rem;
        }

        @media screen and (max-width:880px){
            font-size: 1.2rem;
        }
    }
    :hover{
        cursor: pointer;
    }
`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 5px 20px;
    padding-top: 10px;
    color: var(--bs-light);
    
    h3{
        color: var(--bs-light);
        font-size: 1.5rem;
        font-weight: 500;
        padding-left: 5px;
        margin-top: 5px;
        @media screen and (max-width:1080px){
            font-size: 1.4rem;
        }
        @media screen and (max-width:880px){
            font-size: 1.2rem;
        }
    }
    :hover{
        cursor: pointer;
    }
`