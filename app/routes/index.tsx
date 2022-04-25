import { Link } from '@remix-run/react'
import { WalletLogin } from '~/components/WalletLogin'
import { Header } from '~/components/Header'
import { styled } from '~/styles/stitches.config'
import { Container } from '~/components/Container'

const MainContent = styled(Container, {
  minHeight: 'calc(100vh - 120px)',
  position: 'relative',
})

export default function Index() {
  return (
    <div>
      <Header />
      <MainContent>
        <WalletLogin />
      </MainContent>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
