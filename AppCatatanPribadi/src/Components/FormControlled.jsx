import React, { Component } from 'react'

export class FormControlled extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         search : "",
      }

      this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onSearchHandler(event) {
        this.setState(() => {
            return {
                search : event.target.value
            }
        })
    }
    
  render() {
    return (
      <form action="">
        <input style={{ width : "18rem", padding : "7px", borderRadius : "5px", border : "2px dotted" }} placeholder='Cari Judul Catatan' type="text" value={this.state.search} onChange={this.onSearchHandler}/>
      </form>
    )
  }
}

export default FormControlled
