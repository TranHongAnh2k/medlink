import styled from 'styled-components'

export const Container = styled.header`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    /* position: fixed; */
 
`

export const Brand = styled.div`
        text-align: center;
        margin-right: auto;
        margin:0 5%;
    img{
        width: 150px;

    }
`

export const Nav = styled.div`
     @media screen and (max-width:860px){
        position: fixed;
      
        background-color: var(--bs-teal);
        height: 100vh;
        left: 0;
        bottom: 0;
        top: 0;
        min-width: 40vw;
        z-index: 999;
        transform:${(props)=>!props.toggle ?  `translateX(-100%);`:0};
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 1s;
    }

`

export const Items = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
    
    @media screen and (max-width:860px){
        
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-top: 20px;
        
        
    }


   
    
`

export const Item = styled.li`
    font-size: 2rem;
    padding: 0 20px;
    position: relative;

    
    ::before{
        content: '';
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
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
        transform-origin: left center;
    }

    &:hover{
            cursor: pointer;
            ::before{
                transform: scaleX(1);
                opacity: 1!important;
            }
    }

    @media screen and (max-width:800px){
        padding: 15px 3 0px;
        align-items: center;
        :hover{
            background-color: var(--bs-info);
        }
    }
`

export const Bar = styled.div`
    margin-left: auto;
    margin-right: 5%;
    display: none;
    @media screen and (max-width:780px){
        display: block;
    }
    :hover{
        cursor: pointer;
    }
`

export const Menu = styled.div`
    display: none;
    @media screen and (max-width:780px){
        display: flex;
        justify-content: space-between;

        span{
            margin-top:3px;
            margin-right: 5%;
            :hover{
                cursor: pointer;
            }
        }
    }

    :hover{
        background-color: var(--bs-info);
    }
`