import React, { Component } from 'react'

import axios from 'axios'
import Select from 'react-select'


export default class Filtro extends Component {

  constructor(props){
    super(props)
    this.state = {
      dropDownOpt : [],
      id: "",
      email: ''
    }
  }

 async renderData(){
    const API = await axios.get('https://jsonplaceholder.typicode.com/comments')
    const serverResponse = API.data

    const dropDownValue = serverResponse.map((response) => ({
      "value" : response.id,
      "label" : response.email
    }))

    this.setState(
      {
        dropDownOpt: dropDownValue
      }
    )

  }

  onChange(event){
   this.setState(
     {
       id: event.value, 
       email: event.label
      }
    )
  }

  componentDidMount(){
      this.renderData()
  }

  render() {
    return (
      <div className="Filtro">
        <Select 
           options={this.state.dropDownOpt} 
           onChange={this.onChange.bind(this)}
           isMulti
        />
      </div>
    )
  }
}