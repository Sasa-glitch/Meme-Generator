import React from "react"

export default function WindowTracker() {

  const [windowTracker, setWindowTracker] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function windowSize() {
      setWindowTracker(window.innerWidth);
    }

    window.addEventListener('resize', windowSize)

    return () => window.removeEventListener('resize', windowSize)
  }, [])

  return (
    <h1>Window width: {windowTracker}</h1>
  )
}