import React, { Component } from 'react'

export default class FormCatatan extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         judul : '',
         isi : ''
      }

      this.onJudulHandle = this.onJudulHandle.bind(this)
      this.onIsiHandle = this.onIsiHandle.bind(this)
    }

    onJudulHandle(event) {
        this.setState(() => {
            return {
                judul : event.target.value
            }
        })
    }

    onIsiHandle(event) {
        this.setState(() => {
            return {
                isi : event.target.value
            }
        })
    }
    
  render() {
    return (
      <form action="">
        <input type="text" name='judul' value={this.state.judul} placeholder='Masukan judul catatan' onChange={this.onJudulHandle} />
        <textarea name="isi" id="" placeholder='Tuliskan Catatan anda disini...' value={this.state.isi} onChange={this.onIsiHandle}></textarea>
        <button>Buat</button>
      </form>
    )
  }
}
