import React, { useState } from 'react';
import Header from './Header';
import Employeename from './Employeename';
import Showempdetails from './Showempdetails';
import Employeedetails from "./Employeedetails"

import './App.css';



function App(props) {
  const [selectedEmployee,setSelectedEmployee] = useState(props.selectedEmp)

  const filterByAge =(selectedAge)=>{
    setSelectedEmployee(Employeedetails.filter(employee => employee.age === selectedAge)?.[0])
  }

  const filterByName =(selectedName)=>{
    setSelectedEmployee(Employeedetails.filter(employee => employee.name === selectedName)?.[0])
  }

  const onChange=(event)=>{
    console.log("do some logic",event.target.id,Employeedetails)
    if(event.target.id =="age")
      filterByAge(event.target.value)
    else if(event.target.id =="empname")
      filterByName(event.target.value)
  }

  const { name,age,salary } = selectedEmployee || {};
  return (
    <div className ="Header">
      <Header/>
      <Employeename onChange={onChange}/>
      <Showempdetails name={name} age={age} salary={salary}/>
    </div>
  );
}

export default App;
