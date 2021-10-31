import './App.css';
import { Component } from "react";
import FormSubmit from  './components/change';




export default class Form extends Component{
    state={
        feedback:[],
        name:"",
        department:"",
        rating:"",
    }

    
    updateName=(e)=>{
        const name = e.target.value;
        this.setState({name})
    }

    updateDepart=(e)=>{
        const department = e.target.value;
        console.log(department);
        this.setState({department})
    }

    updateRate=(e)=>{
        const rating = e.target.value;
        this.setState({rating})
    }
    
    card=(e)=>{
        e.preventDefault();
        const submitValue = [...this.state.feedback];
        const submitForm = {id:submitValue.length+1, name:this.state.name, department:this.state.department, rating:this.state.rating};
        submitValue.push(submitForm);
        this.setState({feedback:submitValue,name:"",department:"",rating:""});
        
        
    }
    render(){
      
        return(
            <div >
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <form  >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.updateName}/>
                    </div>
                    <div>
                    
                        <label htmlFor="department">Department : </label>
                        <input type="text" name="depart" value={this.state.department} onChange={this.updateDepart}/>
                    
                    </div>
                    <div>
                    
                        <label htmlFor="rating">Rating : </label>
                        <input type="number" name="rate" value={this.state.rating} onChange={this.updateRate}/>
                        
                    </div>
                    <button onClick={this.card}>Submit</button>
                   
                
                </form>
                <hr/>
                  {this.state.feedback.length>0 && <FormSubmit entry={this.state.feedback}/> }
            </div>
        )
    }
}


