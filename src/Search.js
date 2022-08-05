import React from 'react'

export default function Search(props) {
  const {onsearch}=props;
  return (
    <div className='tc'>
         <input type="search" placeholder='Search here' className='pa3 bg-lightest-blue ba b--green' onChange={onsearch}></input>
      
    </div>
  )
}
