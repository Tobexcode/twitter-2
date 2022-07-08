import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
  } from '@heroicons/react/outline';
  import SidebarRow from './SidebarRow'
  import { useSession, signIn, signOut } from "next-auth/react"

function Sidebar() {
  const { data: session } = useSession()
   
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
          <img
        className="m-3 h-10 w-10"
        src="https://i0.wp.com/www.apacph.org/wp/wp-content/uploads/2014/03/Twitter-Logo-New-.png?fit=518%2C518&ssl=1"
        alt="twitter"
      />
     <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon}
      title={session ? 'Sign Out' : 'Sign In'}/>
    </div>
  )
}

export default Sidebar