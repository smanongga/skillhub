import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchSentMessages, readMessage} from '../actions/messages'

const months = ['null', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class Sent extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			selectedMessageId: 0,
		}
	}

	componentWillMount() {
		const userId = Number(this.props.match.params.id)
		this.props.fetchSentMessages(userId)
	}
	
	openMessage(id) {
		const messages = this.props.messages
		const index = messages.findIndex(x => x.id === id)
		messages[index].read = 'true'
		const readId = {id}
    this.props.readMessage(readId)
		this.setState({
			selectedMessageId: id,
			messages
		})
	}
	
	// deleteMessage(id) {
	// 	// Mark the message as 'deleted'
	// 	const messages = this.state.messages
	// 	const index = messages.findIndex(x => x.id === id)
	// 	messages[index].tag = 'deleted'
		
	// 	// Select the next message in the list
	// 	let selectedMessageId = ''
	// 	for (const message of messages) {
	// 		if (message.tag === this.state.currentSection) {
	// 			selectedMessageId = message.id
	// 			break
	// 		}
	// 	}
		
	// 	this.setState({
	// 		messages,
	// 		selectedMessageId
	// 	})
	// }

	render() {
		const currentMessage = this.props.messages.find(x => x.id === this.state.selectedMessageId)
		return (
			<div className='container'>
        <div className='row'>
          <div className='col-md-2'>
				    <Sidebar messages={this.props.messages} />
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
const Sidebar = () => {
	// var unreadCount = unreadCount
  // <span className="item-count">{unreadCount}</span>

	return (
		<div id="sidebar">
			<div className="sidebar__compose">
				<p className="btn compose">My Sent Items <span className="fa fa-pencil"></span></p>
			</div>
			<ul className="sidebar__inboxes">
				<li><Link to ='/messages'><span className="fa fa-inbox"></span> Inbox</Link></li>
				<li><a><span className="fa fa-trash-o"></span> Trash</a></li>
			</ul>
		</div>
	)
}

const MessageListItem = ({ message, onMessageClicked, selected }) => {
  let classes = 'message-item'
  if (selected) {
    classes += ' selected'
  }
  return (
    <div onClick={() => { onMessageClicked(message.id) }} className={classes}>
      <div className='message-item__unread-dot' data-read={message.read}></div>
      <div className='message-item__subject truncate'>{message.subject}</div>
      <div className='message-item__details'>
        <span className='message-item__from truncate'>{message.firstName} {message.lastName}</span>
        <span className='message-item__time truncate'>{getPrettyDate(message.time)}</span>
      </div>
    </div>
  )
}

const MessageDetails = ({ message, onDelete }) => {
  if (!message) {
    return (
      <div className='message-content empty'></div>
    )
  }

  const date = `${getPrettyDate(message.time)} · ${getPrettyTime(message.time)}`

  const getDeleteButton = () => {
    if (message.tag !== 'deleted') {
      return <span onClick={() => { onDelete(message.id) }} className='delete-btn fa fa-trash-o'></span>
    }
    return undefined
  }

  return (
    <div className='message-content'>
      <div className='message-content__header'>
        <h3 className='message-content__subject'>{message.subject}</h3>
        {getDeleteButton()}
        <div className='message-content__time'>{date}</div>
        <div className='message-content__from'>{message.firstName} {message.lastName}</div>
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
        Nothing to see here, great job!
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
// Render
// $.ajax({url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/311743/dummy-emails.json',
// type: 'GET',
// success: function(result) {
//   React.render(<App emails={result} />, document.getElementById('inbox'))
//  }
// })

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
		messages: state.messages.messages
	}
}

function mapDispatchToProps (dispatch) {
	return {
		fetchSentMessages: (userId) => dispatch(fetchSentMessages(userId)),
    mapSenderId: (id) => dispatch(mapSenderId(id)),
		readMessage: (id) => dispatch(readMessage(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sent)
