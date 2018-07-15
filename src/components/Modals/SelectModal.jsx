import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import * as api from '../../api'

import './Modals.css'

class SelectModal extends React.Component{
  state = {
    topics: [],
    invalidUrl: false
  }

  componentDidMount() {
    api.fetchAllTopics()
      .then(res => {
        const newTopics = res.data.topics
        this.setState({
          topics: newTopics
        })
      })
      .catch(err => {
        this.setState({
          invalidUrl: true
        })
      })
    
  }

  render() {
    const topics = this.state.topics
    return this.state.invalidUrl 
    ? <Redirect to='/404'/>
    : (
      <div className='modal'>
        <div className='modalContent'>
          {topics.map(topic => {
            return <Link key={topic.slug} to={`/${topic.slug}/articles`} onClick={() => this.props.closeModal('isTopicPressed')}>{topic.title}<br/></Link>
          })}
          <button onClick={() => this.props.closeModal('isTopicPressed')}>Close</button>
        </div>
      </div>
    )
  }
}

export default SelectModal