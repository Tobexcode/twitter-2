import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'
import { Toaster } from 'react-hot-toast'
import { getSession } from 'next-auth/react'

interface Props{
  tweets: Tweet[]
}


const Home  = ({tweets}: Props) => {
console.log(tweets)
console.log(tweets)
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="https://healthcaresuccess.com/wp-content/uploads/Twitter-logo.jpg" />
      </Head>
      <Toaster/>
      <main className='grid grid-cols-9'>
        <Sidebar />

        <Feed tweets={tweets} />
        
        <Widget />
      </main>

      
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  const session = await getSession(context);

  return{
    props: {
      tweets,
      session
    }
  }
}
