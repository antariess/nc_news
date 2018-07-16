import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import * as api from '../../api'

import 'bulma/css/bulma.css'
// import './Modals.css'

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
      <div className='modal' id='select'>
        <div className='modal-background'></div>
        <div className='modal-content is-pulled-right'>
          {topics.map(topic => {
            return <button className='is-pulled-right modalItem button is-medium is-danger is-inverted link' key={topic.slug}>
              <Link className='has-text-danger' to={`/${topic.slug}/articles`} onClick={() => this.props.closeModal('isTopicPressed')}>{topic.title}<br/></Link>
              </button>
          })}
          <button className='is-pulled-right modalItem button is-medium is-outlined' onClick={() => this.props.closeModal('isTopicPressed')}>Close</button>
        </div>
      </div>
    )
  }
}

export default SelectModal