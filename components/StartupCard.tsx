import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Author, Startup } from '@/sanity/types'

export type StartupTypeCard = Omit<Startup , "author"> & { author? : Author };

const StartupCard = ({ post } : { post : StartupTypeCard }) => {

  const { _createdAt , category ,  description , views , _id : postId , title , image , author} = post; 

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
          <Link href={`/user/${author?._id}`}>
            <p className='text-16-medium line-clamp-1'>{author?.name}</p>
          </Link>

          <Link href={`/startup/${postId}`}>  
            <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
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
        <img src={ image ||  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUj5F14wqqAhhyd3G0TPXiVO_S9xWm8QyWJw&s" }  className='startup-card_img'/>

      </Link>

      <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className='text-16-medium'>{category}</p>
        </Link>

        <Button className='startup-card_btn' asChild>
          <Link href={`/startup/${postId}`}>
            Details
          </Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard