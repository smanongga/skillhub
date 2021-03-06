import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchMessages} from '../actions/messages'
import {mapSenderId} from '../actions'

const months = ['null', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class Inbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedMessageId: 0,
      senderId: 0
    }
  }

  componentWillMount () {
    this.props.fetchMessages()
    .then(() => {
      if (this.props.messages.length > 0) {
        this.setState({
          selectMessageId: this.props.messages[0].id
        })
      }
    })
  }

  openMessage (id) {
    const messages = this.props.messages
    const index = messages.findIndex(x => x.id === id)
    const senderId = messages[index].senderId
    this.props.mapSenderId(senderId)
    this.setState({
      selectedMessageId: id,
      messages
    })
  }

  render () {
    const currentMessage = this.props.messages.find(x => x.id === this.state.selectedMessageId)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'>
            <Sidebar
              messages={this.props.messages} />
          </div>
          <div className='inbox-container'>
            <div className='col-md-4'>
              <MessageList
                messages={this.props.messages}
                onMessageSelected={(id) => { this.openMessage(id) }}
                selectedMessageId={this.state.selectedMessageId} />
            </div>
            <div className='col-md-6'>
              <MessageDetails
                message={currentMessage}
                onDelete={(id) => { this.deleteMessage(id) }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/* Sidebar */
const Sidebar = ({messages}) => {
  return (
    <div id='sidebar'>
      <div className='sidebar__compose'>
        <p className='btn compose'>
          My Inbox
        </p>
      </div>
      <ul className='sidebar__inboxes'>
        <li>
          <Link to='/sent'><span className='fa fa-inbox'></span>
            Sent
          </Link>
        </li>
      </ul>
    </div>
  )
}

/* Email classes */
const MessageListItem = ({ message, onMessageClicked, selected }) => {
  let classes = 'message-item'
  if (selected) {
    classes += ' selected'
  }

  return (
    <div onClick={() => { onMessageClicked(message.id) }} className={classes}>
      <div className='message-item__subject truncate'>{message.subject}</div>
      <div className='message-item__details'>
        <span className='message-item__from truncate'>{message.firstName} {message.lastName}</span>
        <span className='message-item__time truncate'>{getPrettyDate(message.time)}</span>
      </div>
    </div>
  )
}

const MessageDetails = ({ message }) => {
  if (!message) {
    return (
      <div className='message-content empty'></div>
    )
  }

  const date = `${getPrettyDate(message.time)} · ${getPrettyTime(message.time)}`

  return (
    <div className='message-content'>
      <div className='message-content__header'>
        <h3 className='message-content__subject'>{message.subject}</h3>
        <Link to='/contact'><div className='message-content__time'>Reply</div></Link>
        <div className='message-content__time'>{date}</div>
        <div className='message-content__from'><Link to={`/profiles/${message.senderId}`} >{message.firstName} {message.lastName}</Link></div>
      </div>
      <div className='message-content__message'>{message.message}</div>
    </div>
  )
}

/* EmailList contains a list of Email components */
const MessageList = ({ messages, onMessageSelected, selectedMessageId }) => {
  if (messages.length === 0) {
    return (
      <div className='message-list empty'>
        <p>Welcome to skillHub!</p>
        <p>You have nothing currently in your inbox.</p>
        <p>Browse to user profiles to start connecting!</p>
      </div>
    )
  }

  return (
    <div className='message-list'>
      {
        messages.map(message => {
          return (
            <MessageListItem
              key={message.id}
              onMessageClicked={(id) => { onMessageSelected(id) }}
              message={message}
              selected={selectedMessageId === message.id} />
          )
        })
      }
    </div>
  )
}

// Helper methods
const getPrettyDate = (date) => {
  date = date.split(' ')[0]
  const newDate = date.split('-')
  const monthFix = Number(newDate[1])
  const month = months[monthFix]
  return `${month} ${newDate[2]}, ${newDate[0]}`
}

// Remove the seconds from the time
const getPrettyTime = (date) => {
  const time = date.split(' ')[1].split(':')
  return `${time[0]}:${time[1]}`
}

function mapStateToProps (state) {
  return {
    messages: state.messages
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchMessages: () => dispatch(fetchMessages()),
    readMessage: (id) => dispatch(readMessage(id)),
    mapSenderId: (id) => dispatch(mapSenderId(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)
