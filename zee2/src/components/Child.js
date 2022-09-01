import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={props.helloParent}> Welcome</button>
    </div>
  )
}

export default Child
