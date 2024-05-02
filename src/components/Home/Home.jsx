import React from 'react'
import BlocHorizontale from '../../Layouts/BlocHorizontale/BlocHorizontale'
import DeviceBloc from '../../Layouts/DeviceBloc/DeviceBloc'

import './Home.css'
export default function Home() {

  return (
    <div className="Container">
      <header>
        <h1>A Beautiful</h1>
        <h1> Adventure Await</h1>
      </header>
   <main>
    <div className="canvas1">
     <BlocHorizontale/>
    </div>
    <div className="canvas2">
      <DeviceBloc/>
    </div>
   </main>
   
    </div>
  )
}