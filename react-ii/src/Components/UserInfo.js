import React, {Component} from 'react';
import data from './data';
import Card from './Card'

class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            current:data[0],
            id:0
        }
    }
    next=()=>{
        if(this.state.id<24){
            this.setState({id:this.state.id+1,current:data[this.state.id+1]})
            console.log(this.state.id)
        }
        else{
            this.setState({id:this.state.id=24,current:data[24]})
        }
    }
    back=()=>{
        if(this.state.id===0){
            this.setState({id:this.state.id=0,current:data[0]})
        }
        else{
            this.setState({id:this.state.id-1,current:data[this.state.id-1]})
            console.log(this.state.id)
        }
        
    }
    render(){
    return (
        <div>
            <Card current={this.state.current}/>
            <div className="buttons">
            <button className="button" onClick={this.back}>{'<'}Back</button>
            <button className="button" onClick={this.next}>Next{'>'}</button>
            
            </div>
        </div>
    )
  }}
export default UserInfo;