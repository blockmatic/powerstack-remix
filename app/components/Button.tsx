import { styled } from '~/styles/stitches.config'


export const Button = styled('button', {
  // Reset
  all: 'unset',
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
  height: '$5',
  px: '$2',
  fontFamily: '$',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
  // ToDo:
  },

  variants: {
    size: {
      'small': {
        // Todo:
      },
      'medium': {
        // borderRadius: '$1',
        // height: '$5',
        // px: '$2',
        // fontSize: '$1',
        // lineHeight: '$sizes$5',
      },
      'large': {
      // Todo:
      },
    },
    variant: {
    },
  },
  defaultVariants: {
    // Todo
    // size: 'medium',
    // variant: 'default',
  },
});