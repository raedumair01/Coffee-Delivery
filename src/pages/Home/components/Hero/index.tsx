import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  BenefitsContainer,
} from './styles'

import heroImage from '../../../../assets/hero-image.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Hero() {
  // Using the theme for styling (colors)
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeroContent className="container">
        {/* Left Side: Title and Benefits */}
        <div>
          <section>
            {/* Hero Title */}
            <HeroTitle size="xl">
              Find the perfect coffee for any time of day
            </HeroTitle>
            {/* Description */}
            <RegularText size="l" color="subtitle" as="h3">
              With Coffee Delivery, you receive your coffee wherever you are, at any time
            </RegularText>
          </section>

          {/* Benefits Section with Icons */}
          <BenefitsContainer>
            {/* Benefit 1: Simple and Secure Shopping */}
            <InfoWithIcon
              iconColor={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Simple and secure shopping"
            />
            {/* Benefit 2: Packaging Keeps Coffee Intact */}
            <InfoWithIcon
              iconColor={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Packaging keeps the coffee intact"
            />
            {/* Benefit 3: Fast and Trackable Delivery */}
            <InfoWithIcon
              iconColor={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Fast and trackable delivery"
            />
            {/* Benefit 4: Fresh Coffee Delivered to You */}
            <InfoWithIcon
              iconColor={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="Fresh coffee delivered to you"
            />
          </BenefitsContainer>
        </div>

        {/* Right Side: Hero Image */}
        <div className="imageContainer">
          <img src={heroImage} alt="Coffee Delivery" />
        </div>
      </HeroContent>
    </HeroContainer>
  )
}
