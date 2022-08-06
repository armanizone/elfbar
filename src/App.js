import React from "react";
import ScrollUp from "./components/ScrollUp";
import { Footer } from "./modules";
import Main from "./pages/Main/Main";

import { useScrollIntoView } from '@mantine/hooks'
import { flushSync } from "react-dom"

export const ScrollContext = React.createContext(null)

function App() {

  const [target, setTarget] = React.useState("")
  const ref = React.useRef(null)

  const { scrollIntoView, targetRef } = useScrollIntoView({
    cancelable: false, 
  });

  const handleScroll = (name) => {
    flushSync(e => {
      setTarget(name)
    })
    scrollIntoView({alignment: 'center'})
  }

  return (
    <>
    <ScrollContext.Provider value={{handleScroll, targetRef, target, ref}}>
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <div></div>
        <div>
           <Main/>
          <ScrollUp/>
        </div>
        <Footer/>
      </div>
    </ScrollContext.Provider>
    </>
  );
}
export default App;
