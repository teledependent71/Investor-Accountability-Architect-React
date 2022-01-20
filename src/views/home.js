import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Investor Accountability Architect</title>
        <meta property="og:title" content="Investor Accountability Architect" />
      </Helmet>
    </div>
  )
}

export default Home
