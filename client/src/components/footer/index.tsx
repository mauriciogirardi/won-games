'use client'

import Link from 'next/link'
import { Heading } from '../heading'
import { Logo } from '../logo'
import * as S from './footer.styles'

export function Footer() {
  return (
    <S.FooterContainer>
      <Logo color="black" />

      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            CONTACT US
          </Heading>

          <a href="mailto:maurigirarde@yahoo.com.br">sac@wongames.com</a>
          <a href="tel:+351 910 000 000">+351 910 000 000</a>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            FOLLOW US
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.linkedin.com/in/mauricio-girardi/"
              target="_blank"
              rel="noopener, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-girardi/"
              target="_blank"
              rel="noopener, noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-girardi/"
              target="_blank"
              rel="noopener, noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-girardi/"
              target="_blank"
              rel="noopener, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            LINKS
          </Heading>

          <nav aria-describedby="footer resources">
            <Link href="/">Store</Link>
            <Link href="/">Explorer</Link>
            <Link href="/">Search</Link>
            <Link href="/">FAQ</Link>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            LOCATION
          </Heading>

          <span>Rua 7 de Maio</span>
          <span>527 - 89020330</span>
          <span>Aveiro, Portugal</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2023 &#169; all rights reserved.</S.Copyright>
    </S.FooterContainer>
  )
}
