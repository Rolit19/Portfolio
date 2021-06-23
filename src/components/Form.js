import React, { Component } from 'react'
import '../css/techSkill.css'

class Form1 extends Component{4
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            address:'',
            phone:'',
        }
    }
    handleNameChange = (event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleAddressChange = event => {
        this.setState({
            response:event.target.value
        })
    }
    handlePhoneChange = event => {
        this.setState({
            email:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.name} ${this.state.phone} ${this.state.address}`);
        event.preventDefault()
    }
    
    render(){
        return (
            <form className="Profile" onSubmit={this.handleSubmit}>
                <div>
                    <label className="txt1">Name:</label>
                    <input type="text" className="addinput" required value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label className="txt1" >Email:</label>
                    <input type="tel" className="addinput" required value={this.state.email} onChange={this.handlePhoneChange}></input>
                </div>
                <div>
                    <label className="txt1">Reason/Feedback:</label>
                    <textarea className="addinput1" required value={this.state.response} onChange={this.handleAddressChange}></textarea>
                </div>
                <button className="formbutton txt" type="submit">Send</button>
            </form>
        )
    };
}

export default Form1
