'use client'

import { Mail, Lock, UserCircle } from 'lucide-react'
import { TextField } from '../text-field/TextField'
import { Button } from '../button/Button'
import { FormLink, FormContainer } from '../form/Form'
import Link from 'next/link'
import { PATH_SIGN_IN } from '@/constants/paths'

export function FormSignUp() {
  return (
    <FormContainer>
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
          icon={<Mail />}
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

        <FormLink>
          Already have an account? <Link href={PATH_SIGN_IN}>Sign in</Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}
