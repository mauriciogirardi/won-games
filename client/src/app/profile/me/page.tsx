import { FormProfile } from '@/components/form-profile'
import { ProfileTemplate } from '@/templates/profile/profile-template'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Me'
}

export default function ProfileMe() {
  return (
    <ProfileTemplate>
      <FormProfile />
    </ProfileTemplate>
  )
}
