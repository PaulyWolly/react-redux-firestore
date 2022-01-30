import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {

  return (
    <div className='list-outer-container'>
      <div style={{cursor: 'pointer'}}  className="project-list section">
        { projects && projects.map(project => {
          return (
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          )
        })}
      </div>
      <br/>
      <small>Click a tile to see details</small>
    </div>
  )
}

export default ProjectList
