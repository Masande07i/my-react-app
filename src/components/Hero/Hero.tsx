import React from 'react'
import Text from '../Text/Text.tsx'
import styles from './Hero.module.css'
import HeroImage from '../../assets/picture1.jpeg'

export const Hero = () => {
  return (
    <section className={styles.hero}>
    <div className={styles.left}>
        <Text variant="h4" style={{ color: "#12F7D6", letterSpacing: "2px" }}>
          CREATIVE DESIGNER
        </Text>

        <Text variant="h1" style={{color: "white"}}>
          WE ARE{" "}
          <span className={styles.highlight}>CREATIVE</span>
          <br/>
          <br/>
          DESIGNERS
        </Text>


    <div className ={styles.line}></div>
  {/* className={styles.description}> */}


        <Text variant='p' style={{color: "white"}}>  
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book.
        </Text>
        </div>

        <div  className={styles.right}>

             <img src={HeroImage} alt= 'Creative Designer' className={styles.image} />

        
        </div>

        </section>
  )
}
