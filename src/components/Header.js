import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title: fancytitle, onAdd, showAdd }) => { 

    return (
        // use className instead of class in JSX
        <header className='header'>
            <h1>{fancytitle}</h1>
            <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add' }
            onClick={onAdd}

            />
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