import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


export default class ProfileHeaderInput extends Component {
  constructor(props, context) {
  	super(props, context)
  	this.state = {
  		text:  "",
      stat: 0 ,
      nan: false
  	}	
  }

  handleChangeText(e) {

  	this.setState({text: e.target.value})
     
  }
  handleChangeStat(e) {
    this.setState({stat: e.target.value})
  }

  handleBlur(e){
  	if(!this.props.newProfile) {
  		this.props.onSave(e.target.value)
  	}
  }

  handleSubmit() {
   
    if(parseInt(this.state.stat, 10)){

       var data = {text:this.state.text,
                 stat:this.state.stat }
      this.props.onSave(data)
      this.setState({nan:false})
    }
    else this.setState({nan:true})
    
  }     



  render() {

    
    return (<div>
     
    			<TextField type="text"
    				   placeholder={this.props.placeholder}
    				   autoFocus="true"
    				   value={this.state.text}
               underlineStyle={{borderColor:"#8BC34A"}}
                onChange={this.handleChangeText.bind(this)}/>

          <TextField type="number"
               placeholder="Strength Level"
               autoFocus="true"
                underlineStyle={{borderColor:"#8BC34A"}}
                style={{width:"125px", marginLeft: "20px"}}
               onChange={this.handleChangeStat.bind(this)}/>     
              
          <RaisedButton label="Submit" secondary={true} onTouchTap={this.handleSubmit.bind(this)} style={{marginLeft:"20px"}} /> 

    		</div>
    )
  }
}


