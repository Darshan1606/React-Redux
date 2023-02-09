import React from 'react'

const Spinner = ({ text = '', size = '5em' }) => {
  const header = text ? <h4>{text}</h4> : null
  return (
    <div id="loader">
      {header}
      <div class="spinner"></div>
    </div>
  )
}
export default Spinner