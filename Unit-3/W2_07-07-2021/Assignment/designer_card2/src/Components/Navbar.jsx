import styles from './Styles.module.css'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
    return (
        <div className ={styles.navbar}>
            <div className={styles.logoside}>
                <img src={logo} alt="logo" />
                <h2>TipWallets</h2>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Setting</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className={styles.signout}>Sign Out <FontAwesomeIcon icon={ faArrowRight}/></li>
                </ul>
            </div>
        </div>
    )
}