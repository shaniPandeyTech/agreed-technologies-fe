import styles from './newsletter.module.scss';


function SubscribeNewsLetter() {
    return (
        <div className={styles.suscrbNewsletr}>
            <h3>Subscribe our newsletter</h3>
            <form>
                <div className={styles.inputWrap}>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </div>
            </form>
        </div>
    );
}

export default SubscribeNewsLetter;