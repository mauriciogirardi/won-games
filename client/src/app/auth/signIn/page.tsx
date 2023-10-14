import { Auth } from '@/templates/auth/Auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In'
}

export default function SignIn() {
  return (
    <Auth title="Sign In">
      <h1>Ola</h1>
    </Auth>
  )
}
