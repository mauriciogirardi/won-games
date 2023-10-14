'use client'

import { Email, Lock } from 'styled-icons/material-outlined'
import { TextField } from '../text-field/TextField'
import * as S from './FormSignIn.styles'
import { Button } from '../button/Button'
import Link from 'next/link'

export function FormSignIn() {
  return (
    <S.FormSignInContainer>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
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

        <S.FormLink>
          {"Don't have an account? "}
          <Link href="auth/sign-up">Sign up</Link>
        </S.FormLink>
      </form>
    </S.FormSignInContainer>
  )
}
