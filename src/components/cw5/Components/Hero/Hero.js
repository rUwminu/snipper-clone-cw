import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Heroimg from '../../Assets/Snippet.png'

const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <HeroInfo>
          <h1>Gorgeous Code Snippets</h1>
          <p>
            With Snipper, create fully customizable code snippets in a matter of
            seconds right from your browser.
          </p>
          <button>
            Get Started <span>- it's free</span>
          </button>
          <p>No creafit card required</p>
        </HeroInfo>
        <HeroImage>
          <img src={Heroimg} alt='' />
        </HeroImage>
      </HeroContainer>
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    pt-40
    w-full
    flex
    items-center
    justify-center
    bg-gradient-to-bl
    from-white
    via-red-300
    to-pink-600
    z-0
  `}
`

const HeroContainer = styled.div`
  ${tw`
    px-4
    lg:px-0
    w-full
    max-w-6xl
    flex
    flex-col
    items-center
    justify-center
  `}
`

const HeroInfo = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    pb-12
    md:pb-20
    w-full
    text-center
  `}

  h1 {
    ${tw`
      text-4xl
      md:text-5xl
      lg:text-6xl
      font-bold
    `}
  }

  p {
    ${tw`
      py-3
      pb-2
      md:text-lg
      md:font-semibold
      max-w-lg
      md:max-w-xl
      lg:max-w-2xl
    `}
  }

  button {
    ${tw`
      my-2
      py-2
      px-3
      bg-black
      text-white
      font-semibold
      rounded-md
      transition-all
      duration-200
      ease-in-out
      hover:translate-y-2
      hover:bg-gray-800
    `}

    span {
      ${tw`
      font-normal
      text-gray-300
    `}
    }
  }
`

const HeroImage = styled.div`
  ${tw`
    w-full
    h-full
  `}
`

export default Hero
