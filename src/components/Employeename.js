import React from 'react';
const Employeename =(props) => {
    return(
        <div className="Empname">
            <p>Filter by Employee Name</p>
            <select id="empname" onChange={props.onChange}>
                <option value="Sundari">Sundari</option>
                <option value="Siri">Siri</option>
                <option value="Lokesh">Lokesh</option>
            </select>
            <select id="age" onChange={props.onChange}>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="50">50</option>
            </select>
        </div>
    );
}
export default Employeename;