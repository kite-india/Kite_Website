import Image, { ImageProps } from 'next/image'
import React from 'react'
import { S3_URL } from '@utils/constants'

const FALLBACK_IMAGE = process.env.NEXT_PUBLIC_FALLBACK_IMAGE

const CustomImage = ({ src, ...rest }: ImageProps) => {
  if (src) {
    src = S3_URL + src
  }

  return <Image src={src} {...rest} />
}

export default CustomImage
