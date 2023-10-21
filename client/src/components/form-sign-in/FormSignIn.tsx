'use client'

import { Email, Lock } from 'styled-icons/material-outlined'
import Link from 'next/link'
import { TextField } from '../text-field/TextField'
import { Button } from '../button/Button'
import { PATH_SIGN_UP } from '@/constants/paths'
import { FormContainer, FormLink } from '../form/Form'
import * as S from './FormSignIn.styles'

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
          <Link href={PATH_SIGN_UP}>Sign up</Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}
