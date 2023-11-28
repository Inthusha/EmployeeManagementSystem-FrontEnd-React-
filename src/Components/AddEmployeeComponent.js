import React,{useEffect, useState} from 'react'
import { useNavigate,useParams} from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService';
import {Link} from 'react-router-dom'

function AddEmployeeComponent() 
{
  const[firstName,setFirstname]=useState('');
  const[lastName,setLastname]=useState('');
  const[emailId,setEmailId]=useState('');
  const navigate=useNavigate();
  const {id}=useParams();

  const saveOrUpdateEmployee=(e)=>{
    e.preventDefault();

    const employee={firstName,lastName,emailId}

    if(id)
    {
       EmployeeService.updateEmployee(id,employee).then((response)=>{
                                                          navigate('/employees')})
                                                  .catch(error=>{console.log(error)})
    }
    else
    {
    EmployeeService.createEmployees(employee).then((response)=>{console.log(response.data)
                                                                 navigate('/employees')})
                                             .catch((error=>{console.log(error)}))

    }
}

  useEffect(()=>{

    EmployeeService.getEmployeeById(id).then((response)=>{setFirstname(response.data.firstName)
                                                          setLastname(response.data.lastName)
                                                         setEmailId(response.data.emailId)})
                                      .catch((error)=>{console.log(error)})

  },[])

  const title=()=>{

    if(id)
    {
      return <h2 className="text-center">Update Employee</h2>
    }
    else{
      return <h2 className="text-center">Add Employee</h2>
    }
  }

  return (
    <div>
        <br/><br/>
        <div className='container' >
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              {
                title()
              }
              <div className='card-body'>

                <form>

                  <div className='for-group mb-2'>
                    <label className='form-label'>First Name:</label>
                    <input type="text" 
                          placeholder='Enter first name' 
                          name='firstname' 
                          className='form-control' 
                          value={firstName} 
                          onChange={(e)=>setFirstname(e.target.value)}>
                     </input>
                     </div>

                     <div className='for-group mb-2'>
                    <label className='form-label'>Last Name:</label>
                    <input type="text" 
                          placeholder='Enter last name' 
                          name='lastname' 
                          className='form-control' 
                          value={lastName} 
                          onChange={(e)=>setLastname(e.target.value)}>
                     </input>
                     </div>

                     <div className='for-group mb-2'>
                    <label className='form-label'>Email Id:</label>
                    <input type="text" 
                          placeholder='Enter email Id' 
                          name='emailId' 
                          className='form-control' 
                          value={emailId} 
                          onChange={(e)=>setEmailId(e.target.value)}>
                     </input>
                     </div>
                  
                  <button className='btn btn-success' onClick={(e)=>saveOrUpdateEmployee(e)}>Submit</button>
                  <Link to ='/employees' className="btn btn-danger">Cancel</Link>

                </form>

              </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default AddEmployeeComponent

