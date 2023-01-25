import React from 'react'
import styles from "../localflorist/localflorist.module.scss"
function Localflorist() {
  return (
    <div className={styles.localflorist}>
      <div className={styles.yazi}>
        <h2>Local Florist Just For You</h2>
        <p>Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no. Te tibique intellegam mediocritatem his, est quis.</p>
        <span>Mary Byrd, owner</span>
        <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png'/>
      </div>
      <div className={styles.pic}>
        <img className={styles.bir} src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl1.jpg'/>
        <img className={styles.iki} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl2.jpg"/>
      </div>
    </div>
  )
}

export default Localflorist
