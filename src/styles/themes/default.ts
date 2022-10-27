export const defaultTheme = {
  colors: {
    base: {
      title: '#E7EDF4',
      subtitle: '#C4D4E3',
      text: '#AFC2D4',
      span: '#7B96B2',
      label: '#3A536B',
      border: '#1C2F41',
      post: '#112131',
      profile: '#0B1B2B',
      background: '#071422',
      input: '#040F1A',
    },
    brand: {
      blue: '#3294F8',
    },
  },
  text: {
    title: {
      lg: {
        'font-size': '1.5rem',
        'line-height': '130%',
        'font-weight': 'bold',
      },
      md: {
        'font-size': '1.25rem',
        'line-height': '160%',
        'font-weight': 'bold',
      },
      sm: {
        'font-size': '1rem',
        'line-height': '160%',
        'font-weight': 'bold',
      },
    },
    text: {
      md: {
        'font-size': '1rem',
        'line-height': '160%',
      },
      sm: {
        'font-size': '0.875rem',
        'line-height': '160%',
      },
    },
    components: {
      link: {
        'font-size': '0.75rem',
        'line-height': '160%',
        'font-weight': 'bold',
      },
    },
  },
  "main-max-width": '70rem'
} as const
