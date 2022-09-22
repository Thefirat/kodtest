import React, { useState, useEffect } from 'react'
import '../Style/style.css'


function Home() {
  const [employee, setEmployee] = useState([]);
  const fetchData = async () => {
    try{
      const response = await fetch('https://reqres.in/api/users');
      console.log(response);
      const data = await response.json();
      console.log(data.data);

      setEmployee(data.data);
    } catch(error){

    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='parent-div'>

        {
          employee.map(employeee => (
            <div className='page-art'>
                    <div className='img-div'><img className='page-img' alt='avatar' src={employeee.avatar}></img></div>
                    <h3>{employeee.first_name} {employeee.last_name}</h3>   
                    <button className='page-btn'>Contact</button>                 
            </div>
          
          ))
        }
        </div>
  )
}

export default Home




