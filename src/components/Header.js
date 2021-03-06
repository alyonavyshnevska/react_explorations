import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title: fancytitle, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        // use className instead of class in JSX
        <header className='header'>
            <h1>{fancytitle}</h1>
            {location.pathname === '/' && <Button
                color={showAdd ? '#A52A2A' : '#DEB887'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />}
        </header>
    )
}

// have a default value for everything that is not required
Header.defaultProps = {
    title: 'Task Manager'
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