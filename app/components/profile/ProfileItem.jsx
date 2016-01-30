import React, { Component, PropTypes } from 'react';
import ProfileInput from './ProfileInput';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';

export default class ProfileItem extends Component {
	constructor (props,context){
		super(props, context)
		this.state = {
			editingText: false,
            editingStat: false
		}
	}

	handleClickText(){
		this.setState({editingText:true})
	}
    handleClickStat(){
        this.setState({editingStat:true})
    }

	handleSaveText(id,text){
		
       
		this.props.editText(id, text)
		
	   this.setState({editingText: false})
	}

    handleSaveStat(id,stat){
        if(parseInt(stat, 10)){
        this.props.editStat(id, stat)
       
        this.setState({editingStat: false })
        }
        else return
    }


    handleStat(stat){
            if(stat.which === 13) {
                if(parseInt(stat.target.value, 10)){
                 console.log(stat.target.value)
                }
                else console.log("please enter a number value")
            }
    }

  render() {
    const {profiles, completeProfile, deleteProfile, key} = this.props

    let element
    if(this.state.editingText){
    	element = (
                <ProfileInput 
                    text={profiles.text} 
                   
                    onBlur={(text) => this.handleSaveText(profiles.id, text)}
                    onSave={(text) => this.handleSaveText(profiles.id, text)}/>  
    		)
    } 

    else if(this.state.editingStat){
            element = (
                     <ProfileInput
                    
                    text={profiles.stat} 
                    onBlur={(stat) => this.handleSaveStat(profiles.id, stat)}
                    onSave={(stat) => this.handleSaveStat(profiles.id, stat)}/>
              )
    }

    else {
    	element = (
    			<div>

    			<TextField 
                    onFocus={this.handleClickText.bind(this)}
    				defaultValue={profiles.text} value={profiles.text}/>
                
                <TextField 
                    onFocus={this.handleClickStat.bind(this)} 
                    defaultValue={profiles.stat} value={profiles.stat} 
                    onBlur={this.handleStat.bind(this)} 
                    onKeyDown={this.handleStat.bind(this)} 
                    placeholder="Minutes Spent" 
                    style={{width:"120px", marginLeft:"20px"}}/>

                <FlatButton 
                    label="Delete" 
                    onTouchTap={() => deleteProfile(profiles.id, key)} style={{marginLeft:"20px"}} />
    			</div>			
    		)
    }


    return ( 
    	<li>
    		{element}
    	</li>
    )
  }
}


