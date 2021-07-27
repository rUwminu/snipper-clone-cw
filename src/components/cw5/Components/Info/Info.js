import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import FeatureImg from '../../Assets/Custom.png'

const Info = () => {
  return (
    <Section>
      <FeatureContainer>
        <FeatureInfo>
          <h1>A fully customizable snippet editor</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            quod iure minima velit iusto temporibus officiis accusamus porro
            cumque. Quam mollitia non nulla dicta necessitatibus delectus?
            Doloribus, quasi ut! Esse.
          </p>
          <Button className='btn btn-4 hover-border-10'>
            Get Started<span> - its free</span>
          </Button>
        </FeatureInfo>
        <FeatureImage>
          <img src={FeatureImg} alt='' />
        </FeatureImage>
      </FeatureContainer>
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    px-6
    lg:px-0
    py-14
    w-full
  `}
`

const FeatureContainer = styled.div`
  ${tw`
    flex
    flex-col-reverse
    md:flex-row
    items-center
    justify-center
    mx-auto
    w-full
    max-w-6xl
  `}
`

const FeatureInfo = styled.div`
  ${tw`
    w-full
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
      py-4
      md:text-lg
      md:font-semibold
      max-w-lg
      md:max-w-xl
      lg:max-w-2xl
    `}
  }
`

const FeatureImage = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-auto
    mb-12
    md:mb-0
  `}

  img {
    ${tw`
      max-w-md
      md:max-w-lg
    `}
  }
`

const Button = styled.button`
  ${tw`
    py-2
    px-4
    text-white
    bg-black
    rounded-md
    hover:bg-gray-900
    hover:shadow-md
    focus:bg-black
  `}

  span {
    ${tw`
      text-gray-300
    `}
  }
`

export default Info
