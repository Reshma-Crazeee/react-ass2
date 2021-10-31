import { Component } from "react";

function Extract(props){
    return(
        <div className="use">
            <h3 className="second">
               
            Name :{props.item.name} | Department : {props.item.department} | Rating : {props.item.rating}
            </h3>
         </div>
    )
}

export default class FormSubmit extends Component{
    render(){
    return(
        <div>
            <h3>
                {this.props.entry.map((item)=>{
                    return <Extract key={item.id} item={item}  />
                })}
            </h3>
               
        </div>
    )
}
}




