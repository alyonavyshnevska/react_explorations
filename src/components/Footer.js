import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            {/* use link instead of a so that page does not reload: quicker */}
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer