import '@fortawesome/fontawesome-free/css/all.css';
import Image from 'next/image';
import classes from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <input type="checkbox" id={classes.check}></input>
      <label className={classes.label} htmlFor={classes.check}>
        <i className='fas fa-bars' id={classes.btn}></i>
        <i className='fas fa-times' id={classes.cancel}></i>
      </label>
      <Image className={classes.image} src="/placeholder-image.jpg" alt="Image" width={100} height={50} />
      <ul className={classes.unordered}>
        <li className={classes.liststyle}><Link className={classes.linkstyle} href="/">Home</Link></li>
        <li className={classes.liststyle}><Link className={classes.linkstyle} href="/about">About</Link></li>
        <li className={classes.liststyle}><Link className={classes.linkstyle} href="/services">Services</Link></li>
        <li className={classes.liststyle}><Link className={classes.linkstyle} href="/contact">Contact</Link></li>
        <li className={classes.liststyle}><Link className={classes.linkstyle} href="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}