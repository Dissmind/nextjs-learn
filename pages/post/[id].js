import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {PostView} from '../../feature/posts/post-view'


const Post = () => {
  const router = useRouter()

  return (
    <PostView id={router.query.id} />
  )
}


export default Post