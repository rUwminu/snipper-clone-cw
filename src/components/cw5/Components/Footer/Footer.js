import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Logo from '../../Assets/Logo.svg'

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <LogoContainer>
          <img src={Logo} alt='' />
        </LogoContainer>
        <TnCContainer>
          <a href='#'>Terms and Conditions</a>
          <a href='#'>Privacy Policy</a>
        </TnCContainer>
      </Container>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  ${tw`
    py-10
    w-full
    flex
    items-center
    justify-center
  `}
`

const Container = styled.div`
  ${tw`
    w-full
    md:max-w-6xl
    flex
    items-center
    justify-between
  `}
`

const LogoContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`

const TnCContainer = styled.div`
  ${tw`
    w-full
    flex
    items-center
    justify-center
  `}

  a {
    ${tw`
      px-3
      relative
    `}

    ::before {
      content: '';
      ${tw`
        absolute
        bottom-0
        w-[0%]
        border-b-2
        border-black
        opacity-0
        transition-all
        duration-500
        ease-in-out
      `}
    }

    ::after {
      content: '';
      ${tw`
        absolute
        bottom-0
        w-[0%]
        border-b-2
        border-black
        opacity-0
        transition-all
        duration-500
        ease-in-out
      `}
    }

    ::before {
      right: 50%;
    }

    ::after {
      left: 50%;
    }

    :hover::after {
      ${tw`
        w-[50%]
        opacity-100
      `}
    }

    :hover::before {
      ${tw`
        w-[50%]
        opacity-100
      `}
    }
  }
`

export default Footer
