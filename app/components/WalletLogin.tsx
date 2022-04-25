import { styled } from '~/styles/stitches.config'
import { useStore } from '~/store'
import _ from 'lodash'
import { ethers } from 'ethers'
import { useFetcher, useLocation } from '@remix-run/react'
import { ethereum, isPhantom, solana } from '~/library'
import { Button } from '~/components/Button'
import { AnchorIcon, MetamaskIcon, PhantonIcon, GitlabIcon, GhLoginIcon, BitbucketIcon } from '~/components/icons'
import { Flex } from '~/components/Flex'

// TODO: This should be a card
const Card = styled(Flex, {
  maxWidth: '350px',
  my: '$x-large',
  mx: 'auto',
  borderRadius: '4px',
  px: '$small',
  py: '$large',
  boxShadow: '0px 4px 8px 0px #00000014, 2px 2px 2px 0px #0000000a',
  '> button, > hr': {
    width: '100%',
    mb: '$small'
  },
  '> hr': {
    height: 1,
    backgroundColor: '$neutral',
    border: 'none',
    mt: '$xx-small',
    mb: '$regular',
  },
  '@tabletUp': {
    px: '$large'
  }
})

const TitleStyles = styled('h1', {
  textAlign: 'center',
  fontFamily: '$extra-bold',
  mb: '$regular',
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
    <Card direction="column">
      <TitleStyles css={{ fontSize: '$h-2' }}>Welcome {user ? 'Back' : null} to PoweStack Remix</TitleStyles>
      {/* <TitleStyles as="h2" css={{ fontSize: '$h-4' }}>Rinkeby</TitleStyles> */}
      <Button onClick={loginWithPhantom} variant="phantom">
        <PhantonIcon />
        Login with Phantom
      </Button>
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
      {/* <p>
        Address:{' '}
        {user?.address && user?.network === 'solana'
          ? user.address
          : 'wallet not connected'}
      </p> */}
      <Button onClick={() => console.log('I\'m dummy, gimme power!')} variant="anchor">
        <AnchorIcon />
        Login with Anchor
      </Button>

      <hr />

      <Button onClick={() => console.log('I\'m dummy, gimme power!')} variant="oAuth">
        <GhLoginIcon />
        Login with Github
      </Button>
      <Button onClick={() => console.log('I\'m dummy, gimme power!')} variant="oAuth">
        <GitlabIcon />
        Login with Gitlab
      </Button>
      <Button onClick={() => console.log('I\'m dummy, gimme power!')} variant="oAuth">
        <BitbucketIcon />
        Login with BitBucket
      </Button>

    </Card>
  )
}
