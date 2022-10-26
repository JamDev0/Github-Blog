import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  content: string
  createdAt: string
}

export function PostCard({ content, createdAt, title }: PostCardProps) {
  return (
    <PostCardContainer>
      <header>
        <h2>{title}</h2>
        <span>Há 2 dias</span>
      </header>
      <p>{content}</p>
    </PostCardContainer>
  )
}
