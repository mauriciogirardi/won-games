'use client'

import { useEffect, useState } from 'react'
import { Filter, X } from 'lucide-react'
import xor from 'lodash.xor'

import { Checkbox } from '../checkbox'
import { Heading } from '../heading'
import { Button } from '../button'
import { Radio } from '../radio'

import * as S from './explore-sidebar.styles'

type Field = {
  label: string
  name: string
}

type TypeFields = 'checkbox' | 'radio'

export type ItemSidebarProps = {
  title: string
  name: string
  type: TypeFields
  fields: Field[]
}

type Values = {
  [key: string]: string | string[] | boolean
}

export type ExploreSidebarProps = {
  sidebars: ItemSidebarProps[]
  onFilter: (values: Values) => void
  initialValues?: Values
}

export function ExploreSidebar({
  sidebars,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) {
  const [values, setValues] = useState(initialValues)
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  useEffect(() => {
    onFilter(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleChangeRadio = (name: string, value: string | boolean) => {
    setValues((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleChangeCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || []
    setValues((prevState) => ({
      ...prevState,
      [name]: xor(currentList, [value])
    }))
  }

  const renderFields = (
    { label, name }: Field,
    type: TypeFields,
    itemName: string
  ) => {
    if (type === 'checkbox') {
      return (
        <Checkbox
          key={name}
          name={name}
          label={label}
          labelFor={name}
          onCheck={() => handleChangeCheckbox(itemName, name)}
          isChecked={(values[itemName] as string[])?.includes(name)}
        />
      )
    }
    if (type === 'radio') {
      return (
        <Radio
          id={name}
          key={name}
          value={name}
          label={label}
          labelFor={name}
          name={itemName}
          onChange={() => handleChangeRadio(itemName, name)}
          defaultChecked={String(name) === String(values[itemName])}
        />
      )
    }
  }

  const handleOpenMenu = () => {
    setIsOpenFilter(false)
  }

  return (
    <S.ExploreSidebarContainer isOpen={isOpenFilter}>
      <S.Overlay aria-hidden={isOpenFilter} />
      <S.IconWrapper>
        <Filter
          aria-label="open filters"
          onClick={() => setIsOpenFilter(true)}
        />
        <X aria-label="close filters" onClick={() => setIsOpenFilter(false)} />
      </S.IconWrapper>

      <S.Content>
        {sidebars?.map(({ fields, title, name, type }) => (
          <S.Items key={title}>
            <Heading
              lineBottom
              color="white"
              lineColor="secondary"
              size="small"
            >
              {title}
            </Heading>

            {fields.map((field) => renderFields(field, type, name))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleOpenMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.ExploreSidebarContainer>
  )
}
