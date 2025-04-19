
import Link from 'next/link';
import styles from './button.module.scss';


function CustomLink({className, label, href}) {
    return (
        <Link 
            href={href}
            className={`${styles.btn} ${className || ''}`}
        >
            {label}
        </Link>
    );
}

function CustomButton({className, label, onClick}) {
    return (
        <button 
            type='button'
            className={`${styles.btn} ${className || ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export { CustomLink, CustomButton };