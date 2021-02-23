import Router from 'next/router'
import {Layout} from '../../feature/home/layout'
import {PostsList} from '../../feature/posts/posts-list'


export default function Index() {

  const goBack = () => {
    Router.push()
  }




  const goHome = () => {
    Router.push('/')
  }



  return <>
    <Layout>
      <PostsList />
    </Layout>
  </>
}