import React, { useState,Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: []
    };
  }
  
  async componentDidMount() {
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => this.setState({ data:data,show:data }))

    document.getElementById('in').addEventListener("keyup", event => {
      let val = document.getElementById('in').value;
      console.log(val)
      if(val == ''){
        this.setState({
          show: this.state.data
        }) 
      }else{
        this.setState({
          show: this.state.data.filter(word => word.startsWith(val))
        }) 
      }
      
      // console.log(this.state.data.filter(word => word.startsWith(val)))
    });
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        <input type="text" id="in" />
        <ul>
          {show.map(show =>
            <li key={show}>
              {show}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
