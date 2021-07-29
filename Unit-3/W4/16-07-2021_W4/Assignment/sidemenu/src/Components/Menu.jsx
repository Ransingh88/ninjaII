import styles from './styles.module.css'

export function Menu(props) {

    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}