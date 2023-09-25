  // tailwind.config.js
  module.exports = {
    theme: {
      backgroundColor: theme => ({
-       ...theme('colors'),
+       'primary': '#171616',
+       'secondary': '#ffed4a',
+       'danger': '#e3342f',
      })
    }
  }