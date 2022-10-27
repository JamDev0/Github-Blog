import { PostCardContainer } from './styles'

import { DateTime } from 'luxon'

interface PostCardProps {
  title: string
  content: string
  createdAt: string
}

export function PostCard({ content, createdAt, title }: PostCardProps) {
  const formattedCreatedAt = DateTime.fromISO(createdAt).setLocale('pt-br')

  function createdAtToDisplay() {
    if (formattedCreatedAt.hasSame(DateTime.now(), 'day')) {
      return formattedCreatedAt.toRelativeCalendar({ unit: 'hours' })
    } else {
      if (formattedCreatedAt.hasSame(DateTime.now(), 'month')) {
        return formattedCreatedAt.toRelativeCalendar({ unit: 'days' })
      } else {
        return formattedCreatedAt.toRelativeCalendar({ unit: 'months' })
      }
    }
  }

  return (
    <PostCardContainer>
      <header>
        <h2>{title}</h2>
        <span>{createdAtToDisplay()}</span>
      </header>
      <p>{content}</p>
    </PostCardContainer>
  )
}
