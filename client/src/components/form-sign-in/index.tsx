'use client'

import { Mail, Lock } from 'lucide-react'
import Link from 'next/link'
import { TextField } from '../text-field'
import { Button } from '../button'
import { PATH_SIGN_UP } from '@/constants/paths'
import { FormContainer, FormLink } from '../form'
import * as S from './form-sign-in.styles'

export function FormSignIn() {
  return (
    <FormContainer>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Mail />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />

        <S.ForgetPassword href="#">Forgot your password?</S.ForgetPassword>

        <Button fullWidth size="large">
          Sign in now
        </Button>

        <FormLink>
          {"Don't have an account? "}
          <Link href={PATH_SIGN_UP}>Sign up</Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}
