import React, { ReactNode } from 'react'
import Card from './Card';

type CarouselProps<Item> = {
  items: Item[]
}
const Carousel: React.FC<CarouselProps<ReactNode>> = ({ items }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  return (
    <></>
  )
}

export default Carousel