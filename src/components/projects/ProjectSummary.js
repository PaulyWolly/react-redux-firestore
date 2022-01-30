import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  const timestamp = project && project.createdAt && project.createdAt.toDate();
  return (
    <div className="card  project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(timestamp).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
