import Babel from "npm:babel-core";
import Ember from 'ember';
import HtmlbarsInlinePrecompile from 'npm:babel-plugin-htmlbars-inline-precompile';

const hbsPlugin = new HtmlbarsInlinePrecompile(Ember.HTMLBars.precompile);

function babelOpts(moduleName) {
  return {
    modules:'amdStrict',
    moduleIds:true,
    moduleId: moduleName,
    plugins: [ hbsPlugin ]
  };
}

function getJs(code, path ="twiddle/components/dummy-component"){
  return Babel.transform(code, babelOpts(path)).code;
}

function getHbs(code, path = "twiddle/templates/components/dummy-component") {
  const mungedCode = (code || '')
              .replace(/\\/g, "\\\\") // Prevent backslashes from being escaped
              .replace(/`/g, "\\`"); // Prevent backticks from causing syntax errors

  return getJs('export default Ember.HTMLBars.compile(`' + mungedCode + '`, { moduleName: `' + path + '`});', path);
}

export default function getHtml(js, hbs, name="twiddle/templates/components") {
  const ojs = getJs(js, name);
  const ohbs = hbs ? getHbs(hbs) : '';
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>EmberTwiddle</title>
    <meta name="build-at" content="1465064255190">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">


<style type="text/css">
#qunit-testrunner-toolbar, #qunit-tests a[href] { display: none; }
</style>
  </head>
  <body>
    <script type="text/javascript">EmberENV = {"FEATURES":{}};</script><script type="text/javascript" src="//assets.ember-twiddle.com/assets/loader.js?v0.8.1"></script><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.js"></script><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/ember.js/2.5.1/ember.debug.js"></script><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/ember-data.js/2.5.2/ember-data.js"></script><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/ember.js/2.5.1/ember-template-compiler.js"></script><script type="text/javascript" src="//assets.ember-twiddle.com/assets/twiddle-deps.js?v0.8.1"></script>
<script type="text/javascript">define('twiddle/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Controller.extend({
    appName: 'Ember Twiddle'
  });
});
define("twiddle/templates/application", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.compile("{{dummy-component}}", { moduleName: "twiddle/templates/application" });
});
${ojs}
${ohbs}
define('twiddle/app', ['exports', 'ember', './resolver', 'ember-load-initializers', './config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _configEnvironment) {
  'use strict';

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _configEnvironment['default'].modulePrefix,
    podModulePrefix: _configEnvironment['default'].podModulePrefix,
    Resolver: _resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _configEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('twiddle/router', ['exports', 'ember', './config/environment'], function (exports, _ember, _configEnvironment) {
  'use strict';

  var Router = _ember['default'].Router.extend({
    location: 'none'
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('twiddle/initializers/router', ['exports', '../router', 'ember', '../config/environment'], function (exports, _router, _ember, _configEnvironment) {
  'use strict';

  exports['default'] = {
    name: 'router',
    initialize: function initialize() {}
  };
});
define('twiddle/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  exports['default'] = _emberResolver['default'];
});
define("twiddle/config/environment", ["exports"], function (exports) {
  "use strict";

  exports["default"] = { "modulePrefix": "twiddle", "TWIDDLE_ORIGIN": "" };
});
  require("ember").__esModule=true;
  require("ember-load-initializers").__esModule=true;
  require("ember-resolver").__esModule=true;
  require("ember-data").__esModule=true;
  require("twiddle/app")["default"].create({"rootElement":"#root"});window.history.pushState = function() {}; window.history.replaceState = function() {}; window.sessionStorage = undefined;</script>

<div id="root"></div>
  </body>
</html>

`;
}
