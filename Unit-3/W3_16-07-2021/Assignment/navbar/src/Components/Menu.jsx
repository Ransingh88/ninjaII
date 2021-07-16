import styles from './Styles.module.css'

export function Menu(props) {
    return (
        <p className={styles.menu}>{props.title}</p>
    )
}