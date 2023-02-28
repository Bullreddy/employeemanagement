import React from 'react';
function Showempdetails (props){
return(
    <div>
        <div>Employee Name: {props.name}</div>
        <div>Employee Age: {props.age}</div>
        <div>Employee Salry: {props.Salary}</div>
    </div>
);

}
export default Showempdetails;