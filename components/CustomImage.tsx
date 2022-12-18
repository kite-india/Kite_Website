import Image, { ImageProps } from 'next/image'
import React from 'react'

const FALLBACK_IMAGE = process.env.NEXT_PUBLIC_FALLBACK_IMAGE
const S3_ENDPOINT = process.env.NEXT_PUBLIC_S3_ENDPOINT

const CustomImage = ({ src, ...rest }: ImageProps) => {
  if (src) {
    src = S3_ENDPOINT + src
  }

  return <Image src={src} {...rest} alt={src as string} />
}

export default CustomImage
