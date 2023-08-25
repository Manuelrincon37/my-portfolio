import { Link } from 'react-router-dom'
import { ProjecList } from './ProjectList'
export const Index = () => {
  return (
    <div className='home'>

      <h1>Self-Taught <strong>Software Developer </strong> and Technology Enthusiast, Crafting Innovative Solutions </h1>

      <h2 className='title'>Alwais learning new ways to solve problems.
        <Link to='/contact'> Contact me!</Link>
      </h2>

      <section className="last-projects">
        <h2 className='heading'>Some of my projects</h2>
        <p>These are some of my personal and learning projects</p>

        <div className="projects">
          <ProjecList limit='3'/>

        </div>
      </section>

    </div>
  )
}
