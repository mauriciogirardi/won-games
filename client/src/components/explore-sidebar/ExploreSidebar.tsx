'use client'

import { useState } from 'react'

import { Checkbox } from '../checkbox/Checkbox'
import { Heading } from '../heading/Heading'
import { Button } from '../button/Button'
import { Radio } from '../radio/Radio'

import * as S from './ExploreSidebar.styles'
import { Filter, X } from 'lucide-react'

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
  [field: string]: boolean | string
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

  const handleChange = (name: string, value: string | boolean) => {
    setValues((prevState) => ({ ...prevState, [name]: value }))
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
          onCheck={(value) => handleChange(name, value)}
          isChecked={values && !!values[name]}
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
          onChange={() => handleChange(itemName, name)}
          defaultChecked={values && name === values[itemName]}
        />
      )
    }
  }

  const handleFilter = () => {
    setIsOpenFilter(false)
    values && onFilter(values)
  }

  return (
    <S.ExploreSidebarContainer isOpen={isOpenFilter}>
      <S.Overlay aria-hidden={isOpenFilter} />
      <S.IconWrapper>
        <Filter
          data-testid="open"
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
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.ExploreSidebarContainer>
  )
}
