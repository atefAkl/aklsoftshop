import React from 'react'
import styles from "./Button.module.css";

// reusable Button component
function Button({children,type,onClick}) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`} >{children}</button>
  )
}

export default Button
