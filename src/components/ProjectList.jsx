import { Link } from 'react-router-dom'
import { projects } from './data/projects'
export const ProjecList = ({ limit }) => {
  return (

    <section className='projects'>

    {
      projects.slice(limit, projects.lengthj).map((project) => {
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

  )
}
