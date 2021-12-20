import { useParams } from 'react-router-dom'
import { Post } from '../../component/Post'
import posts from './posts.json'

export const PostPage = () => {
    const parameters = useParams()

    const currentPosts = posts
        .filter(post => !parameters.id || post.id === parameters.id)
        .filter(post => !parameters.tag || post.tags.includes(parameters.tag))
        .map(post => (
            <Post 
                key={post.id}
                id={post.id}
                title={post.title} 
                summary={post.summary}
                description={post.description} 
                tags={post.tags} 
                showAll={parameters.id !== undefined}
            />
        ))

    return <div className='posts-page'>{currentPosts}</div>
}