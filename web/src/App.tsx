import './styles/global.css'

import { Habit } from './components/Habit'

function App() {
  return (
    <div>
      <Habit completed={3}></Habit>
      <Habit completed={10}></Habit>
      <Habit completed={20}></Habit>
      <Habit completed={30}></Habit>
      <Habit completed={40}></Habit>
    </div>
  )
}

export default App
