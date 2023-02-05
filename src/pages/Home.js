import React, { Component } from 'react'
import Form from '../components/Form'
import Photo from '../images/532844.jpg'
import UpdateForm from '../components/UpdateForm'

export default class Home extends Component {
    render() {
      return (
          /*Calling my Component on my home page
          The Photos is in the bot
          */
         
        <div className='body'>
          <img src={Photo}  alt="" style={{minWidth: '100%', height: '10rem'}} />
          <h3 className='heading'>Photos Photos Photos</h3>  
          <main className="container p-1 my-3 bg-primary text-black">
      
           <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <Form />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <UpdateForm /> 
                </div>
              </div>
            </div>

              
          </main> 
          
         
       </div>
      )
    }
  }
