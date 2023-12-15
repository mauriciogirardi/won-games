import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Center({ children }: Props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      {children}
    </div>
  )
}
