import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchMessages, readMessage} from '../actions/messages'
import {mapSenderId} from '../actions'
import {mapUnreadInbox} from '../actions'

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class Inbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedMessageId: 0,
      senderId: 0,
      unreadCount: 0
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

	openMessage(id) {
		const messages = this.props.messages
		const index = messages.findIndex(x => x.id === id)
		messages[index].read = 'true'
		const senderId = messages[index].senderId
		const readId = {id}
		this.props.readMessage(readId)
		this.props.mapSenderId(senderId)
		this.setState({
			selectedMessageId: id,
			messages
		})
	}

  render() {
  const currentMessage = this.props.messages.find(x => x.id === this.state.selectedMessageId)
    return (
      <div>
        <Sidebar
        messages={this.props.messages} />
        <div className="inbox-container">
          <MessageList
          messages={this.props.messages}
          onMessageSelected={(id) => { this.openMessage(id) }}
          selectedMessageId={this.state.selectedMessageId} />
          <MessageDetails
          message={currentMessage}
          onDelete={(id) => { this.deleteMessage(id) }} />
        </div>
      </div>
    )
  }
}

/* Sidebar */
const Sidebar = ({ messages}) => {
  var unreadCount = messages.reduce(
    function(previous, msg) {
      if (msg.read !== "true" ) {
        return previous + 1
      }
      else {
        return previous
      }
    }.bind(this), 0)


  return (
    <div id="sidebar">
      <div className="sidebar__compose">
        <p className="btn compose">
          My Inbox
        </p>
      </div>
      <ul className="sidebar__inboxes">
        {/*<span className="item-count">{unreadCount}</span></a></li>*/}
        <li>
          <Link to ='/sent'><span className="fa fa-inbox"></span>
            Sent
          </Link>
        </li>

        <li>
          <a>
            <span className="fa fa-trash-o"></span> Trash
          </a>
        </li>
      </ul>
    </div>
  )
}

/* Email classes */
const MessageListItem = ({ message, onMessageClicked, selected }) => {
  let classes = "message-item"
  if (selected) {
    classes += " selected"
  }

  return (
    <div onClick={() => { onMessageClicked(message.id) }} className={classes}>
      <div className="message-item__unread-dot" data-read={message.read}></div>
      <div className="message-item__subject truncate">{message.subject}</div>
      <div className="message-item__details">
        <span className="message-item__from truncate">{message.firstName} {message.lastName}</span>
        <span className="message-item__time truncate">{getPrettyDate(message.time)}</span>
      </div>
    </div>
  )
}

const MessageDetails = ({ message, onDelete }) => {
  if (!message) {
    return (
      <div className="message-content empty"></div>
    )
  }

  const date = `${getPrettyDate(message.time)} · ${getPrettyTime(message.time)}`

  const getDeleteButton = () => {
    if (message.tag !== 'deleted') {
      return <span onClick={() => { onDelete(message.id) }} className="delete-btn fa fa-trash-o"></span>
    }
    return undefined
  }

  return (
    <div className="message-content">
      <div className="message-content__header">
        <h3 className="message-content__subject">{message.subject}</h3>
        <Link to ="/contact"><div className="message-content__time">Reply</div></Link>
        {getDeleteButton()}
        <div className="message-content__time">{date}</div>
        <div className="message-content__from">{message.firstName} {message.lastName}</div>
      </div>
      <div className="message-content__message">{message.message}</div>
    </div>
  )
}

/* EmailList contains a list of Email components */
const MessageList = ({ messages, onMessageSelected, selectedMessageId }) => {
  if (messages.length === 0) {
    return (
      <div className="message-list empty">
        Nothing to see here, great job!
      </div>
    )
  }

  return (
    <div className="message-list">
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
// Render
//$.ajax({url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/311743/dummy-emails.json',
//	type: 'GET',
//	success: function(result) {
//		React.render(<App emails={result} />, document.getElementById('inbox'))
//	}
// })

// Helper methods
const getPrettyDate = (date) => {
  date = date.split(' ')[0]
  const newDate = date.split('-')
  const month = months[0]
  return `${month} ${newDate[2]}, ${newDate[0]}`
}

// Remove the seconds from the time
const getPrettyTime = (date) => {
  const time = date.split(' ')[1].split(':')
  return `${time[0]}:${time[1]}`
}

function mapStateToProps (state) {
  return {
    messages: state.messages.messages
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchMessages: (userId) => dispatch(fetchMessages(userId)),
    readMessage: (id) => dispatch(readMessage(id)),
    mapSenderId: (id) => dispatch(mapSenderId(id)),
    mapUnreadInbox: (unreadCount) => dispatch(mapUnreadInbox(unreadCount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)
