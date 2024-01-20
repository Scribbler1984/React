import React, { useState, createContext, useContext } from 'react';


/*

The useContext()-Hook
----------------------------------------------------------------------------------------------------------------------------------------

useContext is a hook provided by React, a popular JavaScript library for building user interfaces. It is used for accessing 
the value of a React context within a functional component. Context is a mechanism in React that allows you to share data or 
state between components without having to pass props explicitly at every level of your component tree.

----------------------------------------------------------------------------------------------------------------------------------------
 
*/


const AppContext = createContext(null);

export default function Parent() {
    const [userName, setUserName] = useState("Egon Binder");

    return (
        <AppContext.Provider value={{userName, setUserName}}>
            <Child></Child>
            <h1>{userName}</h1>
        </AppContext.Provider>
    )
}


export function Child() {

    return (
        <>
            <GrandChild></GrandChild>
        </>
    )
}


export function GrandChild() {
    const {setUserName} = useContext(AppContext);

    return (
        <>
            <button onClick={() => setUserName("Hans Müller")}>Click</button>
        </>
    )
}