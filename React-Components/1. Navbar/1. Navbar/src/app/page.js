import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar/Navbar'

/*
This example was configured to run on Next.js.
If you want it to run on React you need to 
rewrite some parts of the Navbar component.
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
    </main>
  )
}
