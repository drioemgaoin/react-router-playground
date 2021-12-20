import { Link } from 'react-router-dom'

export interface PostProps {
    id: string
    title: string
    summary?: string
    description?: string
    tags: string[]
    showAll?: boolean
}

export const Post = ({ id, title, summary, description, showAll, tags}: PostProps) => {
    const content = (showAll ? description : summary) || ''
    const paragraphs = content!.split((/\r\n/)).filter(x => x.length > 0)

    const renderTag = (tag: string, index: number) => {
        return (
            <div className='tag' key={`tag-${index + 1}`}>
                {index > 0 && (<div className="separator">|</div>)}
                <Link className='name' to={`/posts/tags/${tag}`} >{tag}</Link>
            </div>
        )
    }

    const renderParagraph = (paragraph: string, index: number) => {
        return (
            <p key={`paragraph-${index + 1}`}>
                {paragraph}
            </p>
        )
    }

    const renderTitle = () => {
        if (showAll) {
            return <h2 className='title'>{title}</h2>
        }

        return <Link className='title clickable' to={`/posts/${id}`}>{title}</Link>
    }

    return (
        <div className='post'>
            {renderTitle()}
            <div className="tags">{tags.map(renderTag)}</div>
            <div className="description">{paragraphs.map(renderParagraph)}</div>
        </div>
    )
}