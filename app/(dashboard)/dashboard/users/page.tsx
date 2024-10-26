import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-5'>
      <h1> Dash board users</h1>

      <ul className='mt-10 flex flex-col gap-2'>
        {
          [1, 2, 3, 4 , 5].map((elem) => {
           return(
            <Link key={elem} href={`/dashboard/users/${elem}`} > User {elem} </Link> 
           ); 
          })
        }
      </ul>

    </div>
  )
}

export default page