import { Link } from '@remix-run/react'
import { WalletLogin } from '~/components/WalletLogin'
import { useStore } from '~/store'
import { styled } from '~/styles/stitches.config'

const Container = styled('div', {
  fontFamily: 'system-ui, sans-serif',
  lineHeight: 1.4,
  margin: 'auto',
  padding: '$space-1',
  '@media (min-width: 1000px)': {
    width: '600px',
  },
  variants: {
    color: {
      red: {
        backgroundColor: '$red',
      },
      steel: {
        backgroundColor: '$steel',
        color: 'white'
      }
    }
  },
  defaultVariants: {
    color: 'steel'
  }
})

export default function Index() {
  const { user, appconfig } = useStore()
  console.log('Index user value', user)
  console.log('Index appconfig value', appconfig)
  return (
    <Container>
      <h1>Welcome {user ? 'Back' : null} to PoweStack Remix</h1>
      <WalletLogin />
      <ul>
        <li>
          <Link to="/jokes">Jokes</Link>
        </li>
        <li>
          <Link to="/jokes-error">Jokes: Error</Link>
        </li>
      </ul>
    </Container>
  )
}
