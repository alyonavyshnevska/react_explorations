import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
<h4>A simple Task Tracker built with functional components, routing, and a json server. </h4>
{/* use link instead of a so that page does not reload: quicker */}
<Link to='/'>Go Back to Tasks</Link>
        </div>
    )
}

export default About