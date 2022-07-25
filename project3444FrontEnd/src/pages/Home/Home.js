import React from 'react'
import './Home.css'
import {Navbar} from "../../component"
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render(){
        return (
          <div className='full-page'>
              <div className='Wrapper'>
                  <Navbar />
                  <div className='header-content'>
                        <div className='Logo'>
                            <h1>
                                LOGO
                            </h1>
                        </div>
                        <div className='Logo-p'>
                            <p>
                                An authentic Vietnamese culinary experience
                            </p>
                        </div>
                            <div className='button-space'>
                                <div className='left-button'>
                                    <button type='button' onClick={() => {}}>
                                        <Link to ="/menu">
                                            View menu
                                        </Link>
                                    </button>
                                </div>
                        </div>
                  </div>   
              </div>
          </div>
        )
      }
    }

export default Home