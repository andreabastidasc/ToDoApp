import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export const TaskForm = ({ tasksList, setTaskList, setAdd }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    setTaskList((prev) => [...prev, { name: data.name, type: data.type, date: data.date, time: data.time, checked: false, creationDate: new Date().toISOString().split('T')[0] }])
    setAdd(false)
  }
  const today = new Date().toISOString().split('T')[0]
  const [type, setType] = useState('general')
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control name='name' {...register('name', { required: true })} type="text" placeholder="Normal text" />
        {errors.name && <p>This field is required</p>}
        <Form.Select aria-label="Default select example" name='type' {...register('type', { required: true })} placeholder='Select a type' defaultValue={type} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="general">General</option>
          <option value="important">Important</option>
        </Form.Select>
        {errors.type && <p>This field is required</p>}
        <Form.Control name='date' {...register('date', { required: type === 'important' })} type="date" min={today} />
        {errors.date && <p>This field is required</p>}
        <Form.Control name='time' {...register('time', { required: type === 'important' })} type="time" />
        {errors.date && <p>This field is required</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  )
}
