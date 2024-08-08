import React from 'react'

const List = ({className, Manuname}) => {
  return (
   <li className={`list-none ${className}`}>{Manuname}</li>
  )
}

export default List