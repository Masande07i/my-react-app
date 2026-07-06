import React from 'react'
import styles from './Search.module.css'
import { ContentContainer } from '../ContentContainer'
import { Searchbar } from './Searchbar'



export const Search = () => {
  return (
    <div className={styles['search-container']}>
        <ContentContainer className={styles['searchbar-container']}>
            <Searchbar/>
        </ContentContainer>
</div>
  )
}
