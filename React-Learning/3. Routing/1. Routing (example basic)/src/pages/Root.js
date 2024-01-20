import { Outlet } from 'react-router-dom'
import MainNavigation from './component/MainNavigation'
import classes from './Root.module.css'

export default function RootLayout(){

    return (
        <>
            <MainNavigation/>
            <main className={classes.content}>

            </main>
            <Outlet></Outlet>
        </>
    )
}