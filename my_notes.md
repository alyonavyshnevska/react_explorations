
## Render

- the render() method, the only required method in a class component, which is used to render DOM nodes.

## Create React App

An environment that comes pre-configured with everything you need to build a React app. It will create a live development server, use Webpack to automatically compile React, JSX, and ES6, auto-prefix CSS files, and use ESLint to test and warn about mistakes in the code.


## Components

- Functional: “function components” are literally JavaScript function. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
- a class can also be a component, but nowadays most people use functions with hooks
- Always start component names with a capital letter. React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires Welcome to be in scope.
- All React components must act like pure functions with respect to their props. (no passing 2 elements and then subtracting one another and returning result)


## Elements

- Elements are what components are “made of”.  plain objects.   
  `const element = <h1>Hello, world</h1>;`


## JSX

- JSX produces React “elements”.

- React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code

- You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

- you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions


## “root” DOM node

`<div id="root"></div>`  
somewhere in teh HTML file

- everything inside it will be managed by React DOM.

- Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

- To render a React element into a root DOM node, pass both to ReactDOM.render():

## Props

- When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

<!-- function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
); -->


## State

State is similar to props, but it is private and fully controlled by the component.

in a class: 

      class Clock extends React.Component {
        constructor(props) {
          super(props);
          // The only place where you can assign this.state is the constructor.
        // elsewhere setState
          this.state = {date: new Date()};
        }

- only set this.state once and later use this.setState = ...

- This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

- Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

- A component may choose to pass its state down as props to its child components: 

    <FormattedDate date={this.state.date} />

- but the child wouldn't know if it's a state or just something typed by hand


- We can use sateful components within stateless, and vice versa


## JS Syntax Refresher

### Destructuring

we can do this: (here we are importing title as fancytitle)
const Header = ({ title: fancytitle }) => { 
    return ...  }


or we can do this: (here we a re deconstructing the props object)

const Header = (props) => {
    const { title: fancytitle } = props
    return ... }

or

const Header = (props) => {
    const title = props.title
    return ... }


### Two curly brackets 

two curly braces: first one: it's javascript second one: it's an object 
<!-- <h1 style={{color: 'red', backgroundColor: 'grey' }}>{title}</h1>  -->


## Redux

Access the state from within components easily 
