import { styled } from '~/styles/stitches.config'


export const Button = styled('button', {
  // Reset
  all: 'unset',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  boxShadow: '0px 4px 8px 0px #00000014, 2px 2px 2px 0px #0000000a',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  fontSize: '$body',
  fontFamily: '$semi-bold',
  fontVariantNumeric: 'tabular-nums',
  border: '1px solid none',
  textAlign: 'center',
  lineHeight: '1.2',
  // TODO: transitions not working?
  transition: 'all 240ms ease-in-out',

  'svg': {
    transition: 'all 240ms ease-in-out',
    width: '24px',
    height: '24px',
    marginRight: '$xxx-small',
    fill: '$text'
  },

  '&:disabled': {
    color: '$neutral-700',
    backgroundColor: '$neutral-300', 
    cursor: 'not-allowed',
  },
  '&:hover:not(:disabled)': {
    boxShadow: '0px 8px 16px 0px #00000014, 4px 4px 4px 0px #0000000a',
  },

  variants: {
    size: {
      'small': {
        borderRadius: '4px',
        height: '40px',
        p: '$xx-small',
      },
      'medium': {
        // NOTE: it is getting the key name but doesn't exist on :root
        borderRadius: '4px',
        height: '50px',
        p: '$x-small',
        fontSize: '$body',
      },
      'large': {
        borderRadius: '4px',
        height: '50px',
        p: '$x-small',
        fontSize: '$body',
      },
    },
    variant: {
      default: {
        backgroundColor: '$neutral',
        '&:hover:not(:disabled)': {
          backgroundColor: '$neutral-700'
        }
      },
      metamask: {
        backgroundColor: '$primary-600',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$primary-700'
        }
      },
      anchor: {
        backgroundColor: '$primary-700',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$primary-800'
        }
      },
      phantom: {
        backgroundColor: '$primary',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$primary-600'
        }
      },
      oAuth: {
        backgroundColor: '$neutral-700',
        color: '#FFF',
        'path': { fill: '#FFF' },
        '&:hover:not(:disabled)': {
          backgroundColor: '$neutral-800'
        }
      },
      transparent: {
        width: 'max-content',
        height: 'max-content',
        backgroundColor: 'none',
        boxShadow: 'none',
        'svg': { m: 0}
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
});