import styles from './Styles.module.css'
import logo from '../logo.png'
import { FaFacebookSquare, FaTwitter, FaTwitterSquare, FaYoutube, FaYoutubeSquare } from 'react-icons/fa';


export function Profile() {
    return (
        <div className={styles.profileMain}>
            <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" alt="Profile pic" />
            <div className={styles.logos}>
                <FaFacebookSquare/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
            <div className={styles.name}>
            <h1>Sudo_Overflow</h1>
            <p>Hey this is my TipWallet profile, thank you for supporting my work</p>
            </div>
            
        </div>
    )
}