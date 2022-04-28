import { styled } from '~/styles/stitches.config'
import { useStore } from '~/store'
import _ from 'lodash'
import { ethers } from 'ethers'
import { useFetcher, useLocation } from '@remix-run/react'
import { ethereum, isPhantom, solana } from '~/library'
import { Button } from '~/components/Button'
import { AnchorIcon, MetamaskIcon, PhantonIcon, GitlabIcon, GhLoginIcon, BitbucketIcon } from '~/components/icons'
import { Flex } from '~/components/Flex'
import { Text } from '~/components/Text'
import { Card } from '~/components/Card'

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
    <Card direction="column">
      <Text as="h1" css={{ mb: '$regular' }} variant="h1">Welcome {user ? 'Back' : null} to PowerStack Remix</Text>
      {/* <TitleStyles as="h2" css={{ fontSize: '$h-4' }}>Rinkeby</TitleStyles> */}
      <Button css={{ mb: '$small' }} onClick={loginWithPhantom} variant="phantom">
        <PhantonIcon />
        Login with Phantom
      </Button>
      <Button css={{ mb: '$small' }} onClick={loginWithMetamask} variant="metamask">
        <MetamaskIcon />
        Login with Metamask
      </Button>
      {/* <p>
        Address:{' '}
        {user?.address && user?.network === 'rinkeby'
          ? user.address
          : 'wallet not connected'}
      </p> */}
      {/* <p>
        Address:{' '}
        {user?.address && user?.network === 'solana'
          ? user.address
          : 'wallet not connected'}
      </p> */}
      <Button css={{ mb: '$small' }} onClick={() => console.log('I\'m dummy, gimme power!')} variant="anchor">
        <AnchorIcon />
        Login with Anchor
      </Button>

      <hr />

      <Flex justify="between">
        <Button css={{ 'svg': { mr: 0 } }} onClick={() => console.log('I\'m dummy, gimme power!')} variant="oAuth" aria-label="Login with Github">
          <GhLoginIcon />
        </Button>
        <Button css={{ 'svg': { mr: 0 } }} onClick={() => console.log('I\'m dummy, gimme power!')} variant="oAuth" aria-label="Login with Gitlab">
          <GitlabIcon />
        </Button>
        <Button css={{ 'svg': { mr: 0 } }} onClick={() => console.log('I\'m dummy, gimme power!')} variant="oAuth" aria-label="Login with BitBucket">
          <BitbucketIcon />
        </Button>
      </Flex>
    </Card>
  )
}
