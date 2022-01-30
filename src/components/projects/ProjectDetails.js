import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
  const { project, auth } = props;
  const timestamp = project && project.createdAt && project.createdAt.toDate();

  const handleDelete = (id) => {
    console.log('Asked to delete. Project ID: ', id)
  }

  if (!auth.uid) return <Redirect to='/signin' />
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card ">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(timestamp).calendar()}</div>
            <div style={{textAlign: 'right', cursor: 'pointer', color: 'red'}}  className="button-delete">
            <a type="button" className="btn-sm btn-danger" onClick={() => handleDelete(props.match.params.id)}>Delete</a>
            </div>


          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)

// export default matchDispatchToProps = (dispatch) => {
//   return {
//       dispatchDeleteProject: (e, id) => {
//           e.preventDefault()
//           dispatch(deleteProject(id))
//       })
//   }
// }