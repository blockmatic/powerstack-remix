import { Link } from '@remix-run/react'
import { WalletLogin } from '~/components/WalletLogin'
import { Header } from '~/components/Header'

export default function Index() {
  return (
    <div>
      <Header />
      <WalletLogin />
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
