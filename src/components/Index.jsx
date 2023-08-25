import { Link } from 'react-router-dom'
export const Index = () => {
  return (
    <div className='home'>

      <h1>Self-taught <strong>Software Developer </strong>, enthusiastic about expanding my knowledge and skills evrey day.</h1>

      <h2>Alwais learning new ways to solve problems.
        <Link to='/contact'> Contact me!</Link>
      </h2>

      <section className="last-projects">
        <h2 className='heading'>Some of my projects</h2>
        <p>These are some of my personal and learning projects</p>

        <div className="projects"></div>
      </section>

    </div>
  )
}
