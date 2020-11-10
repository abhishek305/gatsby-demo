module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'bltff856f3f034d89c7',
        'delivery_token':'cs780dec290c8e7faecfc35177',
        'environment':'preview',
        // Optional: expediteBuild set this to either true or false
        'expediteBuild': true,
        // Optional: Specify true if you want to generate custom schema
        'enableSchemaGeneration' : true,
        // Optional: Specify a different prefix for types. This is useful in cases where you have multiple instances of the plugin to be connected to different stacks.
        'type_prefix': `Contentstack`, // (default)
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
