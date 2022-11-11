import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
} from 'phosphor-react'
import { useParams } from 'react-router-dom'

import { BaseLink } from '../../components/BaseLink/styles'

import { DataBadge } from '../../components/DataBadge'

import githubIcon from '../../assets/icons/github.svg'

import {
  AContainer,
  BadgesContainer,
  ContentLinePlaceholder,
  LinkContainer,
  PostContainer,
  PostContentContainer,
  PostHeader,
  TitlePlaceholder,
} from './styles'
import { postContext } from '../../hooks/usePost'
import { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { DateTime } from 'luxon'

export function Post() {
  const { postNumber } = useParams()

  const { setPost, isPostSet, postData, resetPost } = useContextSelector(
    postContext,
    (context) => {
      return {
        setPost: context.setPost,
        postData: context.data,
        isPostSet: context.isSet,
        resetPost: context.resetPost,
      }
    },
  )

  useEffect(() => {
    if (postData.number !== Number(postNumber)) {
      resetPost()

      if (postNumber) {
        setPost(postNumber)
      }
    }
  }, [postData, postNumber, resetPost, setPost])

  const formattedCreatedAt = DateTime.fromISO(postData.created_at).setLocale(
    'pt-br',
  )

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
    <PostContainer>
        <main>
          <PostHeader>
            <nav>
              <LinkContainer style={{ textDecoration: 'none' }} to="/">
                <BaseLink>
                  <CaretLeft weight="bold" />

                  <span>Voltar</span>
                </BaseLink>
              </LinkContainer>

              <AContainer
                aria-disabled={isPostSet}
                href={isPostSet ? postData.html_url : undefined}
              >
                <BaseLink>
                  <span>Ver no github</span>

                  <ArrowSquareOut weight="bold" />
                </BaseLink>
              </AContainer>
            </nav>

            <h1>{false ? postData.title : <TitlePlaceholder />}</h1>


            {
              false ? 
                <BadgesContainer>
                  <DataBadge
                    textColor="dark"
                    data={postData.user}
                    icon={<img src={githubIcon} alt="" />}
                  />

                  <DataBadge
                    textColor="dark"
                    data={createdAtToDisplay()!}
                    icon={<CalendarBlank weight="fill" />}
                  />

                  <DataBadge
                    textColor="dark"
                    data={`${postData.comments} ${
                      postData.comments > 1 || postData.comments === 0
                        ? ' comentários'
                        : 'comentário'
                    }`}
                    icon={<ChatCircle weight="fill" />}
                  />
                </BadgesContainer>
              : null
            }
          </PostHeader>
          

          <PostContentContainer>{false ? postData.body : <><ContentLinePlaceholder /> <ContentLinePlaceholder /> <ContentLinePlaceholder /> <ContentLinePlaceholder /> <ContentLinePlaceholder /></>}</PostContentContainer>
        </main>
    </PostContainer>
  )
}
