import React from 'react'
import styles from './Search.module.css'

import searchIcon from '../../assets/search.png'



export const Search = () => {
  return (
         <div className={styles['search-icon']}>
                     <img src={searchIcon} alt='search icon' className={styles['search-icon']} />
                </div>

  )
}
