import React from 'react'

export default function searchBar() {
  return <input
   type="search"
   placeholder="Search for any food..."
   value={props.value}
   onChange={props.onChange}

   />
}
