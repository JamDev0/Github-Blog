import { PostCardContainer } from './styles'

import { DateTime } from 'luxon'

interface PostCardProps {
  title: string
  content: string
  createdAt: string
  number: number
}

export function PostCard({ content, createdAt, title, number }: PostCardProps) {
  const DateTimeCreatedAt = DateTime.fromISO(createdAt)

  const formattedCreatedAt = DateTimeCreatedAt.setLocale('pt-br')

  const createdAtDaysPassedUntilNow = DateTime.now()
    .diff(DateTimeCreatedAt, 'days')
    .toObject().days

  function createdAtToDisplay() {
    if (createdAtDaysPassedUntilNow! <= 1) {
      return formattedCreatedAt.toRelativeCalendar({ unit: 'hours' })
    } else {
      if (createdAtDaysPassedUntilNow! <= 30) {
        return formattedCreatedAt.toRelativeCalendar({ unit: 'days' })
      } else {
        return formattedCreatedAt.toRelativeCalendar({ unit: 'months' })
      }
    }
  }

  return (
    <PostCardContainer to={`post/${number}`}>
      <header>
        <h2>{title}</h2>
        <span>{createdAtToDisplay()}</span>
      </header>
      <p>{content}</p>
    </PostCardContainer>
  )
}
