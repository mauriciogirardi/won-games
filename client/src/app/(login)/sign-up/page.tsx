import { FormSignUp } from '@/components/form-sign-up/FormSignUp'
import { AuthTemplate } from '@/templates/auth/AuthTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up'
}

export default function SignUp() {
  return (
    <AuthTemplate title="Sign Up">
      <FormSignUp />
    </AuthTemplate>
  )
}
