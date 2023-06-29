'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MainOuterContainer, MainText, HomeWrapper, MainContainerWrapper, MainInnerContainer } from './styles'
import { open_sans } from '@/utility/fonts'

const Home = () => {
  return (
    <HomeWrapper>
      <Link href="/about">About</Link>
      <MainContainerWrapper>
        <MainOuterContainer>
          <MainInnerContainer>
            <MainText className={open_sans.className}>
              Feel good about your smile
            </MainText>

            <Image 
              src="/nawaz-profilepicture.jpg"
              height={200}
              width={200}
              alt="dr-nawaz"
            />
          </MainInnerContainer>
        </MainOuterContainer>
      </MainContainerWrapper>
    </HomeWrapper>
  )
}

export default Home
