import './App.css'
import Chicken from './chicken'
import Greeter from './Greeter'
import Die from './die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import Clicker from './Clicker'
import Form from './Form'

const data = [
  {id: 1,item : 'Eggs', quantity : 12, completed : false},
  {id: 2,item : 'milk', quantity : 1, completed : true},
  {id: 3,item : 'Carrots', quantity : 4, completed : true},
  {id: 4,item : 'Chicken', quantity : 10, completed : false},
]

function App() {
  return <div>
    <Clicker />
  <Form />
    {/* 

    <ShoppingList items={data}/>

    <ColorList colors={["teal", "magenta", "pink", "purple", "red"]}/>

    <Slots v1='w' v2='w' v3='w'/>
    <Slots v1='😋' v2='😋' v3='😂'/>

    <Heading color="Magenta" text="Welcome"/>
    <ListPicker values={[1,2,2,4,4]}/>

    <DoubleDice />
    <DoubleDice />
    <DoubleDice />

    <Die numSides={6}/>
    <Die numSides={15}/>
    <Die numSides={10}/>

    <Greeter person="Samuel" from="Pelumi"/>
    <Greeter person="James" from="Esther"/> */}
  </div>
}

export default App
