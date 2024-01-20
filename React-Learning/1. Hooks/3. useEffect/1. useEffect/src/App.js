import { useState, useEffect } from 'react';

/*

The useEffect()-Hook
----------------------------------------------------------------------------------------------------------------------------------------

The presented code example is a simple React component example that utilizes the useEffect hook. The useEffect hook is a 
fundamental part of the React library and is used to manage side effects in functional components.

Side effects are actions or behaviors in a component that do not relate to the presentation of the user interface. This includes 
activities such as fetching data, manipulating the DOM, or setting up subscriptions.

The useEffect hook allows the execution of these side effects in a declarative and controlled manner. It is used to handle 
various scenarios, such as fetching data, setting up subscriptions, updating the DOM, or cleaning up when a component unmounts.

In the presented React component named App, the useEffect hook is employed to trigger a simple console output ("Rendered") when the value of the resourceType variable changes. 
The resourceType variable is managed through state (useState) and is updated through clicks on the three buttons ("post", "users", "comments"). 
The current value of resourceType is then displayed in an <h1> element in the user interface.

In summary, with each change in the resourceType value, the useEffect block is executed, and "Rendered" is output to the console. 
This demonstrates the use of the useEffect hook to respond to side effects in React components.

----------------------------------------------------------------------------------------------------------------------------------------

*/

function App() {
  const [resourceType, setResourceType] = useState("defaults");

  useEffect(() => {
    console.log("Rendered");
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => { setResourceType("post") }}>post</button>
      <button onClick={() => { setResourceType("users") }}>users</button>
      <button onClick={() => { setResourceType("comments") }}>comments</button>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
