import { useContextSelector } from 'use-context-selector'

import { DataBadge } from '../../../../components/DataBadge'

import { profileContext } from '../../../../hooks/useProfile'

import githubIcon from '../../../../assets/icons/github.svg'

import { ArrowSquareOut, Factory, Users } from 'phosphor-react'

import { BaseLink } from '../../../../components/BaseLink/styles'

import {
  BioPlaceholder,
  GithubLinkContainer,
  ProfileCardContainer,
  ProfileCardContentContainer,
  ProfileCardResumeContainer,
  ProfilePictureContainer,
  ProfilePictureLoading,
  TitlePlaceholder,
} from './styles'

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

  return (
    <ProfileCardContainer>
      <ProfilePictureContainer>
        {isProfileDataSet ? (
          <img src={profileData.avatar_url} alt="" />
        ) : (
          <ProfilePictureLoading />
        )}
      </ProfilePictureContainer>

      <ProfileCardContentContainer>
        <h1>{isProfileDataSet ? profileData.name : <TitlePlaceholder />}</h1>

        <p>{isProfileDataSet ? profileData.bio : <BioPlaceholder />}</p>

        {isProfileDataSet ? (
          <ProfileCardResumeContainer>
            <DataBadge
              textColor="light"
              icon={<img src={githubIcon} alt="Github Icon" />}
              data={profileData.login}
            />

            {profileData.company ? (
              <DataBadge
                textColor="light"
                icon={<Factory weight="fill" />}
                data={profileData.company}
              />
            ) : null}

            <DataBadge
              textColor="light"
              icon={<Users weight="fill" />}
              data={`${profileData.followers} ${
                profileData.followers === 1 ? 'seguidor' : 'seguidores'
              }`}
            />
          </ProfileCardResumeContainer>
        ) : null}
      </ProfileCardContentContainer>
      <GithubLinkContainer
        aria-disabled={isProfileDataSet}
        href={isProfileDataSet ? profileData.html_url : undefined}
      >
        <BaseLink>
          <span>Github</span>

          <ArrowSquareOut weight="bold" />
        </BaseLink>
      </GithubLinkContainer>
    </ProfileCardContainer>
  )
}
