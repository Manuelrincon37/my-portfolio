import { Link } from 'react-router-dom'
import { projects } from './data/projects'
export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>

    <section className='projects'>

    {
      projects.map((project) => {
        return (
        <article key={project.id} className='project-item'>

          <div className='mask'>

            <img src={project.img}/>

          </div>

          <span>{project.category}</span>
          <h2><Link to={`/projects/${project.id}`}>{project.name}</Link></h2>
          <p>{project.tecnologies}</p>
        </article>)
      })
    }

    </section>

    </div>
  )
}
