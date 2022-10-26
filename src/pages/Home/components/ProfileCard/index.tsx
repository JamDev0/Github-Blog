import githubIcon from '../../../../assets/icons/github.svg'

import { ArrowSquareOut, Factory, Users } from 'phosphor-react'

import {
  GithubLink,
  GithubLinkContainer,
  ProfileCardContainer,
  ProfileCardContentContainer,
  ProfileCardResumeContainer,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { profileContext } from '../../../../hooks/useProfile'

export function ProfileCard() {
  const { profileData, isProfileDataSet } = useContextSelector(
    profileContext,
    (context) => {
      return {
        isProfileDataSet: context.isProfileDataSet,
        profileData: context.profileData,
      }
    },
  )

  console.log(isProfileDataSet)

  return (
    <ProfileCardContainer>
      {isProfileDataSet ? (
        <>
          <img src={profileData.avatar_url} alt="" />

          <ProfileCardContentContainer>
            <h1>{profileData.name}</h1>

            <p>{profileData.bio}</p>

            <ProfileCardResumeContainer>
              <div>
                <img src={githubIcon} alt="Github Icon" />

                <span>{profileData.login}</span>
              </div>
              {profileData.company ? (
                <div>
                  <Factory weight="fill" />

                  <span>{profileData.company}</span>
                </div>
              ) : null}

              <div>
                <Users weight="fill" />

                <span>{profileData.followers} seguidores</span>
              </div>
            </ProfileCardResumeContainer>
          </ProfileCardContentContainer>
          <GithubLinkContainer href={profileData.html_url}>
            <GithubLink>Github</GithubLink>

            <ArrowSquareOut weight="bold" />
          </GithubLinkContainer>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </ProfileCardContainer>
  )
}
