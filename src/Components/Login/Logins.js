import styled from "styled-components";

export const Container = styled.div`
    margin: 20% auto 20px;

`

export const LoginForm = styled.div`
    background-color: var(--bs-white);
    margin: 0 30px;
    padding: 0 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Logo = styled.div`
    margin: 10px auto;
    img{
        max-width: 200px;

    }
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
`

export const Icon = styled.div`
    margin: 0 10px;
    img{
        max-width: 180px;
    }

    :hover{
        cursor: pointer;
    }
`
export const Check = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        font-size: 1.5rem;
        margin:10px 0px;
    }

`

export const Pass = styled.div`
    p{
        font-size: 1.5rem;
        color: var(--bs-teal);
        margin-left: 15px;
        position: relative;

        ::before{
        content: '';
        border-radius: 0px 0px 4px 4px;
        bottom: -3px;
        left: 0;
        right:0 ;
        display: block;
        background-color: var(--bs-teal);
        position: absolute;
        height: 2px;
        transform: scaleX(0);
        opacity: 0;
        transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
        width: auto;
        transform-origin: center center;
    }

    &:hover{
            cursor: pointer;
            ::before{
                transform: scaleX(1);
                opacity: 1!important;
            }
    }

    }

    :hover{
        cursor: pointer;
        
    }
`

export const Button = styled.button`
    width: 100%;
    margin: 10px 0;
    font-size: 1.5rem;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: var(--bs-green);
    color:var(--bs-white);

    :hover{
        cursor: pointer;
        background-color: var(--bs-cyan);
    }
`

export const Logup = styled.div`
    display: flex;
    justify-content: center;

    p{
        color: var(--bs-green);
        font-size: 1.5rem;
        margin-right: 2px;
        :hover{
            cursor: pointer;
        }
    }

    span{
        font-size: 1.5rem;
    }
`


