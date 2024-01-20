import MainNavigation from "./component/MainNavigation";

export default function ErrorPage(){

    return(
        <>
        <MainNavigation/>
        <main>
            <h1>An error occured!</h1>
            <p>Could not find this page!</p>
        </main>
        </>
    )
}