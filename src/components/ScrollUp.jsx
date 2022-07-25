import React from 'react'
import { RiArrowUpSFill } from 'react-icons/ri'

function ScrollUp() {

  const [visible, setVisible] = React.useState(false)

  const checkScrollOffset = e => {
    if (window.pageYOffset > 350) setVisible(true)
    else setVisible(false)
  }

  const ScrollTo = e => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  React.useEffect(e => {
    window.addEventListener('scroll', checkScrollOffset)
    return e => window.removeEventListener('scroll', checkScrollOffset)
  }, [])

  return (
    <div className={`${visible ? "scale-100" : "scale-0"} fixed bottom-4 right-4 transition-all duration-200 cursor-pointer`}>
      <span className="animate-bounce block bg-purple-600 text-white rounded-full" onClick={ScrollTo} >
        <RiArrowUpSFill className={`text-3xl`} />
      </span>
    </div>
  )
}

export default ScrollUp