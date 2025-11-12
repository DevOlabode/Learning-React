import './App.css'
import Chicken from './chicken'
import Greeter from './Greeter'
import Die from './die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'

function App() {
  return <div>
    {/* <ListPicker values={[1,2,2,4,4]}/> */}
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />
  </div>
}

export default App
