import { useState } from 'react'
import Todo from './components/Todo'
import Modal from './components/Modal'
import Backdrop from './components/Backdrop'


function App() {

  return (
    <div className="App">
      <h2>react-app</h2>
      <Todo text="learn-react"></Todo>
      <Todo text="learn-vue"></Todo>
      <Todo text="learn-egg"></Todo>

      <Modal></Modal>
      <Backdrop></Backdrop>
    </div>
  )
}

export default App
