import React, {useState, useEffect} from 'react'
import EmployeeCard from '../components/EmployeeCard';


function Employees() {
    const [employees, setEmployees] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch(' https://reqres.in/api/users?page=2');
            console.log(response);
            const data = await response.json();
            console.log(data.data);

             setEmployees(data.data);
        } catch(error) {

        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className='parent-div'>

            { 
            employees.map(employee =>(
               
                <EmployeeCard employee={employee} />
            ))
            }
        </div>
  )
}

export default Employees