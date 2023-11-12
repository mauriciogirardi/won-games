import { FormSignIn } from '@/components/form-sign-in/FormSignIn'
import { AuthTemplate } from '@/templates/auth/Auth'
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
