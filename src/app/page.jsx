'use client'

import Image from 'next/image'
import InformationCards from '@/components/InformationCards'
import { 
  MainOuterContainer, 
  MainText, 
  HomeWrapper, 
  MainContainerWrapper, 
  MainInnerContainer 
} from './styles'

const Home = () => {
  return (
    <HomeWrapper>
      <MainContainerWrapper>
        <MainOuterContainer raised>
          <MainInnerContainer>
            <MainText>
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

      <InformationCards />
    </HomeWrapper>
  )
}

export default Home
