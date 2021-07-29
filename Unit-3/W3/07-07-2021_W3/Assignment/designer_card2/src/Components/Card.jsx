import styles from './Styles.module.css'
import {CopyAddress} from './CopyAddress'
import { faCopy, faQrcode } from '@fortawesome/free-solid-svg-icons'



export function Card(props) {
    return (
        <div className={styles.cardMain}>
            <div className={styles.content}>
                <img src={props.img} alt="logo" />
                <div>
                    <h4>{props.title}</h4>
                    <p>{ props.tok}</p>
                </div>
            </div>
            <div className={styles.cardbtn}>
               <CopyAddress title = 'Copy Address' icon = {faCopy}/>
               <CopyAddress title = 'QR Code' icon = {faQrcode}/>
            </div>
        </div>
    )
}