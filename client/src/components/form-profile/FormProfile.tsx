'use client'

import { Button } from '../button/Button'
import { Heading } from '../heading/Heading'
import { TextField } from '../text-field/TextField'
import * as S from './FormProfile.styles'

export function FormProfile() {
  return (
    <S.FormProfileContainer>
      <Heading lineBottom size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          label="Name"
          placeholder="Full name"
          autoComplete="off"
        />

        <TextField
          name="email"
          label="E-mail"
          placeholder="E-mail"
          autoComplete="off"
          initialValue="johndoe@gmail.com"
          disabled
          type="email"
        />

        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Type your password"
        />

        <TextField
          type="password"
          name="new_password"
          label="New password"
          placeholder="New password"
        />

        <Button>Save</Button>
      </S.Form>
    </S.FormProfileContainer>
  )
}
