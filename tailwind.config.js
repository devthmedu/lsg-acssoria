module.exports = {
  content: [
    './src/**/*.{html,js}',  // Caminho para os arquivos que usarão Tailwind CSS
    './public/**/*.{html,js}',  // Inclua a pasta "public" se você tiver arquivos estáticos no Vercel
  ],

  darkMode: 'class', // Modo escuro ativado via classe

  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#131313',
        'accent-dark': '#212121',
        highlight: '#ff781e',
        dark: '#070707FF',
        'dark-background': '#0B0B0BFF',
        'dark-text': '#ffffff',
        'light-background': '#ffffff',
        'light-text': '#000000',
      },

      typography: {
        DEFAULT: {
          css: {
            color: '#131415FF',
            'font-family': 'Roboto, sans-serif',
            'line-height': '1.75',
            'font-size': '1rem',

            // Links
            'a': {
              color: '#ff781e',
              textDecoration: 'none',
              '&:hover': {
                color: '#e64a19',
                textDecoration: 'underline',
              },
            },

            // Parágrafos
            'p': {
              marginBottom: '1.5rem',
              color: '#333',
            },

            // Títulos
            'h1': {
              color: '#070707FF',
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '0.75rem',
            },
            'h2': {
              color: '#1B1B1BFF',
              fontSize: '1.875rem',
              fontWeight: '600',
              lineHeight: '1.3',
              marginBottom: '0.5rem',
            },
            'h3': {
              color: '#08090AFF',
              fontSize: '1.5rem',
              fontWeight: '500',
              lineHeight: '1.4',
              marginBottom: '0.5rem',
            },

            // Listas
            'ul': {
              listStyleType: 'disc',
              marginLeft: '1.5rem',
            },
            'ol': {
              listStyleType: 'decimal',
              marginLeft: '1.5rem',
            },
            'li': {
              marginBottom: '0.75rem',
            },

            // Citações
            'blockquote': {
              borderLeft: '4px solid #ff781e',
              paddingLeft: '1.25rem',
              color: '#131415FF',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            },

            // Tabelas
            'table': {
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '1.5rem',
            },
            'th, td': {
              border: '1px solid #e2e8f0',
              padding: '0.75rem',
              textAlign: 'left',
            },
            'th': {
              backgroundColor: '#f7fafc',
              fontWeight: '600',
            },
            'td': {
              backgroundColor: '#fff',
            },
          },
        },
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      boxShadow: {
        'outline-blue': '0 0 0 3px rgba(59, 130, 246, 0.5)',
        'xl-lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      maxWidth: {
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('animate.css/tailwind'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],

  prefix: 'hs-', // Prefixo para classes
};
