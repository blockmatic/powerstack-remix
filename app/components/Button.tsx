import { styled } from '~/styles/stitches.config'


export const Button = styled('button', {
  // Reset
  all: 'unset',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
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
      github: {
        backgroundColor: '$neutral-800',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$neutral-700'
        }
      },
      gitlab: {
        backgroundColor: '$primary-400',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$neutral-300'
        }
      },
      bitbucket: {
        backgroundColor: '$primary',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$neutral-400'
        }
      },
      metamask: {
        backgroundColor: '$neutral-700',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$neutral-800'
        }
      },
      anchor: {
        backgroundColor: '$primary-400',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$primary'
        }
      },
      phantom: {
        backgroundColor: '$primary',
        color: '#FFF',
        '&:hover:not(:disabled)': {
          backgroundColor: '$primary-600'
        }
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
});