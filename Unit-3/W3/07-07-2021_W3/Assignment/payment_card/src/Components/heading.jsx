import styles from './Heading.module.css'

export function Heading({ head }) {
    return <h1 className={styles.head}>{ head }</h1>
}