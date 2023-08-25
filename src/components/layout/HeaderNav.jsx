import { NavLink } from 'react-router-dom'
export const HeaderNav = () => {
  return (
    <header>
      <div className='logo'>
        <span>M</span>
        <h3>Manuel Rincon <code>Software Developer</code> </h3>

      </div>
        <nav>
            <ul>
                <li>
                  <NavLink className= {({ isActive }) => isActive ? 'active' : ''} to='/index'>Home</NavLink>
                </li>
                <li>
                  <NavLink className= {({ isActive }) => isActive ? 'active' : ''} to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                  <NavLink className= {({ isActive }) => isActive ? 'active' : ''} to='/services'>Services</NavLink>
                </li>
                <li>
                  <NavLink className= {({ isActive }) => isActive ? 'active' : ''} to='/resume'>Resume</NavLink>
                </li>
                <li>
                  <NavLink className= {({ isActive }) => isActive ? 'active' : ''} to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
