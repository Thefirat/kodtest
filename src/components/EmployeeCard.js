import React from 'react'

function EmployeeCard({employee}) {
  console.log(employee)
  return (
         <div className='page-art'>
                     <img className='page-img' alt='avatar' src={employee.avatar}></img>
                    <h3>{employee.first_name} {employee.last_name}</h3> 
                    <button className='page-btn'>Contact</button>                    
                </div>
  )
}

export default EmployeeCard