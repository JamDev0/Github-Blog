import { ReactNode } from 'react'

import { DataBadgeContainer } from './styles'

interface DataBadgeProps {
  icon: ReactNode
  data: string
  textColor: 'dark' | 'light'
}

export function DataBadge({ icon, data, textColor }: DataBadgeProps) {
  return (
    <DataBadgeContainer textColor={textColor}>
      {icon}

      <span>{data}</span>
    </DataBadgeContainer>
  )
}
