import React from 'react'

// This is a function components
function Greetings ({name}){
  return (
    <h1>`Hello ${name} welcome to school`</h1>
  )
}

// This is a class components 
class Greetings extends Component{

  constructor(props){
    super(props);


    this.state = {
      name: 'Kitan'
    }
  }


  render(){
    return (
      <h1>`Hello ${this.state.name} welcome to school`</h1>
    )
  }
}

export default Greetings