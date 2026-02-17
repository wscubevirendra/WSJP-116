import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

export default function App() {
  const [formData, setFormData] = useState([]);

  function formDataHandler(data) {
    const userExist = formData.find((user) => {
      return user.email == data.email
    })

    if (userExist) return alert("User Already Exist")
    setFormData([...formData, data])
  }

  function deleteHandler(delIndex) {
    const users = formData.filter((data, index) => {
      return index !== delIndex
    });
    setFormData(users)

  }

  return (
    <div className='container-xxl'>
      <div className="row">
        <div className='col-4'>
          <Form formDataHandler={formDataHandler} />
        </div>
        <div className='col-8'>
          <Table deleteHandler={deleteHandler} formData={formData} />
        </div>

      </div>
    </div>
  )
}
