import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartupCard = ({ post } : { post : StartupCardType }) => {

  const { _createdAt , description , views , author: { _id: authorId , name: authorName } , _id : postId , title , image} = post;

  return (
    <li className='startup-card'> 
      <div className='flex-between'>
          <p className='startup-card_date'>
              {formatDate(_createdAt)}
          </p>
          <div className='flex gap-1.5'>
              <EyeIcon className='size-6 text-primary'/>
              <span className='text-16-medium'>{views}</span>
          </div>
      </div>

      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1 '>          
          <Link href={`/user/${authorId}`}>
            <p className='text-16-medium line-clamp-1'>{authorName}</p>
          </Link>

          <Link href={`/startup/${postId}`}>  
            <h3 className='text-26-semibold'>{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image
          // src={`https://placehold.co/600x400`}
          src={`https://imgs.search.brave.com/xFkz2rHVRFxHB3pOHKPh-9VUyP9DKszbVpTUzIP9HvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc`} 
          alt='profile image'
          className='rounded-full' 
          width={60} 
          height={60}/>    
        </Link>
      </div>

      <Link href={`/startup/${postId}`}>
        <p className='startup-card_desc'>
          {description}
        </p>

        <img src={image}  className='startup-card_img'/>

      </Link>
    </li>
  )
}

export default StartupCard