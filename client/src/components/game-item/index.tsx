'use client'

import { FileDown } from 'lucide-react'

import * as S from './game-item.styles'
import Image from 'next/image'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

export function GameItem({
  img,
  price,
  title,
  downloadLink,
  paymentInfo
}: GameItemProps) {
  return (
    <S.GameItemContainer>
      <S.GameContent>
        <S.ImageBox>
          <S.StyledImage src={img} alt={title} width={151} height={70} />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}

            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <FileDown />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <div>{paymentInfo.purchaseDate}</div>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            <Image
              src={paymentInfo.img}
              alt={paymentInfo.flag}
              width={38}
              height={24}
            />
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.GameItemContainer>
  )
}
