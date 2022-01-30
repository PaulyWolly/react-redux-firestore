import React from 'react'
import moment from 'moment'

const Notifications = (props) => {

  const { notifications } = props;

  return (
    <div className="section">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{
              return (
                <li className='spacing-for-items' key={item.id}>
                  <span className="pink-text">{item.user} </span>
                  <span>{item.content}</span>
                  <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
                <hr/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
