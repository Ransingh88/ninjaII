import { FaInbox } from 'react-icons/fa';
import styled from 'styled-components'

export function Items(props) {

    const Item = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        color: #535353;
    }
    /* background-color: #ddd; */
    padding: 8px 16px;
    display: flex;
    align-items: center;
    font-size: 18px;

    &>p{
        margin-left: 20px;
        font-weight: 500;
    }

`

    return (
        
            <Item>
            {/* <FaInbox /> */}
            <props.icon/>
            <p>{ props.title}</p>
            </Item>
    )
}