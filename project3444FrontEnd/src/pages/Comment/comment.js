import React from 'react'
import './comment.css';
import {images} from '../../constants';
import {Navbar} from "../../component"

class Comment extends React.Component {
  render(){
    return (
      <div className='app__comment'>
          <Navbar />
          <div className='app__comment-header'>
              <h1>Comment</h1>
              <p>Let us know about our experience</p>
          </div>
          <div className='app__comment-field'>
              <div className='app__comment-field_input'>
                  <textarea placeholder='Give us your comment on the rerstaurant'/>
                  <button type='submit'>Post Comment</button>
              </div>
  
              <div className='comment-dash'></div>
              
              <div className='app__comment-field_'>
  
              </div>
          </div>
      </div>
    )
  }
}

export default Comment