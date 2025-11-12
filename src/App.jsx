import './App.css'
import Chicken from './chicken'
import Greeter from './Greeter'
import Die from './die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'

function App() {
  return <div>
    <Heading color="Magenta" text="Welcome"/>
    {/* <ListPicker values={[1,2,2,4,4]}/> */}
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />
{/* 
    <Die numSides={6}/>
    <Die numSides={15}/>
    <Die numSides={10}/>

    <Greeter person="Samuel" from="Pelumi"/>
    <Greeter person="James" from="Esther"/> */}
  </div>
}

export default App
