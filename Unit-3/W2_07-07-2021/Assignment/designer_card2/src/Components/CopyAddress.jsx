import styles from './CopyAddress.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CopyAddress(props) {
    
    return <>
        <span className={styles.copyAddress}>{props.title} <FontAwesomeIcon icon={props.icon} /></span>
    </>
}