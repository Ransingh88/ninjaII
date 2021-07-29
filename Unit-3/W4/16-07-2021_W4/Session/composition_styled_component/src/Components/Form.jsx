import styles from './style.module.css'

export function From(props) {
    return (
        
        <form>
            {props.children}
        </form>
    );
}