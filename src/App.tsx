import './App.css'
import {Activity, Element3} from "iconsax-react";

function App() {

  return (
    <div className="h-screen w-screen bg-neutral-900 flex">
        <div className="p-3 bg-neutral-900 border-r border-neutral-800 flex gap-2 flex-col">
            <div className="inline-flex gap-2 rounded-md   items-center  p-2">
                <Element3 variant={"Bold"} className={'text-lime-300'} size={28}/>
                {/*<h1 className="text-sm font-semibold">Manrope</h1>*/}
            </div>
            <div className="inline-flex gap-2 rounded-md   items-center  p-2">
                <Activity variant={"Bold"} className={'text-neutral-500'} size={28}/>
                {/*<h1 className="text-sm font-semibold">Manrope</h1>*/}
            </div>
        </div>
    </div>
  )
}

export default App
