// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\Montserrat-Light.eot":[["Montserrat-Light.5fbce1b5.eot","fonts/Montserrat-Light.eot"],"fonts/Montserrat-Light.eot"],"./..\\fonts\\Montserrat-Light.woff":[["Montserrat-Light.69068b68.woff","fonts/Montserrat-Light.woff"],"fonts/Montserrat-Light.woff"],"./..\\fonts\\Montserrat-Light.ttf":[["Montserrat-Light.fbb571cf.ttf","fonts/Montserrat-Light.ttf"],"fonts/Montserrat-Light.ttf"],"./..\\fonts\\Montserrat-MediumItalic.eot":[["Montserrat-MediumItalic.99ddb918.eot","fonts/Montserrat-MediumItalic.eot"],"fonts/Montserrat-MediumItalic.eot"],"./..\\fonts\\Montserrat-MediumItalic.woff":[["Montserrat-MediumItalic.43a91de3.woff","fonts/Montserrat-MediumItalic.woff"],"fonts/Montserrat-MediumItalic.woff"],"./..\\fonts\\Montserrat-MediumItalic.ttf":[["Montserrat-MediumItalic.7dd20c70.ttf","fonts/Montserrat-MediumItalic.ttf"],"fonts/Montserrat-MediumItalic.ttf"],"./..\\fonts\\Montserrat-Thin.eot":[["Montserrat-Thin.681e1479.eot","fonts/Montserrat-Thin.eot"],"fonts/Montserrat-Thin.eot"],"./..\\fonts\\Montserrat-Thin.woff":[["Montserrat-Thin.2c2de069.woff","fonts/Montserrat-Thin.woff"],"fonts/Montserrat-Thin.woff"],"./..\\fonts\\Montserrat-Thin.ttf":[["Montserrat-Thin.8c4fc1c5.ttf","fonts/Montserrat-Thin.ttf"],"fonts/Montserrat-Thin.ttf"],"./..\\fonts\\Montserrat-ExtraLightItalic.eot":[["Montserrat-ExtraLightItalic.2a272b40.eot","fonts/Montserrat-ExtraLightItalic.eot"],"fonts/Montserrat-ExtraLightItalic.eot"],"./..\\fonts\\Montserrat-ExtraLightItalic.woff":[["Montserrat-ExtraLightItalic.ac27c1fa.woff","fonts/Montserrat-ExtraLightItalic.woff"],"fonts/Montserrat-ExtraLightItalic.woff"],"./..\\fonts\\Montserrat-ExtraLightItalic.ttf":[["Montserrat-ExtraLightItalic.63cb1e62.ttf","fonts/Montserrat-ExtraLightItalic.ttf"],"fonts/Montserrat-ExtraLightItalic.ttf"],"./..\\fonts\\Montserrat-BoldItalic.eot":[["Montserrat-BoldItalic.2b1e9381.eot","fonts/Montserrat-BoldItalic.eot"],"fonts/Montserrat-BoldItalic.eot"],"./..\\fonts\\Montserrat-BoldItalic.woff":[["Montserrat-BoldItalic.f96e16d0.woff","fonts/Montserrat-BoldItalic.woff"],"fonts/Montserrat-BoldItalic.woff"],"./..\\fonts\\Montserrat-BoldItalic.ttf":[["Montserrat-BoldItalic.474b9e20.ttf","fonts/Montserrat-BoldItalic.ttf"],"fonts/Montserrat-BoldItalic.ttf"],"./..\\fonts\\Montserrat-SemiBold.eot":[["Montserrat-SemiBold.86c751bf.eot","fonts/Montserrat-SemiBold.eot"],"fonts/Montserrat-SemiBold.eot"],"./..\\fonts\\Montserrat-SemiBold.woff":[["Montserrat-SemiBold.5275f802.woff","fonts/Montserrat-SemiBold.woff"],"fonts/Montserrat-SemiBold.woff"],"./..\\fonts\\Montserrat-SemiBold.ttf":[["Montserrat-SemiBold.907fc829.ttf","fonts/Montserrat-SemiBold.ttf"],"fonts/Montserrat-SemiBold.ttf"],"./..\\fonts\\Montserrat-ExtraLight.eot":[["Montserrat-ExtraLight.e5ddf4fc.eot","fonts/Montserrat-ExtraLight.eot"],"fonts/Montserrat-ExtraLight.eot"],"./..\\fonts\\Montserrat-ExtraLight.woff":[["Montserrat-ExtraLight.d03e6d73.woff","fonts/Montserrat-ExtraLight.woff"],"fonts/Montserrat-ExtraLight.woff"],"./..\\fonts\\Montserrat-ExtraLight.ttf":[["Montserrat-ExtraLight.f8b4317c.ttf","fonts/Montserrat-ExtraLight.ttf"],"fonts/Montserrat-ExtraLight.ttf"],"./..\\fonts\\Montserrat-ExtraBoldItalic.eot":[["Montserrat-ExtraBoldItalic.f96c12c6.eot","fonts/Montserrat-ExtraBoldItalic.eot"],"fonts/Montserrat-ExtraBoldItalic.eot"],"./..\\fonts\\Montserrat-ExtraBoldItalic.woff":[["Montserrat-ExtraBoldItalic.f6119640.woff","fonts/Montserrat-ExtraBoldItalic.woff"],"fonts/Montserrat-ExtraBoldItalic.woff"],"./..\\fonts\\Montserrat-ExtraBoldItalic.ttf":[["Montserrat-ExtraBoldItalic.d07ea3e9.ttf","fonts/Montserrat-ExtraBoldItalic.ttf"],"fonts/Montserrat-ExtraBoldItalic.ttf"],"./..\\fonts\\Montserrat-Italic.eot":[["Montserrat-Italic.bb37dec3.eot","fonts/Montserrat-Italic.eot"],"fonts/Montserrat-Italic.eot"],"./..\\fonts\\Montserrat-Italic.woff":[["Montserrat-Italic.59399885.woff","fonts/Montserrat-Italic.woff"],"fonts/Montserrat-Italic.woff"],"./..\\fonts\\Montserrat-Italic.ttf":[["Montserrat-Italic.01f4b209.ttf","fonts/Montserrat-Italic.ttf"],"fonts/Montserrat-Italic.ttf"],"./..\\fonts\\Montserrat-Bold.eot":[["Montserrat-Bold.70d570c7.eot","fonts/Montserrat-Bold.eot"],"fonts/Montserrat-Bold.eot"],"./..\\fonts\\Montserrat-Bold.woff":[["Montserrat-Bold.73e94c2c.woff","fonts/Montserrat-Bold.woff"],"fonts/Montserrat-Bold.woff"],"./..\\fonts\\Montserrat-Bold.ttf":[["Montserrat-Bold.f3410305.ttf","fonts/Montserrat-Bold.ttf"],"fonts/Montserrat-Bold.ttf"],"./..\\fonts\\Montserrat-LightItalic.eot":[["Montserrat-LightItalic.7f3bc36b.eot","fonts/Montserrat-LightItalic.eot"],"fonts/Montserrat-LightItalic.eot"],"./..\\fonts\\Montserrat-LightItalic.woff":[["Montserrat-LightItalic.42b77f4b.woff","fonts/Montserrat-LightItalic.woff"],"fonts/Montserrat-LightItalic.woff"],"./..\\fonts\\Montserrat-LightItalic.ttf":[["Montserrat-LightItalic.98f5d6ba.ttf","fonts/Montserrat-LightItalic.ttf"],"fonts/Montserrat-LightItalic.ttf"],"./..\\fonts\\Montserrat-BlackItalic.eot":[["Montserrat-BlackItalic.45a47c6b.eot","fonts/Montserrat-BlackItalic.eot"],"fonts/Montserrat-BlackItalic.eot"],"./..\\fonts\\Montserrat-BlackItalic.woff":[["Montserrat-BlackItalic.34a0d67c.woff","fonts/Montserrat-BlackItalic.woff"],"fonts/Montserrat-BlackItalic.woff"],"./..\\fonts\\Montserrat-BlackItalic.ttf":[["Montserrat-BlackItalic.f2271998.ttf","fonts/Montserrat-BlackItalic.ttf"],"fonts/Montserrat-BlackItalic.ttf"],"./..\\fonts\\Montserrat-SemiBoldItalic.eot":[["Montserrat-SemiBoldItalic.588d6c3f.eot","fonts/Montserrat-SemiBoldItalic.eot"],"fonts/Montserrat-SemiBoldItalic.eot"],"./..\\fonts\\Montserrat-SemiBoldItalic.woff":[["Montserrat-SemiBoldItalic.1b24a078.woff","fonts/Montserrat-SemiBoldItalic.woff"],"fonts/Montserrat-SemiBoldItalic.woff"],"./..\\fonts\\Montserrat-SemiBoldItalic.ttf":[["Montserrat-SemiBoldItalic.d5589f9d.ttf","fonts/Montserrat-SemiBoldItalic.ttf"],"fonts/Montserrat-SemiBoldItalic.ttf"],"./..\\fonts\\Montserrat-Regular.eot":[["Montserrat-Regular.21b801b8.eot","fonts/Montserrat-Regular.eot"],"fonts/Montserrat-Regular.eot"],"./..\\fonts\\Montserrat-Regular.woff":[["Montserrat-Regular.1b35f2ae.woff","fonts/Montserrat-Regular.woff"],"fonts/Montserrat-Regular.woff"],"./..\\fonts\\Montserrat-Regular.ttf":[["Montserrat-Regular.44e710c1.ttf","fonts/Montserrat-Regular.ttf"],"fonts/Montserrat-Regular.ttf"],"./..\\fonts\\Montserrat-Medium.eot":[["Montserrat-Medium.696236a0.eot","fonts/Montserrat-Medium.eot"],"fonts/Montserrat-Medium.eot"],"./..\\fonts\\Montserrat-Medium.woff":[["Montserrat-Medium.dc2be608.woff","fonts/Montserrat-Medium.woff"],"fonts/Montserrat-Medium.woff"],"./..\\fonts\\Montserrat-Medium.ttf":[["Montserrat-Medium.d1110365.ttf","fonts/Montserrat-Medium.ttf"],"fonts/Montserrat-Medium.ttf"],"./..\\fonts\\Montserrat-ExtraBold.eot":[["Montserrat-ExtraBold.d01be202.eot","fonts/Montserrat-ExtraBold.eot"],"fonts/Montserrat-ExtraBold.eot"],"./..\\fonts\\Montserrat-ExtraBold.woff":[["Montserrat-ExtraBold.0d988066.woff","fonts/Montserrat-ExtraBold.woff"],"fonts/Montserrat-ExtraBold.woff"],"./..\\fonts\\Montserrat-ExtraBold.ttf":[["Montserrat-ExtraBold.aa4e0e88.ttf","fonts/Montserrat-ExtraBold.ttf"],"fonts/Montserrat-ExtraBold.ttf"],"./..\\fonts\\Montserrat-Black.eot":[["Montserrat-Black.ce7e48cc.eot","fonts/Montserrat-Black.eot"],"fonts/Montserrat-Black.eot"],"./..\\fonts\\Montserrat-Black.woff":[["Montserrat-Black.7f760daf.woff","fonts/Montserrat-Black.woff"],"fonts/Montserrat-Black.woff"],"./..\\fonts\\Montserrat-Black.ttf":[["Montserrat-Black.1b51557d.ttf","fonts/Montserrat-Black.ttf"],"fonts/Montserrat-Black.ttf"],"./..\\fonts\\Montserrat-ThinItalic.eot":[["Montserrat-ThinItalic.bfd135a1.eot","fonts/Montserrat-ThinItalic.eot"],"fonts/Montserrat-ThinItalic.eot"],"./..\\fonts\\Montserrat-ThinItalic.woff":[["Montserrat-ThinItalic.5a7b3aec.woff","fonts/Montserrat-ThinItalic.woff"],"fonts/Montserrat-ThinItalic.woff"],"./..\\fonts\\Montserrat-ThinItalic.ttf":[["Montserrat-ThinItalic.e4e52119.ttf","fonts/Montserrat-ThinItalic.ttf"],"fonts/Montserrat-ThinItalic.ttf"],"./..\\images\\image-13x.png":[["image-13x.60d6818c.png","images/image-13x.png"],"images/image-13x.png"],"./..\\images\\image-23x.png":[["image-23x.33b4d431.png","images/image-23x.png"],"images/image-23x.png"],"./..\\images\\image-33x.png":[["image-33x.a2ddcd7e.png","images/image-33x.png"],"images/image-33x.png"],"./..\\images\\left-arrow-1.svg":[["left-arrow-1.43b6a431.svg","images/left-arrow-1.svg"],"images/left-arrow-1.svg"],"./..\\images\\left-arrow-2.svg":[["left-arrow-2.b3cb4bed.svg","images/left-arrow-2.svg"],"images/left-arrow-2.svg"],"./..\\images\\rss-symbol.svg":[["rss-symbol.085a52b5.svg","images/rss-symbol.svg"],"images/rss-symbol.svg"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58831" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/style.78032849.js.map