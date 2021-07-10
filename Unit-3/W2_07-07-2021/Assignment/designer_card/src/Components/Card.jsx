import styles from './Card.module.css'
import {Pro} from './Pro'
import {MsgBtn} from './MsgBtn'
import {MsgBtn2} from './MsgBtn2'
let arr = ['UI/UX','HTML','CSS','FULL STACK WEB DEVELOPMENT','JAVASCRIPT','PYTHON','JAVA','POSTMAN','REACT']

export function Card() {
    return <div className={styles.main}>
        <div className={styles.card}>
            <Pro />
            <div className={styles.top}>
                
                <img src="https://secure.gravatar.com/avatar/2055d75f5788c815df2fa361093e9ac8?s=400&d=mm&r=g" alt="" />
                <div className={styles.info}>
                <h2>Ricky Park</h2>
                <h5>NEWYORK</h5>
                <p>User Interface and front-end Developer</p>
                </div>
                <div className={styles.bottons}>
                    <MsgBtn />
                    <MsgBtn2/>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>SKILLS</p>
                <div className={styles.skills}>
                    <ul>
                        {arr.map((ele) => (
                            <li>{ele}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    </div>
}