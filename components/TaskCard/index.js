import React from 'react'
import { Form } from 'react-bootstrap'

export const TaskCard = ({ task, tasksList, setTasksList }) => {
  return (
    <div>
        <div style={{ display: 'flex' }}>
            <p>{task.name}</p>
            <Form.Check
            type="checkbox"
            onChange={(e) => {
              task.checked = e.target.checked
              const trueFirst = tasksList.sort((a, b) => Number(b.checked) - Number(a.checked))
              setTasksList(trueFirst)
            }}
            defaultChecked={task.checked}
            />
        </div>
        <hr />
    </div>
  )
}
