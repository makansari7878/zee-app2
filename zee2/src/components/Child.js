import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={() => props.helloParent('Ansari')}> Welcome</button>
    </div>
  )
}

export default Child
