import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>A simple React web app</p>
            {/* use link instead of a so that page does not reload: quicker */}
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer