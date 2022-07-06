import React, { useState, useEffect } from 'react'
import { Layout } from '../../components/Layout'
import { Button } from 'react-bootstrap'
import { TaskForm } from '../../components/TaskForm'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { TaskCard } from '../../components/TaskCard'

export default function idTask() {
  const [tasksList, setTasksList] = useState([])
  const [add, setAdd] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()
  const sortedByDate = tasksList.sort((a, b) => a.creationDate - b.creationDate)
  console.log(sortedByDate, 'hola')
  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [router, session])
  return (
    <Layout>
      {tasksList.length
        ? (
          <div>
              {tasksList.map((item, index) => (
              <div key={index}>
                <TaskCard task={item} tasksList={tasksList} setTasksList={setTasksList} />
              </div>
              ))}
            <Button onClick={() => setAdd(true)} variant="dark">Agregar tarea</Button>
            {add
              ? <TaskForm setTaskList={setTasksList} tasksList={tasksList} setAdd={setAdd} />
              : null}
          </div>
          )
        : (
        <div>
          {add
            ? <TaskForm setTaskList={setTasksList} tasksList={tasksList} setAdd={setAdd} />
            : (
              <div>
                <p>No hay tareas creadas</p>
                <Button onClick={() => setAdd(true)} variant="dark">Agregar tarea</Button>
              </div>
              )}
        </div>
          )}
    </Layout>
  )
}
