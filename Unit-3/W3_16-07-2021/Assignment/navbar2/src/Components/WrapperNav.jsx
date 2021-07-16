import styled from 'styled-components'

export const WrapperNav = styled.div`
background-color: black;
height: 100px;
width: 80%;
margin: auto;
display: flex;
justify-content: space-between;
padding: 0 20px;
align-items: center;
 @media only screen and (max-width: 600px){
    font-size:12px;
}

&>img{
height: 50px;
@media only screen and (max-width: 600px){
    display: none;
}
}
&>div{
    display: flex;
    color: white;
    width: 400px;
    justify-content: space-evenly;
   
}
&>div>button{
    padding: 2px 30px!important;
    background-color: #43c3d4;
    border: none;
    color: white;
    border-radius: 4px;
    
}

`

function WarpperNav() {
    return (
        <WarpperNav/>
    )
}