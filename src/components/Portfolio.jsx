import { Link } from 'react-router-dom'
import { projects } from './data/projects'
export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Protfolio</h1>

    <section className='projects'>

    {
      projects.map((project) => {
        return (
        <article key={project.id} className='project-item'>

          <div className='mask'>

            <img src={project.img}/>

          </div>

          <h2><Link to={`/projects/${project.id}`}>{project.name}</Link></h2>
          <span>{project.category}</span>
          <p>{project.tecnologies}</p>
        </article>)
      })
    }

    </section>

    </div>
  )
}
