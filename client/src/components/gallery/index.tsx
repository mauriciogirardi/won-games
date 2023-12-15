/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState, useRef } from 'react'
import SlickSlider from 'react-slick'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'
import { Slider, SliderSettings } from '../slider'
import * as S from './gallery.styles'
import Image from 'next/image'

export type GalleryImage = {
  src: string
  label: string | null
}
export type GalleryProps = {
  items: GalleryImage[]
}

const commonSettings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="Next image" />,
  prevArrow: <ArrowLeft aria-label="Previous image" />,
  infinite: false,
  lazyLoad: 'ondemand'
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export function Gallery({ items }: GalleryProps) {
  const refSlider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseModal = () => setIsOpen(false)

  const handleOpenModal = (index: number) => {
    setIsOpen((prevState) => !prevState)
    refSlider.current!.slickGoTo(index, true)
  }

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && handleCloseModal()
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.GalleryContainer>
      <Slider ref={refSlider} settings={settings}>
        {items?.map((item, index) => (
          <Image
            onClick={() => handleOpenModal(index)}
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            width={293}
            height={225}
            quality={100}
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={handleCloseModal}
        >
          <X size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={refSlider} settings={modalSettings}>
            {items?.map((item, index) => (
              <Image
                key={`gallery-${index}`}
                src={item.src}
                alt={item.label || ''}
                width={1200}
                height={677}
                quality={100}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.GalleryContainer>
  )
}
