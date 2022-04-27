import { Link } from '@remix-run/react'
import { WalletLogin } from '~/components/WalletLogin'
import { Header } from '~/components/Header'
import { styled } from '~/styles/stitches.config'
import { Container } from '~/components/Container'
import { Footer } from '~/components/Footer'
import { Flex } from '~/components/Flex'

const MainContent = styled(Flex, {
  minHeight: '75vh',
  position: 'relative',
})
const LoginBackground = styled('div', {
  background: '$login',
  width: '100%',
  height: '100%',
})

export default function Index() {
  return (
    <LoginBackground>
      <Header />
      <MainContent align="center" justify="center">
        <Container>
          <WalletLogin />
        </Container>
      </MainContent>

      <Footer />
    </LoginBackground>
  )
}
