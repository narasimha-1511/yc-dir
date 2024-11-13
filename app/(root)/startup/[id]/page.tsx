// /startup/id   {id->asfasfasfas}

import React from 'react'

const Page = async  ({params} : {
    params: Promise<{ id : string }>
}) => {

    const id = (await params).id;

  return (
    <>
    <h1 className='text-3xl'>
        
        This is a startup with id {id}
    </h1>
    </>
  )
}

export default Page