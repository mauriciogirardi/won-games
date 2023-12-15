'use client'

import { Button } from '../button'
import { Heading } from '../heading'
import { TextField } from '../text-field'
import * as S from './form-profile.styles'

export function FormProfile() {
  return (
    <>
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
    </>
  )
}
