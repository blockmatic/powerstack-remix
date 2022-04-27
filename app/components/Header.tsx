import { Flex } from './Flex';
import { Container } from './Container';
import { styled } from '~/styles/stitches.config'
import { Link } from '@remix-run/react'
import { BlockmaticIcon, GhLoginIcon } from './icons';

export function Header() {
  const linkStyles = {
    color: '$text',
    ml: '$small',
    textDecoration: 'none',
    transition: 'color 0.4s',
    '&:hover': {
      color: '$primary-400'
    }
  }

  const NavBar = styled(Flex, {
    backdropFilter: 'saturate(180%) blur(10px)',
    // NOTE: Sticky shadow, maybe less depth...
    // boxShadow: '0px 12px 20px 0px #00000014, 6px 6px 6px 0px #0000000a',
    position: 'sticky',
    py: '$x-small',
    top: 0,
    width: '100%',
    zIndex: 1000,
  })

  const LinkItem = styled(Link, linkStyles)

  const AnchorItem = styled('a', {
    ...linkStyles,
    '& svg': {
      size: '$iconSmall'
    }
  })

  const VisuallyHidden = styled('h2', {
    position: 'absolute',
    clip: 'rect(1px, 1px, 1px, 1px)',
    overflow: 'hidden',
    height: '1px',
    width: '1px',
    wordWrap: 'normal',
  })

  const Logo = styled('img', {
    maxHeight: '$iconMedium',
    objectFit: 'contain'
  })

  return (
    <NavBar>
      <Container css={{ px: '$xx-small', '@tabletUp': { px: '$small' } }}>
        <Flex justify="between" align="center">
          {/* ToDo: Logo needs to be improved */}
          <Flex css={{ 'svg': { height: '32px', width: 'max-content' } }}>
            <BlockmaticIcon />
          </Flex>
          <Flex
            justify="end"
            as="nav"
            role="navigation"
            aria-labelledby="main-nav-title"
            align="center"
          >
            <VisuallyHidden>Main navigation</VisuallyHidden>
            <LinkItem to="#">Login</LinkItem>
            <AnchorItem
              aria-label="Go to Powerstack Template"
              href="https://github.com/blockmatic/powerstack-remix"
            >
              <GhLoginIcon />
            </AnchorItem>
          </Flex>
        </Flex>
      </Container>
    </NavBar>
  );
}
