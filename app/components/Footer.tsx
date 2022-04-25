import { Link } from '@remix-run/react'
import { Button } from '~/components/Button'
import { LightModeIcon } from '~/components/icons'
import { Text } from '~/components/Text'
import { styled } from '~/styles/stitches.config'
import { Flex } from './Flex'

// NOTE: Should be a  Link component
const ExternalLink = styled('a', {
  color: '$primary-300',
  '&:hover': {
    color: '$primary-400'
  } 
})
const ThemeTogglerWrapper = styled('div', {
  'button': {
    borderRadius: '50%',
  },
  '&:hover circle[id="hover-fill"]': {
    fill: '$text',
  }
})

export const Footer = () => (
  <Flex css={{ py: '$regular', px: '$x-small', color: '$neutral-600' }} justify="between">
    <Text>
      powered by <ExternalLink href="https://github.com/blockmatic">Blockmatic</ExternalLink>
    </Text>
    <ThemeTogglerWrapper>
      <Button variant="transparent">
        <LightModeIcon />
      </Button>
    </ThemeTogglerWrapper>
  </Flex>
)