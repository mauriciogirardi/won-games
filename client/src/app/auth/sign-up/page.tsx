import { Auth } from '@/templates/auth/Auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up'
}

export default function SignUp() {
  return (
    <>
      <Auth title="Sign Up">
        <p>Ola</p>
      </Auth>
    </>
  )
}
