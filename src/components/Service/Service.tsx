import React from 'react'
import styles from './Service.module.css'
import Text from '../Text/Text.tsx'

export const Service = () => {
  return (
    <section className= {styles.service}>
    <div  className={styles.left}>
        <Text variant="h4" style={{ color: "#12F7D6", letterSpacing: "2px" }}>
          OUR SERVICES
        </Text>
          <Text variant="h1" style={{color: "white"}}>
          WHAT WE {" "}
          <span className={styles.highlight}>DO</span>
         ?
        </Text>

        <div className ={styles.line}></div>

         <Text variant='p' style={{color: "white"}}>  
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book.

                  <br/>
                  <br/>

                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Text>
    </div>
    </section>
  )
}
