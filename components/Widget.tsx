import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widget() {
    return (
        <div className='hidden lg:inline mt-2 px-2 col-span-2'>
            <div className='flex items-center p-3 space-x-2 bg-gray-100 rounded-full max-w-fit'>
                <SearchIcon className='h-5 w-5' />
                <input type="text" placeholder='Search Twitter' className='bg-transparent outline-none' />
            </div>
            <TwitterTimelineEmbed
  sourceType="profile"
  screenName="SaurabhNemade"
  options={{height: 1000}}
  noScrollbar
/>

        </div>
    )
}

export default Widget
