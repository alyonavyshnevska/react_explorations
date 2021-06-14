- components can be classes or functions. most people use functions with hooks

## Destructuring

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


## Two curly brackets 

two curly braces: first one: it's javascript second one: it's an object 
<!-- <h1 style={{color: 'red', backgroundColor: 'grey' }}>{title}</h1>  -->


## Redux

Access the state from within components easily