import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import clsx from "clsx"
import About from './components/About';
import Skills from './components/Skills';
import ImageMe from './components/Image';

export type focusDivs = |"skills"|"about"|"projects"|""|"contact";

function App() {
  
  const [focus,setFocus] = useState<focusDivs>("");
  const changeFocus = (f:focusDivs)=>{
    if(f==focus) return;
    return setFocus(f)
  }

  return (
    <div className='flex-col w-full h-screen'>
      <Header onChangeFocus={changeFocus}/>
      <div className='w-full h-max grid grid-cols-2 grid-rows-3'>
        <div className='bg-gray-500 h-150 grid grid-cols-2 '>
          <div className=''>
            <ImageMe/>
          </div>
          <div title='contact' className={clsx("bg-gray-400",focus=="contact"&&"border-2 animate-test")}>
              <About/>
          </div>
        </div>
        <div className='bg-gray-200 w-full col-span-1 overflow-scroll max-h-150 no-scrollbar'>
          <Skills/>
        </div>
        <div className='bg-amber-600 col-span-2'>
          03
        </div>
      </div>
    </div>
      
  )
}

export default App
