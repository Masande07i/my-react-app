import React from 'react'
import styles from './Footer.module.css'
import {ContentContainer} from '../ContentContainer'
import Text from '../Text/Text.tsx'
import projectIcon from '../../assets/graphic-design.png'

export const Footer = () => {
  return (

    <div>

     
    <footer>
      <div className={styles.footerItem}>
  <img
    src={projectIcon}
    alt="Project"
    className={styles.footerIcon}
  />
        <div className={styles['variant']}>
        <Text variant = 'h3'> PROJECT</Text>
        <Text variant="h1">300+</Text>
        <Text variant = 'h3'> PLEASURE</Text>
        <Text variant = 'h3'> CUSTOMER</Text>
        <Text variant = 'h3'> TEAM MEMBERS</Text>
        </div>
        <ContentContainer  className = {styles['footer-cont']}>
            DESIGN BY  HYKROX
        </ContentContainer>
       </div> 
    </footer>
    </div>
  )
}
