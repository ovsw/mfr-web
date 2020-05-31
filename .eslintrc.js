module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
    "react/jsx-pascal-case": [0, { allowAllCaps: true }]
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
