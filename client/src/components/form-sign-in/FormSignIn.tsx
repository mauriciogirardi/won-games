'use client'

import { Email, Lock } from 'styled-icons/material-outlined'
import { TextField } from '../text-field/TextField'
import * as S from './FormSignIn.styles'
import { Button } from '../button/Button'
import Link from 'next/link'
import { FormContainer, FormLink } from '../form/Form'

export function FormSignIn() {
  return (
    <FormContainer>
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

        <FormLink>
          {"Don't have an account? "}
          <Link href="auth/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}
