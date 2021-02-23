import Link from 'next/link'
import Head from 'next/head'

import {Layout} from '../feature/home/layout'
import {Welcome} from '../feature/home/welcome'


const Index = () => {
  return <>
    <Layout>
      <Welcome />
    </Layout>



    {/*<Head>*/}
    {/*  <title>Next page</title>*/}
    {/*</Head>*/}

    {/*<h1>Test</h1>*/}

    {/*<p>*/}
    {/*  <Link href={'about'}>*/}
    {/*    <a>About</a>*/}
    {/*  </Link>*/}
    {/*</p>*/}


    {/*<p>*/}
    {/*  <Link href={"/posts"}>*/}
    {/*    <a>Posts</a>*/}
    {/*  </Link>*/}
    {/*</p>*/}
  </>
}


export default Index