import { Posts } from './components/Posts'
import { ProfileCard } from './components/ProfileCard'
import { SearchPostForm } from './components/SearchPostForm'
import { HomeContainer, PostsHeader } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <main>
        <ProfileCard />

        <PostsHeader>
          <section>
            <h2>Publicações</h2>

            <span>6 publicações</span>
          </section>

          <SearchPostForm />
        </PostsHeader>

        <Posts></Posts>
      </main>
    </HomeContainer>
  )
}
