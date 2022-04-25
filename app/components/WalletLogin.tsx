import { styled } from '~/styles/stitches.config'
import { useStore } from '~/store'
import _ from 'lodash'
import { ethers } from 'ethers'
import { useFetcher, useLocation } from '@remix-run/react'
import { ethereum, isPhantom, solana } from '~/library'
import { Button } from '~/components/Button'
import { MetamaskIcon } from '~/components/icons'

const Container = styled('div', {
  minHeight: '100vh',
  pt: '4.5rem',
  px: '$regular',
  maxWidth: '350px',
  mx: 'auto',
  mb: '$regular',
  mt: 0,
})

const TitleStyles = styled('h1', {
  textAlign: 'center',
  fontFamily: '$extra-bold',
})
const message = 'Login to PowerStack Remix'

type LoginOptions = {
  strategy: 'metamask' | 'phantom'
  signed_message: {
    signature: string
    address: string
    message: string
  }
}

const useLoginSubmit = () => {
  const location = useLocation()
  const fetcher = useFetcher()
  const submit = ({ strategy, signed_message }: LoginOptions) => {
    fetcher.submit(signed_message, {
      method: 'post',
      action: `/actions/login/${strategy}?redirect_to=${
        location.pathname || '/'
      }`,
    })
  }
  return submit
}

export const WalletLogin = () => {
  const { user } = useStore()
  const submit = useLoginSubmit()

  const loginWithMetamask = async () => {
    if (!ethereum) return alert('Metamask not found')
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    submit({
      strategy: 'metamask',
      signed_message: {
        signature: await signer.signMessage(message),
        address: await signer.getAddress(),
        message,
      },
    })
  }

  const loginWithPhantom = async () => {
    if (!isPhantom) return alert('Phantom not found')
    try {
      const resp = await solana.connect({ onlyIfTrusted: true })
      console.log(resp.publicKey.toString(), solana.isConnected) // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
    } catch (err) {
      alert((err as Error).message)
    }

    submit({
      strategy: 'phantom',
      signed_message: {
        signature: await solana.signMessage(
          new TextEncoder().encode(message),
          'utf8',
        ),
        address: resp.publicKey.toString(),
        message,
      },
    })
  }

  return (
    <Container>
      <TitleStyles>Welcome {user ? 'Back' : null} to PoweStack Remix</TitleStyles>
      {/* <h3>Rinkeby</h3> */}
      <Button onClick={loginWithMetamask} variant="metamask">
        <MetamaskIcon />
        Login with Metamask
      </Button>
      {/* <p>
        Address:{' '}
        {user?.address && user?.network === 'rinkeby'
          ? user.address
          : 'wallet not connected'}
      </p> */}
      {/* <h3>Solana</h3> */}
      <Button onClick={loginWithPhantom}>Login with Phantom</Button>
      {/* <p>
        Address:{' '}
        {user?.address && user?.network === 'solana'
          ? user.address
          : 'wallet not connected'}
      </p> */}
    </Container>
  )
}
