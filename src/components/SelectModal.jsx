import React from 'react'
import {Link} from 'react-router-dom'
import * as api from '../api'

import './Modals.css'

class SelectModal extends React.Component{
  state = {
    topics: []
  }

  async componentDidMount() {
    const newTopics = await api.fetchAllTopics()
    this.setState({
      topics: newTopics
    })
  }

  render() {
    const topics = this.state.topics
    return (
      <div className='modal'>
        <div className='modalContent'>
          {topics.map(topic => {
            return <Link to={`/${topic.slug}/articles`}>{topic.title}<br/></Link>
          })}
          <button onClick={() => this.props.closeModal('isTopicPressed')}>Close</button>
        </div>
      </div>
    )
  }
}

export default SelectModal