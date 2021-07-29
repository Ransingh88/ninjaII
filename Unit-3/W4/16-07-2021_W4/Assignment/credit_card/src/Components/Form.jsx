import styled from 'styled-components'
import styles from './styles.module.css'
import { FaCalendar, FaCreditCard, FaUser } from 'react-icons/fa';

export function Form() {

    const Field = styled.div`

    *{
        box-sizing: border-box;
    }
    /* border: 1px solid black; */
    padding: 10px;

    input{
    border: 0;
    border-bottom: 2px solid hotpink;
    border-radius: 2px;
    outline: none;
    font-size: 1rem;
    color: #4e4e4e;
    width: 100%;
    position: relative;
    padding-left:20px ;
    margin-right: 10px;
    }
    p{
        font-size: 0.5rem;
        font-weight: 700;
        color: gray;
    }
    span{
        color: rgb(252, 39, 92);
        font-size: 0.8rem;
        position: absolute;
        z-index: 1;
    }
    
    `


    return (
        <div className={styles.form}>
            <p>Payment Details</p>
            <Field>
                <p>CARDHOLDER NAME</p>
                <span><FaUser/></span>
                <input type="text" name="" id="" />
                
            </Field>
            <Field>
                <p>CARD NUMBER</p>
                <span><FaCreditCard/></span>
                <input type="text" name="" id="" />
            </Field>

            <div className={styles.bottom}>
                <Field>
                    <p>EXPARY MONTH</p>
                    <span><FaCalendar/></span>
                <input type="text" name="" id="" />
                </Field>
                <Field>
                    <p>EXPARY YEAR</p>
                    <span><FaCalendar/></span>
                <input type="text" name="" id="" />
                </Field>
                <Field>
                    <p>CVV</p>
                    <span><FaCreditCard/></span>
                <input type="number" name="" id="" />
                </Field>
            </div>
            <p className={styles.payment}>Payment amount: <span>12 300</span></p>
            <button>PAY</button>
        </div>
    )
}