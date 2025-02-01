import './App.css'
import { MyButton } from './components/common/Button'
import { ConItem } from './components/common/Container'
import { Sectitle } from './components/common/Title'
function App() {

  return (
    <>
      <MyButton className= "" text="Get Started Today"/>
      <ConItem/>
      <Sectitle gradient = "Solution">Problem &</Sectitle>
    </>
  )
}

export default App
