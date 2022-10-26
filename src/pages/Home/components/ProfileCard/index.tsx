import githubIcon from '../../../../assets/icons/github.svg'

import { ArrowSquareOut, Factory, Users } from 'phosphor-react'

import {
  GithubLink,
  GithubLinkContainer,
  ProfileCardContainer,
  ProfileCardContentContainer,
  ProfileCardResumeContainer,
} from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src="https://avatars.githubusercontent.com/u/61752887?v=4" alt="" />

      <ProfileCardContentContainer>
        <h1>Juan Garcia</h1>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileCardResumeContainer>
          <div>
            <img src={githubIcon} alt="Github Icon" />

            <span>JamDev0</span>
          </div>

          <div>
            <Factory weight="fill" />

            <span>Rocketseat</span>
          </div>

          <div>
            <Users weight="fill" />

            <span>32 seguidores</span>
          </div>
        </ProfileCardResumeContainer>
      </ProfileCardContentContainer>
      <GithubLinkContainer href="https://github.com/JamDev0">
        <GithubLink>Github</GithubLink>

        <ArrowSquareOut weight="bold" />
      </GithubLinkContainer>
    </ProfileCardContainer>
  )
}
