import styles from './Styles.module.css'

export function Navbar({children}) {
    
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}