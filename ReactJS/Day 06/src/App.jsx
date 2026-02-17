import React, { useState, useRef } from 'react'

export default function App() {
  const inputRef = useRef();
  const [list, setList] = useState([]);

  function inputHandler() {
    const task = inputRef.current.value.trim();
    if (task == "") return alert("Input value empty")
    setList([...list, task])
    inputRef.current.value = ""
  }


  function removeHandler(delIndex) {
    const filterData = list.filter(
      (d, i) => {
        return i !== delIndex
      }
    )

    setList(filterData)
  }



  return (
    <div className='w-50 mx-auto rounded-3 my-5 border p-5 shadow'>
      <div class="input-group mb-3">
        <input ref={inputRef} type="text" class="form-control" placeholder="Add toDo ...." aria-label="Recipient’s username" aria-describedby="basic-addon2" />
        <button onClick={inputHandler} class="input-group-text" id="basic-addon2">Add</button>
      </div>
      <ul class="list-group">
        {
          list.map((data, index) => {
            return (
              <li key={index} class="bg-primary mb-2 rounded text-light p-2 d-flex justify-content-between align-items-center">
                {data}
                <button onClick={() => removeHandler(index)} class="badge text-bg-primary ">Remove</button>
              </li>
            )
          })
        }


      </ul>
    </div>
  )
}
