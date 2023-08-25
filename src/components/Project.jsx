import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from './data/projects'

export const Project = () => {
  const params = useParams()
  const [project, setProject] = useState({})

  useEffect(() => {
    const project = projects.filter(project => project.id === params.id)
    setProject(project[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <div className="page project-page">
        <h1 className="heading">{project.name}</h1>
        <div className='mask'>
            <img src={project.img}/>
        </div>

        <h2>{project.description}</h2>
        <h3>Tecnologies used: </h3>
        <p>{project.tecnologies}</p>
        <a href={project.url} target='_blanl'>Go to GitHub repository</a>

      </div>
  )
}
