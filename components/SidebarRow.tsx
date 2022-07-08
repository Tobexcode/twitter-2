import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    title: string;
    onClick?: () => {}
    
}

function SidebarRow({Icon, title, onClick}: Props) {
  return (
    <div onClick={() => onClick?.()} className='flex max-w-fit cursor-pointer items-center py-3 space-x-2 px-4 rounded-full hover:bg-gray-100 transition-all duration-200 group'>
        <Icon className='h-6 w-6 ' />
        <p className='hidden md:inline-flex group-hover:text-twitter text-base t lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow

// skBLJc4wYcy6YF6ornV4CrERGc7ix8McGMxYKbNyBohBvwkf5xBMMbKbDbj9HGFJqagGGnS0lswjwDGrHhA3KoVZqaAFeqX0Qko3Uny6aFK1ORU3gA39UUMg5bJcij7jwZ92sikJa21FKnxbcY26dyfh3QFyqoJ9jUWOuCeLk5ZVr7RyHMyN