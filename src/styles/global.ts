import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$blue700',
    color: '$blue100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
