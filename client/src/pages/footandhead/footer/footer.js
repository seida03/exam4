import React from 'react'
import styles from '../footer/footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.input}>
                <input placeholder="Your Email" />
                <button>Send</button>
            </div>
            <div className={styles.yazi}>
                <h2>About</h2>
                <p>About Us</p>
                <p>Our Partners</p>
                <p>Our Services</p>
            </div>
            <div className={styles.yazi}>
                <h2>About</h2>
                <p>About Us</p>
                <p>Our Partners</p>
                <p>Our Services</p>
            </div>
            <div className={styles.yazi}>
                <h2>Follow Us</h2>
            </div>
        </div>
    )
}

export default Footer
