import styled from 'styled-components'
import styles from './styles.module.css'

export function Form() {

    const Field = styled.div`
    /* border: 1px solid black; */
    padding: 10px;

    input{
        border: 0;
    border-bottom: 2px solid hotpink;
    border-radius: 2px;
    outline: none;
    font-size: 1rem;
    color: #4e4e4e;
    width: 50px;
    }
    p{
        font-size: 0.5rem;
        font-weight: 700;
        color: gray;
    }
    
    `


    return (
        <div>
            <p>Payment Details</p>
            <Field>
                <p>CARDHOLDER NAME</p>
                <input type="text" name="" id="" />
            </Field>
            <Field>
                <p>CARD NUMBER</p>
                <input type="text" name="" id="" />
            </Field>

            <div className={styles.bottom}>
                <Field>
                <p>EXPARY MONTH</p>
                <input type="date" name="" id="" />
                </Field>
                <Field>
                <p>EXPARY YEAR</p>
                <input type="date" name="" id="" />
                </Field>
                <Field>
                <p>CVV</p>
                <input type="number" name="" id="" />
                </Field>
                
            </div>
        </div>
    )
}