import './App.css'
import Chicken from './chicken'
import Greeter from './Greeter'
import Die from './die'
import ListPicker from './ListPicker'

function App() {
  return <div>
    <ListPicker values={[1,2,2,4,4]}/>
    {/* <Die numSides={20}/>
    <Die numSides={30}/>
    <Die numSides={12}/> */}
  </div>
}

export default App
