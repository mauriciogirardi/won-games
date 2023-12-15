import { FormSignIn } from '@/components/form-sign-in'
import { AuthTemplate } from '@/templates/auth/auth-template'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In'
}

export default function SignIn() {
  return (
    <AuthTemplate title="Sign In">
      <FormSignIn />
    </AuthTemplate>
  )
}
