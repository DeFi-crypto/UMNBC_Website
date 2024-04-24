module.exports = {
  // ... other configuration settings ...

  // Add this section to your existing webpack configuration
  devServer: {
    allowedHosts: ['localhost', '8888'],
    // ... other devServer options you might need ...
  },

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify")
    }
  },

  
};
