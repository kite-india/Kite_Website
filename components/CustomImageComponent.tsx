import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { fallbackImage, baseUrl } from '../utils/constants'
type ImageProps = {
  layout?: 'fixed' | 'fill' | 'responsive'
  placeholder?: 'blur' | 'empty'
  borderRadius?: string
  objectFit?: 'cover'
  w?: string | any
  h?: string | any
  as?: any
  clipPath?: any
  boxShadow?: string
  mb?: any
  objectPosition?: string
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

const CustomImageComponent = ({ src, ...props }: ImageProps) => {
  if (src != null) {
    if (src[0] === '/') {
      src = baseUrl + src
    }
  }
  const [currentUrl, setCurrentUrl] = useState<string>(
    src ? src : fallbackImage
  )

  useEffect(() => {
    if (src) {
      setCurrentUrl(src)
    }
  }, [src])

  return (
    <Image
      src={currentUrl}
      placeholder="blur"
      blurDataURL={fallbackImage}
      onError={() => setCurrentUrl(fallbackImage)}
      {...props}
    />
  )
}

export default CustomImageComponent
