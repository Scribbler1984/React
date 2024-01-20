import './App.css';

/*

props.children
----------------------------------------------------------------------------------------------------------------------------------------

In the provided code, there is a React functional component named App. Within this component, an instance of 
another component called GreetComponent is used. The GreetComponent is a custom component that takes a prop 
named name with the value "Egon". Inside the GreetComponent, there is an <h1> element that displays a greeting 
message using the name prop, and there is also a placeholder for props.children.

The props.children is a special prop in React that allows components to include arbitrary content between 
their opening and closing tags. In this case, the content between the opening and closing tags of 
GreetComponent is a <p> element with the text "You are a developer!".

Therefore, in the context of this code, props.children refers to the content passed between the opening and 
closing tags of the GreetComponent component when it is used in the App component. In this specific example, 
props.children represents the <p> element with the text "You are a developer!".

----------------------------------------------------------------------------------------------------------------------------------------

*/

export default function App() {

  return (
    <GreetComponent name = "Egon">
      <p>You are a developer!</p>
    </GreetComponent>
  );
}


function GreetComponent(props){

  return(
    <div>
      <h1>Hallo {props.name}</h1>
      {props.children}
    </div>
  )
}
