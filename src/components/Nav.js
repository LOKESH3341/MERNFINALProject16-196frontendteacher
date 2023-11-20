import {Link} from "react-router-dom";

const cusstyling1 = {
    fontSize: '30px',
    color: 'darkblue',
    fontWeight: '500'
}

const cusstyling2 = {
    fontSize: '20px',
    color: 'darkblue',
    fontWeight: '500'
}




function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link style={cusstyling1} class="navbar-brand mx-3" to="/">Teacher Operations Portal</Link>
            <div class="nav">
                <Link style={cusstyling2} class="nav-link" to="/">Home Page</Link>
                <Link style={cusstyling2} class="nav-link" to="/create-work">Create Work</Link>
                <Link style={cusstyling2} class="nav-link" to="/work-list">Work List</Link>
                <Link style={cusstyling2} class="nav-link" to="/student-view">Student View</Link>
            </div>
        </nav>
    )
}
export default Nav;