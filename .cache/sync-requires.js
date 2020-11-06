const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": hot(
    preferDefault(
      require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/.cache/dev-404-page.js")
    )
  ),
  "component---src-pages-about-js": hot(
    preferDefault(
      require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/about.js")
    )
  ),
  "component---src-pages-density-plot-js": hot(
    preferDefault(
      require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/density-plot.js")
    )
  ),
  "component---src-pages-index-js": hot(
    preferDefault(
      require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/index.js")
    )
  ),
  "component---src-templates-basic-js": hot(
    preferDefault(
      require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/templates/basic.js")
    )
  ),
};
