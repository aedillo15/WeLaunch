/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv', '@snowpack/plugin-sass', '@snowpack/plugin-webpack',],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
    
  },
  packageOptions: {
    /* ... */
    knownEntrypoints:['@chakra-ui/hooks/use-animation-state', '@chakra-ui/hooks']
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
