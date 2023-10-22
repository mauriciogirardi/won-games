/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState, useRef } from 'react'
import SlickSlider from 'react-slick'
import { ArrowBackIos, ArrowForwardIos } from '@styled-icons/material-outlined'
import { Close } from '@styled-icons/material'
import { Slider, SliderSettings } from '../slider/Slider'
import * as S from './Gallery.styles'

export type GalleryImage = {
  src: string
  label: string
}
export type GalleryProps = {
  items: GalleryImage[]
}

const commonSettings: SliderSettings = {
  nextArrow: <ArrowForwardIos aria-label="Next image" />,
  prevArrow: <ArrowBackIos aria-label="Previous image" />,
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
          <img
            onClick={() => handleOpenModal(index)}
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            // width={400}
            // height={233}
            // style={{
            //   width: '100%',
            //   height: 'auto'
            // }}
            // priority
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={handleCloseModal}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={refSlider} settings={modalSettings}>
            {items?.map((item, index) => (
              <img
                key={`gallery-${index}`}
                src={item.src}
                alt={item.label}
                // width={400}
                // height={233}
                // style={{
                //   width: '100%',
                //   height: 'auto'
                // }}
                // priority
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.GalleryContainer>
  )
}
