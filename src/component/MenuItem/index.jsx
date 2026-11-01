import React from 'react';
import styles from "./menuItem.module.scss"

const MenuItem =({title,subtitle,image,price}) => {
    return(
        
        <div className={styles.wrapper}  >
            <div>
                <img src={image} alt={title} />
                <p>Name: {title}</p>
                <p>Category:{subtitle}</p>
                <p>Price: {price}$</p>
                
            </div>
        </div>
        
    )
}

export default MenuItem