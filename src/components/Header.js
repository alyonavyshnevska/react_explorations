import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title: fancytitle }) => { 

    const onClick = () => {
        console.log('Click')
    }

    return (
        // use className instead of class in JSX
        <header className='header'>
            <h1>{fancytitle}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    ) 
}

// have a default value for everything that is not required
Header.defaultProps = {
    title: 'Task Tracker'
}

// or say that something is required -- then don't have a default
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black' 
// }

export default Header