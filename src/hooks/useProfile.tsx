import { ReactNode, useEffect, useReducer } from 'react'

import { createContext } from 'use-context-selector'
import { gitHubUserApi } from '../libs/axios'
import { setProfileAction } from '../reducers/ProfileReducer/actions'
import { ProfileReducer } from '../reducers/ProfileReducer/reducer'

interface ProfileProviderProps {
  children: ReactNode
}

interface ProfileData {
  avatar_url: string
  name: string
  bio: string
  company: string | null
  login: string
  followers: number
  html_url: string
}

interface profileContextValue {
  profileData: ProfileData
  isProfileDataSet: boolean
}

export const profileContext = createContext<profileContextValue>(
  {} as profileContextValue,
)

interface ProfileState {
  data: ProfileData
  isSet: boolean
}

const initialProfileState: ProfileState = {
  isSet: false,
  data: {} as ProfileData,
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [{ isSet, data }, dispatch] = useReducer(
    ProfileReducer,
    initialProfileState,
  )

  const isProfileDataSet = isSet

  const profileData = data

  useEffect(() => {
    if (!isSet) {
      gitHubUserApi
        .get('JamDev0')
        .then(
          ({
            data: {
              avatar_url,
              bio,
              company,
              followers,
              html_url,
              login,
              name,
            },
          }) => {
            const resProfileData: ProfileData = {
              avatar_url,
              bio,
              company,
              followers,
              html_url,
              login,
              name,
            }

            dispatch(setProfileAction(resProfileData))
          },
        )
    }
  }, [isSet])

  return (
    <profileContext.Provider value={{ profileData, isProfileDataSet }}>
      {children}
    </profileContext.Provider>
  )
}
