import { styled } from '~/styles/stitches.config'
import { useStore } from '~/store'
import _ from 'lodash'
import { ethers } from 'ethers'
import { useFetcher, useLocation } from '@remix-run/react'
import { ethereum, isPhantom, solana } from '~/library'
import {
  AnchorIcon,
  MetamaskIcon,
  PhantonIcon,
  GitlabIcon,
  GhLoginIcon,
  BitbucketIcon,
} from '~/icons'
import { Button, Flex, Text, Card } from '~/components'

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
      const resp = await solana.connect()
      console.log(resp.publicKey.toString(), solana.isConnected) // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
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
    } catch (err) {
      alert((err as Error).message)
    }
  }

  const Title = styled(Text, {
    fontSize: '$h-2',
    fontWeight: '$semi-bold',
    mb: '$large',
    mt: 0,
    px: '$small',
    textAlign: 'center',
    '@tabletUp': {
      fontSize: '$h-1',
      mb: '$x-large',
    },
  })

  const LoginButton = styled(Button, {
    '& svg': {
      flexShrink: 0,
      mr: '$regular',
    },
  })

  const Separator = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr max-content 1fr',
    gridColumnGap: '$regular',
    alignItems: 'center',
    my: '$regular',
    '&:before, &:after': {
      content: '""',
      display: 'block',
      height: '1px',
      backgroundColor: '#E5E7EB',
    },
  })

  const IconsFlex = styled(Flex, {
    px: '$small',
    columnGap: '$small',
    button: {
      flex: '1',
    },
  })

  return (
    <Card direction="column" variant="login">
      <Title as="h1" variant="h1">
        Welcome {user ? 'Back' : null} to PowerStack Remix
      </Title>
      <LoginButton onClick={loginWithPhantom} variant="panthom">
        <PhantonIcon />
        Login with Phantom
      </LoginButton>
      <LoginButton
        css={{ mb: '$small' }}
        onClick={() => console.log("I'm dummy, gimme power!")}
        variant="anchor"
      >
        <AnchorIcon />
        Login with Anchor
      </LoginButton>
      <LoginButton
        css={{ mb: '$small' }}
        onClick={loginWithMetamask}
        variant="metamask"
      >
        <MetamaskIcon />
        Login with Metamask
      </LoginButton>
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
      <Separator>Or sign in with</Separator>
      <IconsFlex justify="center">
        <Button
          css={{ svg: { mr: 0 } }}
          onClick={() => console.log("I'm dummy, gimme power!")}
          variant="oAuth"
          aria-label="Login with Github"
        >
          <GhLoginIcon />
        </Button>
        <Button
          css={{ svg: { mr: 0 } }}
          onClick={() => console.log("I'm dummy, gimme power!")}
          variant="oAuth"
          aria-label="Login with Gitlab"
        >
          <GitlabIcon />
        </Button>
        <Button
          css={{ svg: { mr: 0 } }}
          onClick={() => console.log("I'm dummy, gimme power!")}
          variant="oAuth"
          aria-label="Login with BitBucket"
        >
          <BitbucketIcon />
        </Button>
      </IconsFlex>
    </Card>
  )
}
