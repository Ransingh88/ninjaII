import styles from './Card.module.css'
import {Pro} from './Pro'
import {MsgBtn} from './MsgBtn'
import {MsgBtn2} from './MsgBtn2'
export function Card(props) {

    console.log(props)
    return <div className={styles.main}>
        <div className={styles.card}>
            <Pro />
            <div className={styles.top}>
                
                <img src="https://secure.gravatar.com/avatar/2055d75f5788c815df2fa361093e9ac8?s=400&d=mm&r=g" alt="" />
                <div className={styles.info}>
                    <h2>{ props.info.name}</h2>
                <h5>{ props.info.location}</h5>
                <p>{ props.info.desc}</p>
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
                        { props.info.skills.map((ele) => (
                            <li>{ele}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    </div>
}