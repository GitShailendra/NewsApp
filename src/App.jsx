import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'

function App() {
  const[category,setCategory]=useState("general")

  return (
   <>
   {/*in this useState is used as passing prop to change the category on the basis of the user category choice by default it is set as general */}
   <Navbar setCategory={setCategory}/>
   <NewsBoard category={category}/>
   </>
  )
}

export default App
