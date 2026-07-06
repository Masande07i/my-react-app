import React from 'react'
import Text from '../Text/Text.tsx'
import styles from './Navbar.module.css'
import searchIcon from '../../assets/search.png'


export const Navbar = () => {
  return (
     <nav>
        <div className = {styles.content}> 
            <div className={styles.logo} >
            <Text variant= "h2" style={{color: "rgb(14, 248, 209)"}} > HYKROX </Text>
             <Text variant={"h3"} style={{color: "white"}}> unique designs </Text>
             </div>
            <div className={styles.links}>
                <a href= '/#' className={styles.link}>HOME</a>
                <a href= '/#' className={styles.link}>DESIGNS</a>
                <a href= '/#' className={styles.link}>SERVICES</a>
                <a href= '/#' className={styles.link}>ABOUT US</a>
                <a href= '/#' className={styles.link}>CONTACT US</a>
                <div className={styles['search-icon']}>
                     <img src={searchIcon} alt='search icon' className={styles['search-icon']} />
                </div>
                
                {/* <div className={styles['profile-icon']}> 
                    <Text variant ={'span'} > U </Text>
                </div> */}
            </div>
        </div>

    </nav>
    
  )
}
