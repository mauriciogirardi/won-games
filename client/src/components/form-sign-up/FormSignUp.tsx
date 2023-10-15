'use client'

import { Email, Lock } from 'styled-icons/material-outlined'
import { UserCircle } from 'styled-icons/boxicons-regular'
import { TextField } from '../text-field/TextField'
import * as S from './FormSignUp.styles'
import { Button } from '../button/Button'
import Link from 'next/link'

export function FormSignUp() {
  return (
    <S.FormSignUpContainer>
      <form>
        <TextField
          name="name"
          placeholder="Name"
          type="text"
          icon={<UserCircle />}
        />
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
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />

        <Button fullWidth size="large">
          Sign up now
        </Button>

        <S.FormLink>
          Already have an account? <Link href="auth/sign-in">Sign in</Link>
        </S.FormLink>
      </form>
    </S.FormSignUpContainer>
  )
}
