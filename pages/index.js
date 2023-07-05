import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import MainPage from '../pages/Home/index.jsx';
import S2 from '../src/sections/S2_About/index.jsx';
import S3 from '../src/sections/S3_Roadmap/index.jsx';
import S4 from '../src/sections/S4_Tokenomics/index.jsx';
import Footer from '../src/components/footer/index.jsx';

export default function Home() {
  return (
    <div style={{backgroundColor:'black'}}>
      <MainPage />
      <S2 />
      <S3 />
      <S4 />
      <Footer />
    </div>
  )
}
