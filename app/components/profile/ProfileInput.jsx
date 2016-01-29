import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field';

export default class ProfileInput extends Component {
  constructor(props, context) {
  	super(props, context)
  	this.state = {
  		text: this.props.text || "" 
  	}	
  }

  handleSubmit(e) {
  	const text = e.target.value.trim()
  	if(e.which === 13) {
  		this.props.onSave(text)
  		if(this.props.newProfile){
  			this.setState({text: ''})
  		}
  	}
  } 		

  handleChange(e) {
  	this.setState({text: e.target.value})
  }

 

  render() {
    
    return (<div>
    			<TextField type="text"
    				   placeholder={this.props.placeholder}
    				   autoFocus="true"
               defaultValue={this.state.text}
    				   value={this.state.text}
            
    				  
    				   onChange={this.handleChange.bind(this)}
    				   onKeyDown={this.handleSubmit.bind(this)}/>

    		</div>
    )
  }
}


