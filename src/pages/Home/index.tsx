import { useContextSelector } from 'use-context-selector'
import { postsContext } from '../../hooks/usePosts'
import { Posts } from './components/Posts'

import { ProfileCard } from './components/ProfileCard'

import { SearchPostForm } from './components/SearchPostForm'

import { HomeContainer, PostsHeader } from './styles'

export function Home() {
  const postsListLength = useContextSelector(
    postsContext,
    (context) => context.postsListLength,
  )

  return (
    <HomeContainer>
      <main>
        <ProfileCard />

        <PostsHeader>
          <section>
            <h2>Publicações</h2>

            <span>{`${postsListLength} ${
              postsListLength === 1 ? 'publicação' : 'publicações'
            }`}</span>
          </section>

          <SearchPostForm />
        </PostsHeader>

        <Posts></Posts>
      </main>
    </HomeContainer>
  )
}
