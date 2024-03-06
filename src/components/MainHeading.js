import React from 'react'
import styles from "./MainHeading.module.css";
function MainHeading({children}) {
  return (
    <h2 className={styles.mainHeading}>{children}</h2>
  )
}

export default MainHeading
