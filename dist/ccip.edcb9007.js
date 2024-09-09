// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hdVcO":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9fde2d64edcb9007";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6yQt3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAbiItem", ()=>getAbiItem);
/** @internal */ parcelHelpers.export(exports, "isArgOfType", ()=>isArgOfType);
/** @internal */ parcelHelpers.export(exports, "getAmbiguousTypes", ()=>getAmbiguousTypes);
var _abiJs = require("../../errors/abi.js");
var _isHexJs = require("../../utils/data/isHex.js");
var _isAddressJs = require("../address/isAddress.js");
var _toEventSelectorJs = require("../hash/toEventSelector.js");
var _toFunctionSelectorJs = require("../hash/toFunctionSelector.js");
function getAbiItem(parameters) {
    const { abi, args = [], name } = parameters;
    const isSelector = (0, _isHexJs.isHex)(name, {
        strict: false
    });
    const abiItems = abi.filter((abiItem)=>{
        if (isSelector) {
            if (abiItem.type === "function") return (0, _toFunctionSelectorJs.toFunctionSelector)(abiItem) === name;
            if (abiItem.type === "event") return (0, _toEventSelectorJs.toEventSelector)(abiItem) === name;
            return false;
        }
        return "name" in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0) return undefined;
    if (abiItems.length === 1) return abiItems[0];
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems){
        if (!("inputs" in abiItem)) continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0) return abiItem;
            continue;
        }
        if (!abiItem.inputs) continue;
        if (abiItem.inputs.length === 0) continue;
        if (abiItem.inputs.length !== args.length) continue;
        const matched = args.every((arg, index)=>{
            const abiParameter = "inputs" in abiItem && abiItem.inputs[index];
            if (!abiParameter) return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes) throw new (0, _abiJs.AbiItemAmbiguityError)({
                    abiItem,
                    type: ambiguousTypes[0]
                }, {
                    abiItem: matchedAbiItem,
                    type: ambiguousTypes[1]
                });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem) return matchedAbiItem;
    return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch(abiParameterType){
        case "address":
            return (0, _isAddressJs.isAddress)(arg, {
                strict: false
            });
        case "bool":
            return argType === "boolean";
        case "function":
            return argType === "string";
        case "string":
            return argType === "string";
        default:
            if (abiParameterType === "tuple" && "components" in abiParameter) return Object.values(abiParameter.components).every((component, index)=>{
                return isArgOfType(Object.values(arg)[index], component);
            });
            // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
            // https://regexr.com/6v8hp
            if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === "number" || argType === "bigint";
            // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
            // https://regexr.com/6va55
            if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === "string" || arg instanceof Uint8Array;
            // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
            // https://regexr.com/6va6i
            if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) return Array.isArray(arg) && arg.every((x)=>isArgOfType(x, {
                    ...abiParameter,
                    // Pop off `[]` or `[M]` from end of type
                    type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
                }));
            return false;
    }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for(const parameterIndex in sourceParameters){
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter) return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [
            sourceParameter.type,
            targetParameter.type
        ];
        const ambiguous = (()=>{
            if (types.includes("address") && types.includes("bytes20")) return true;
            if (types.includes("address") && types.includes("string")) return (0, _isAddressJs.isAddress)(args[parameterIndex], {
                strict: false
            });
            if (types.includes("address") && types.includes("bytes")) return (0, _isAddressJs.isAddress)(args[parameterIndex], {
                strict: false
            });
            return false;
        })();
        if (ambiguous) return types;
    }
    return;
}

},{"../../errors/abi.js":"edx9G","../../utils/data/isHex.js":"bEohQ","../address/isAddress.js":"8I3zw","../hash/toEventSelector.js":"d7pnx","../hash/toFunctionSelector.js":"iZBjv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edx9G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbiConstructorNotFoundError", ()=>AbiConstructorNotFoundError);
parcelHelpers.export(exports, "AbiConstructorParamsNotFoundError", ()=>AbiConstructorParamsNotFoundError);
parcelHelpers.export(exports, "AbiDecodingDataSizeInvalidError", ()=>AbiDecodingDataSizeInvalidError);
parcelHelpers.export(exports, "AbiDecodingDataSizeTooSmallError", ()=>AbiDecodingDataSizeTooSmallError);
parcelHelpers.export(exports, "AbiDecodingZeroDataError", ()=>AbiDecodingZeroDataError);
parcelHelpers.export(exports, "AbiEncodingArrayLengthMismatchError", ()=>AbiEncodingArrayLengthMismatchError);
parcelHelpers.export(exports, "AbiEncodingBytesSizeMismatchError", ()=>AbiEncodingBytesSizeMismatchError);
parcelHelpers.export(exports, "AbiEncodingLengthMismatchError", ()=>AbiEncodingLengthMismatchError);
parcelHelpers.export(exports, "AbiErrorInputsNotFoundError", ()=>AbiErrorInputsNotFoundError);
parcelHelpers.export(exports, "AbiErrorNotFoundError", ()=>AbiErrorNotFoundError);
parcelHelpers.export(exports, "AbiErrorSignatureNotFoundError", ()=>AbiErrorSignatureNotFoundError);
parcelHelpers.export(exports, "AbiEventSignatureEmptyTopicsError", ()=>AbiEventSignatureEmptyTopicsError);
parcelHelpers.export(exports, "AbiEventSignatureNotFoundError", ()=>AbiEventSignatureNotFoundError);
parcelHelpers.export(exports, "AbiEventNotFoundError", ()=>AbiEventNotFoundError);
parcelHelpers.export(exports, "AbiFunctionNotFoundError", ()=>AbiFunctionNotFoundError);
parcelHelpers.export(exports, "AbiFunctionOutputsNotFoundError", ()=>AbiFunctionOutputsNotFoundError);
parcelHelpers.export(exports, "AbiFunctionSignatureNotFoundError", ()=>AbiFunctionSignatureNotFoundError);
parcelHelpers.export(exports, "AbiItemAmbiguityError", ()=>AbiItemAmbiguityError);
parcelHelpers.export(exports, "BytesSizeMismatchError", ()=>BytesSizeMismatchError);
parcelHelpers.export(exports, "DecodeLogDataMismatch", ()=>DecodeLogDataMismatch);
parcelHelpers.export(exports, "DecodeLogTopicsMismatch", ()=>DecodeLogTopicsMismatch);
parcelHelpers.export(exports, "InvalidAbiEncodingTypeError", ()=>InvalidAbiEncodingTypeError);
parcelHelpers.export(exports, "InvalidAbiDecodingTypeError", ()=>InvalidAbiDecodingTypeError);
parcelHelpers.export(exports, "InvalidArrayError", ()=>InvalidArrayError);
parcelHelpers.export(exports, "InvalidDefinitionTypeError", ()=>InvalidDefinitionTypeError);
parcelHelpers.export(exports, "UnsupportedPackedAbiType", ()=>UnsupportedPackedAbiType);
var _formatAbiItemJs = require("../utils/abi/formatAbiItem.js");
var _sizeJs = require("../utils/data/size.js");
var _baseJs = require("./base.js");
class AbiConstructorNotFoundError extends (0, _baseJs.BaseError) {
    constructor({ docsPath }){
        super([
            "A constructor was not found on the ABI.",
            "Make sure you are using the correct ABI and that the constructor exists on it."
        ].join("\n"), {
            docsPath,
            name: "AbiConstructorNotFoundError"
        });
    }
}
class AbiConstructorParamsNotFoundError extends (0, _baseJs.BaseError) {
    constructor({ docsPath }){
        super([
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
            "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
        ].join("\n"), {
            docsPath,
            name: "AbiConstructorParamsNotFoundError"
        });
    }
}
class AbiDecodingDataSizeInvalidError extends (0, _baseJs.BaseError) {
    constructor({ data, size }){
        super([
            `Data size of ${size} bytes is invalid.`,
            "Size must be in increments of 32 bytes (size % 32 === 0)."
        ].join("\n"), {
            metaMessages: [
                `Data: ${data} (${size} bytes)`
            ],
            name: "AbiDecodingDataSizeInvalidError"
        });
    }
}
class AbiDecodingDataSizeTooSmallError extends (0, _baseJs.BaseError) {
    constructor({ data, params, size }){
        super([
            `Data size of ${size} bytes is too small for given parameters.`
        ].join("\n"), {
            metaMessages: [
                `Params: (${(0, _formatAbiItemJs.formatAbiParams)(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ],
            name: "AbiDecodingDataSizeTooSmallError"
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class AbiDecodingZeroDataError extends (0, _baseJs.BaseError) {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError"
        });
    }
}
class AbiEncodingArrayLengthMismatchError extends (0, _baseJs.BaseError) {
    constructor({ expectedLength, givenLength, type }){
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`
        ].join("\n"), {
            name: "AbiEncodingArrayLengthMismatchError"
        });
    }
}
class AbiEncodingBytesSizeMismatchError extends (0, _baseJs.BaseError) {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${(0, _sizeJs.size)(value)}) does not match expected size (bytes${expectedSize}).`, {
            name: "AbiEncodingBytesSizeMismatchError"
        });
    }
}
class AbiEncodingLengthMismatchError extends (0, _baseJs.BaseError) {
    constructor({ expectedLength, givenLength }){
        super([
            "ABI encoding params/values length mismatch.",
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join("\n"), {
            name: "AbiEncodingLengthMismatchError"
        });
    }
}
class AbiErrorInputsNotFoundError extends (0, _baseJs.BaseError) {
    constructor(errorName, { docsPath }){
        super([
            `Arguments (\`args\`) were provided to "${errorName}", but "${errorName}" on the ABI does not contain any parameters (\`inputs\`).`,
            "Cannot encode error result without knowing what the parameter types are.",
            "Make sure you are using the correct ABI and that the inputs exist on it."
        ].join("\n"), {
            docsPath,
            name: "AbiErrorInputsNotFoundError"
        });
    }
}
class AbiErrorNotFoundError extends (0, _baseJs.BaseError) {
    constructor(errorName, { docsPath } = {}){
        super([
            `Error ${errorName ? `"${errorName}" ` : ""}not found on ABI.`,
            "Make sure you are using the correct ABI and that the error exists on it."
        ].join("\n"), {
            docsPath,
            name: "AbiErrorNotFoundError"
        });
    }
}
class AbiErrorSignatureNotFoundError extends (0, _baseJs.BaseError) {
    constructor(signature, { docsPath }){
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            "Make sure you are using the correct ABI and that the error exists on it.",
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join("\n"), {
            docsPath,
            name: "AbiErrorSignatureNotFoundError"
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
class AbiEventSignatureEmptyTopicsError extends (0, _baseJs.BaseError) {
    constructor({ docsPath }){
        super("Cannot extract event signature from empty topics.", {
            docsPath,
            name: "AbiEventSignatureEmptyTopicsError"
        });
    }
}
class AbiEventSignatureNotFoundError extends (0, _baseJs.BaseError) {
    constructor(signature, { docsPath }){
        super([
            `Encoded event signature "${signature}" not found on ABI.`,
            "Make sure you are using the correct ABI and that the event exists on it.",
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join("\n"), {
            docsPath,
            name: "AbiEventSignatureNotFoundError"
        });
    }
}
class AbiEventNotFoundError extends (0, _baseJs.BaseError) {
    constructor(eventName, { docsPath } = {}){
        super([
            `Event ${eventName ? `"${eventName}" ` : ""}not found on ABI.`,
            "Make sure you are using the correct ABI and that the event exists on it."
        ].join("\n"), {
            docsPath,
            name: "AbiEventNotFoundError"
        });
    }
}
class AbiFunctionNotFoundError extends (0, _baseJs.BaseError) {
    constructor(functionName, { docsPath } = {}){
        super([
            `Function ${functionName ? `"${functionName}" ` : ""}not found on ABI.`,
            "Make sure you are using the correct ABI and that the function exists on it."
        ].join("\n"), {
            docsPath,
            name: "AbiFunctionNotFoundError"
        });
    }
}
class AbiFunctionOutputsNotFoundError extends (0, _baseJs.BaseError) {
    constructor(functionName, { docsPath }){
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            "Cannot decode function result without knowing what the parameter types are.",
            "Make sure you are using the correct ABI and that the function exists on it."
        ].join("\n"), {
            docsPath,
            name: "AbiFunctionOutputsNotFoundError"
        });
    }
}
class AbiFunctionSignatureNotFoundError extends (0, _baseJs.BaseError) {
    constructor(signature, { docsPath }){
        super([
            `Encoded function signature "${signature}" not found on ABI.`,
            "Make sure you are using the correct ABI and that the function exists on it.",
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join("\n"), {
            docsPath,
            name: "AbiFunctionSignatureNotFoundError"
        });
    }
}
class AbiItemAmbiguityError extends (0, _baseJs.BaseError) {
    constructor(x, y){
        super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
                `\`${x.type}\` in \`${(0, _formatAbiItemJs.formatAbiItem)(x.abiItem)}\`, and`,
                `\`${y.type}\` in \`${(0, _formatAbiItemJs.formatAbiItem)(y.abiItem)}\``,
                "",
                "These types encode differently and cannot be distinguished at runtime.",
                "Remove one of the ambiguous items in the ABI."
            ],
            name: "AbiItemAmbiguityError"
        });
    }
}
class BytesSizeMismatchError extends (0, _baseJs.BaseError) {
    constructor({ expectedSize, givenSize }){
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
            name: "BytesSizeMismatchError"
        });
    }
}
class DecodeLogDataMismatch extends (0, _baseJs.BaseError) {
    constructor({ abiItem, data, params, size }){
        super([
            `Data size of ${size} bytes is too small for non-indexed event parameters.`
        ].join("\n"), {
            metaMessages: [
                `Params: (${(0, _formatAbiItemJs.formatAbiParams)(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ],
            name: "DecodeLogDataMismatch"
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class DecodeLogTopicsMismatch extends (0, _baseJs.BaseError) {
    constructor({ abiItem, param }){
        super([
            `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ""} on event "${(0, _formatAbiItemJs.formatAbiItem)(abiItem, {
                includeName: true
            })}".`
        ].join("\n"), {
            name: "DecodeLogTopicsMismatch"
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
class InvalidAbiEncodingTypeError extends (0, _baseJs.BaseError) {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid encoding type.`,
            "Please provide a valid ABI type."
        ].join("\n"), {
            docsPath,
            name: "InvalidAbiEncodingType"
        });
    }
}
class InvalidAbiDecodingTypeError extends (0, _baseJs.BaseError) {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid decoding type.`,
            "Please provide a valid ABI type."
        ].join("\n"), {
            docsPath,
            name: "InvalidAbiDecodingType"
        });
    }
}
class InvalidArrayError extends (0, _baseJs.BaseError) {
    constructor(value){
        super([
            `Value "${value}" is not a valid array.`
        ].join("\n"), {
            name: "InvalidArrayError"
        });
    }
}
class InvalidDefinitionTypeError extends (0, _baseJs.BaseError) {
    constructor(type){
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"'
        ].join("\n"), {
            name: "InvalidDefinitionTypeError"
        });
    }
}
class UnsupportedPackedAbiType extends (0, _baseJs.BaseError) {
    constructor(type){
        super(`Type "${type}" is not supported for packed encoding.`, {
            name: "UnsupportedPackedAbiType"
        });
    }
}

},{"../utils/abi/formatAbiItem.js":"1dQtZ","../utils/data/size.js":"iGp06","./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1dQtZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatAbiItem", ()=>formatAbiItem);
parcelHelpers.export(exports, "formatAbiParams", ()=>formatAbiParams);
var _abiJs = require("../../errors/abi.js");
function formatAbiItem(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== "function" && abiItem.type !== "event" && abiItem.type !== "error") throw new (0, _abiJs.InvalidDefinitionTypeError)(abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, {
        includeName
    })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params) return "";
    return params.map((param)=>formatAbiParam(param, {
            includeName
        })).join(includeName ? ", " : ",");
}
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith("tuple")) return `(${formatAbiParams(param.components, {
        includeName
    })})${param.type.slice(5)}`;
    return param.type + (includeName && param.name ? ` ${param.name}` : "");
}

},{"../../errors/abi.js":"edx9G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iGp06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @description Retrieves the size of the value (in bytes).
 *
 * @param value The value (hex or byte array) to retrieve the size of.
 * @returns The size of the value (in bytes).
 */ parcelHelpers.export(exports, "size", ()=>size);
var _isHexJs = require("./isHex.js");
function size(value) {
    if ((0, _isHexJs.isHex)(value, {
        strict: false
    })) return Math.ceil((value.length - 2) / 2);
    return value.length;
}

},{"./isHex.js":"bEohQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEohQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isHex", ()=>isHex);
function isHex(value, { strict = true } = {}) {
    if (!value) return false;
    if (typeof value !== "string") return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yABH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setErrorConfig", ()=>setErrorConfig);
parcelHelpers.export(exports, "BaseError", ()=>BaseError);
var _versionJs = require("./version.js");
let errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug })=>docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : undefined,
    version: (0, _versionJs.version)
};
function setErrorConfig(config) {
    errorConfig = config;
}
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = (()=>{
            if (args.cause instanceof BaseError) return args.cause.details;
            if (args.cause?.message) return args.cause.message;
            return args.details;
        })();
        const docsPath = (()=>{
            if (args.cause instanceof BaseError) return args.cause.docsPath || args.docsPath;
            return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({
            ...args,
            docsPath
        });
        const message = [
            shortMessage || "An error occurred.",
            "",
            ...args.metaMessages ? [
                ...args.metaMessages,
                ""
            ] : [],
            ...docsUrl ? [
                `Docs: ${docsUrl}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            ...errorConfig.version ? [
                `Version: ${errorConfig.version}`
            ] : []
        ].join("\n");
        super(message, args.cause ? {
            cause: args.cause
        } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "BaseError"
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = (0, _versionJs.version);
    }
    walk(fn) {
        return walk(this, fn);
    }
}
function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === "object" && "cause" in err) return walk(err.cause, fn);
    return fn ? null : err;
}

},{"./version.js":"9dTAC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dTAC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.21.2";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8I3zw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAddressCache", ()=>isAddressCache);
parcelHelpers.export(exports, "isAddress", ()=>isAddress);
var _lruJs = require("../lru.js");
var _getAddressJs = require("./getAddress.js");
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
const isAddressCache = /*#__PURE__*/ new (0, _lruJs.LruMap)(8192);
function isAddress(address, options) {
    const { strict = true } = options ?? {};
    const cacheKey = `${address}.${strict}`;
    if (isAddressCache.has(cacheKey)) return isAddressCache.get(cacheKey);
    const result = (()=>{
        if (!addressRegex.test(address)) return false;
        if (address.toLowerCase() === address) return true;
        if (strict) return (0, _getAddressJs.checksumAddress)(address) === address;
        return true;
    })();
    isAddressCache.set(cacheKey, result);
    return result;
}

},{"../lru.js":"kX845","./getAddress.js":"hjZaw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kX845":[function(require,module,exports) {
/**
 * Map with a LRU (Least recently used) policy.
 *
 * @link https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LruMap", ()=>LruMap);
class LruMap extends Map {
    constructor(size){
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) this.delete(this.keys().next().value);
        return this;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjZaw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checksumAddress", ()=>checksumAddress);
parcelHelpers.export(exports, "getAddress", ()=>getAddress);
var _addressJs = require("../../errors/address.js");
var _toBytesJs = require("../encoding/toBytes.js");
var _keccak256Js = require("../hash/keccak256.js");
var _lruJs = require("../lru.js");
var _isAddressJs = require("./isAddress.js");
const checksumAddressCache = /*#__PURE__*/ new (0, _lruJs.LruMap)(8192);
function checksumAddress(address_, /**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */ chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`)) return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
    const hash = (0, _keccak256Js.keccak256)((0, _toBytesJs.stringToBytes)(hexAddress), "bytes");
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && address[i]) address[i] = address[i].toUpperCase();
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) address[i + 1] = address[i + 1].toUpperCase();
    }
    const result = `0x${address.join("")}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}
function getAddress(address, /**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */ chainId) {
    if (!(0, _isAddressJs.isAddress)(address, {
        strict: false
    })) throw new (0, _addressJs.InvalidAddressError)({
        address
    });
    return checksumAddress(address, chainId);
}

},{"../../errors/address.js":"aXG3R","../encoding/toBytes.js":"jsem0","../hash/keccak256.js":"cpYiL","../lru.js":"kX845","./isAddress.js":"8I3zw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXG3R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidAddressError", ()=>InvalidAddressError);
var _baseJs = require("./base.js");
class InvalidAddressError extends (0, _baseJs.BaseError) {
    constructor({ address }){
        super(`Address "${address}" is invalid.`, {
            metaMessages: [
                "- Address must be a hex value of 20 bytes (40 hex characters).",
                "- Address must match its checksum counterpart."
            ],
            name: "InvalidAddressError"
        });
    }
}

},{"./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsem0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encodes a UTF-8 string, hex value, bigint, number or boolean to a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes
 * - Example: https://viem.sh/docs/utilities/toBytes#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes('Hello world')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */ parcelHelpers.export(exports, "toBytes", ()=>toBytes);
/**
 * Encodes a boolean into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#booltobytes
 *
 * @param value Boolean value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true)
 * // Uint8Array([1])
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true, { size: 32 })
 * // Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 */ parcelHelpers.export(exports, "boolToBytes", ()=>boolToBytes);
/**
 * Encodes a hex string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#hextobytes
 *
 * @param hex Hex string to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */ parcelHelpers.export(exports, "hexToBytes", ()=>hexToBytes);
/**
 * Encodes a number into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#numbertobytes
 *
 * @param value Number to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */ parcelHelpers.export(exports, "numberToBytes", ()=>numberToBytes);
/**
 * Encodes a UTF-8 string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#stringtobytes
 *
 * @param value String to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */ parcelHelpers.export(exports, "stringToBytes", ()=>stringToBytes);
var _baseJs = require("../../errors/base.js");
var _isHexJs = require("../data/isHex.js");
var _padJs = require("../data/pad.js");
var _fromHexJs = require("./fromHex.js");
var _toHexJs = require("./toHex.js");
const encoder = /*#__PURE__*/ new TextEncoder();
function toBytes(value, opts = {}) {
    if (typeof value === "number" || typeof value === "bigint") return numberToBytes(value, opts);
    if (typeof value === "boolean") return boolToBytes(value, opts);
    if ((0, _isHexJs.isHex)(value)) return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === "number") {
        (0, _fromHexJs.assertSize)(bytes, {
            size: opts.size
        });
        return (0, _padJs.pad)(bytes, {
            size: opts.size
        });
    }
    return bytes;
}
// We use very optimized technique to convert hex string to byte array
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
    return undefined;
}
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0, _fromHexJs.assertSize)(hex, {
            size: opts.size
        });
        hex = (0, _padJs.pad)(hex, {
            dir: "right",
            size: opts.size
        });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) throw new (0, _baseJs.BaseError)(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function numberToBytes(value, opts) {
    const hex = (0, _toHexJs.numberToHex)(value, opts);
    return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === "number") {
        (0, _fromHexJs.assertSize)(bytes, {
            size: opts.size
        });
        return (0, _padJs.pad)(bytes, {
            dir: "right",
            size: opts.size
        });
    }
    return bytes;
}

},{"../../errors/base.js":"4yABH","../data/isHex.js":"bEohQ","../data/pad.js":"dh9br","./fromHex.js":"5gdtu","./toHex.js":"9rk4U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dh9br":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pad", ()=>pad);
parcelHelpers.export(exports, "padHex", ()=>padHex);
parcelHelpers.export(exports, "padBytes", ()=>padBytes);
var _dataJs = require("../../errors/data.js");
function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === "string") return padHex(hexOrBytes, {
        dir,
        size
    });
    return padBytes(hexOrBytes, {
        dir,
        size
    });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null) return hex_;
    const hex = hex_.replace("0x", "");
    if (hex.length > size * 2) throw new (0, _dataJs.SizeExceedsPaddingSizeError)({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: "hex"
    });
    return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size * 2, "0")}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null) return bytes;
    if (bytes.length > size) throw new (0, _dataJs.SizeExceedsPaddingSizeError)({
        size: bytes.length,
        targetSize: size,
        type: "bytes"
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === "right";
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}

},{"../../errors/data.js":"lKIWZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKIWZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SliceOffsetOutOfBoundsError", ()=>SliceOffsetOutOfBoundsError);
parcelHelpers.export(exports, "SizeExceedsPaddingSizeError", ()=>SizeExceedsPaddingSizeError);
parcelHelpers.export(exports, "InvalidBytesLengthError", ()=>InvalidBytesLengthError);
var _baseJs = require("./base.js");
class SliceOffsetOutOfBoundsError extends (0, _baseJs.BaseError) {
    constructor({ offset, position, size }){
        super(`Slice ${position === "start" ? "starting" : "ending"} at offset "${offset}" is out-of-bounds (size: ${size}).`, {
            name: "SliceOffsetOutOfBoundsError"
        });
    }
}
class SizeExceedsPaddingSizeError extends (0, _baseJs.BaseError) {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, {
            name: "SizeExceedsPaddingSizeError"
        });
    }
}
class InvalidBytesLengthError extends (0, _baseJs.BaseError) {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size} ${type} long.`, {
            name: "InvalidBytesLengthError"
        });
    }
}

},{"./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gdtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assertSize", ()=>assertSize);
/**
 * Decodes a hex string into a string, number, bigint, boolean, or byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex
 * - Example: https://viem.sh/docs/utilities/fromHex#usage
 *
 * @param hex Hex string to decode.
 * @param toOrOpts Type to convert to or options.
 * @returns Decoded value.
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x1a4', 'number')
 * // 420
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x48656c6c6f20576f726c6421', 'string')
 * // 'Hello world'
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *   size: 32,
 *   to: 'string'
 * })
 * // 'Hello world'
 */ parcelHelpers.export(exports, "fromHex", ()=>fromHex);
/**
 * Decodes a hex value into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextobigint
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x1a4', { signed: true })
 * // 420n
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420n
 */ parcelHelpers.export(exports, "hexToBigInt", ()=>hexToBigInt);
/**
 * Decodes a hex value into a boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextobool
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Boolean value.
 *
 * @example
 * import { hexToBool } from 'viem'
 * const data = hexToBool('0x01')
 * // true
 *
 * @example
 * import { hexToBool } from 'viem'
 * const data = hexToBool('0x0000000000000000000000000000000000000000000000000000000000000001', { size: 32 })
 * // true
 */ parcelHelpers.export(exports, "hexToBool", ()=>hexToBool);
/**
 * Decodes a hex string into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextonumber
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToNumber('0x1a4')
 * // 420
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420
 */ parcelHelpers.export(exports, "hexToNumber", ()=>hexToNumber);
/**
 * Decodes a hex value into a UTF-8 string.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextostring
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns String value.
 *
 * @example
 * import { hexToString } from 'viem'
 * const data = hexToString('0x48656c6c6f20576f726c6421')
 * // 'Hello world!'
 *
 * @example
 * import { hexToString } from 'viem'
 * const data = hexToString('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *  size: 32,
 * })
 * // 'Hello world'
 */ parcelHelpers.export(exports, "hexToString", ()=>hexToString);
var _encodingJs = require("../../errors/encoding.js");
var _sizeJs = require("../data/size.js");
var _trimJs = require("../data/trim.js");
var _toBytesJs = require("./toBytes.js");
function assertSize(hexOrBytes, { size }) {
    if ((0, _sizeJs.size)(hexOrBytes) > size) throw new (0, _encodingJs.SizeOverflowError)({
        givenSize: (0, _sizeJs.size)(hexOrBytes),
        maxSize: size
    });
}
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === "string" ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === "number") return hexToNumber(hex, opts);
    if (to === "bigint") return hexToBigInt(hex, opts);
    if (to === "string") return hexToString(hex, opts);
    if (to === "boolean") return hexToBool(hex, opts);
    return (0, _toBytesJs.hexToBytes)(hex, opts);
}
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size) assertSize(hex, {
        size: opts.size
    });
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << BigInt(size) * 8n - 1n) - 1n;
    if (value <= max) return value;
    return value - BigInt(`0x${"f".padStart(size * 2, "f")}`) - 1n;
}
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, {
            size: opts.size
        });
        hex = (0, _trimJs.trim)(hex);
    }
    if ((0, _trimJs.trim)(hex) === "0x00") return false;
    if ((0, _trimJs.trim)(hex) === "0x01") return true;
    throw new (0, _encodingJs.InvalidHexBooleanError)(hex);
}
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
function hexToString(hex, opts = {}) {
    let bytes = (0, _toBytesJs.hexToBytes)(hex);
    if (opts.size) {
        assertSize(bytes, {
            size: opts.size
        });
        bytes = (0, _trimJs.trim)(bytes, {
            dir: "right"
        });
    }
    return new TextDecoder().decode(bytes);
}

},{"../../errors/encoding.js":"fTBHi","../data/size.js":"iGp06","../data/trim.js":"a7ozD","./toBytes.js":"jsem0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTBHi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IntegerOutOfRangeError", ()=>IntegerOutOfRangeError);
parcelHelpers.export(exports, "InvalidBytesBooleanError", ()=>InvalidBytesBooleanError);
parcelHelpers.export(exports, "InvalidHexBooleanError", ()=>InvalidHexBooleanError);
parcelHelpers.export(exports, "InvalidHexValueError", ()=>InvalidHexValueError);
parcelHelpers.export(exports, "SizeOverflowError", ()=>SizeOverflowError);
var _baseJs = require("./base.js");
class IntegerOutOfRangeError extends (0, _baseJs.BaseError) {
    constructor({ max, min, signed, size, value }){
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, {
            name: "IntegerOutOfRangeError"
        });
    }
}
class InvalidBytesBooleanError extends (0, _baseJs.BaseError) {
    constructor(bytes){
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: "InvalidBytesBooleanError"
        });
    }
}
class InvalidHexBooleanError extends (0, _baseJs.BaseError) {
    constructor(hex){
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, {
            name: "InvalidHexBooleanError"
        });
    }
}
class InvalidHexValueError extends (0, _baseJs.BaseError) {
    constructor(value){
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`, {
            name: "InvalidHexValueError"
        });
    }
}
class SizeOverflowError extends (0, _baseJs.BaseError) {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, {
            name: "SizeOverflowError"
        });
    }
}

},{"./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7ozD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "trim", ()=>trim);
function trim(hexOrBytes, { dir = "left" } = {}) {
    let data = typeof hexOrBytes === "string" ? hexOrBytes.replace("0x", "") : hexOrBytes;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === "left" ? i : data.length - i - 1].toString() === "0") sliceLength++;
        else break;
    }
    data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === "string") {
        if (data.length === 1 && dir === "right") data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rk4U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encodes a string, number, bigint, or ByteArray into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex
 * - Example: https://viem.sh/docs/utilities/toHex#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world')
 * // '0x48656c6c6f20776f726c6421'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex(420)
 * // '0x1a4'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world', { size: 32 })
 * // '0x48656c6c6f20776f726c64210000000000000000000000000000000000000000'
 */ parcelHelpers.export(exports, "toHex", ()=>toHex);
/**
 * Encodes a boolean into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#booltohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true)
 * // '0x1'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(false)
 * // '0x0'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true, { size: 32 })
 * // '0x0000000000000000000000000000000000000000000000000000000000000001'
 */ parcelHelpers.export(exports, "boolToHex", ()=>boolToHex);
/**
 * Encodes a bytes array into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#bytestohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]), { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */ parcelHelpers.export(exports, "bytesToHex", ()=>bytesToHex);
/**
 * Encodes a number or bigint into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#numbertohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420)
 * // '0x1a4'
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420, { size: 32 })
 * // '0x00000000000000000000000000000000000000000000000000000000000001a4'
 */ parcelHelpers.export(exports, "numberToHex", ()=>numberToHex);
/**
 * Encodes a UTF-8 string into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#stringtohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!')
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!', { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */ parcelHelpers.export(exports, "stringToHex", ()=>stringToHex);
var _encodingJs = require("../../errors/encoding.js");
var _padJs = require("../data/pad.js");
var _fromHexJs = require("./fromHex.js");
const hexes = /*#__PURE__*/ Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, "0"));
function toHex(value, opts = {}) {
    if (typeof value === "number" || typeof value === "bigint") return numberToHex(value, opts);
    if (typeof value === "string") return stringToHex(value, opts);
    if (typeof value === "boolean") return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === "number") {
        (0, _fromHexJs.assertSize)(hex, {
            size: opts.size
        });
        return (0, _padJs.pad)(hex, {
            size: opts.size
        });
    }
    return hex;
}
function bytesToHex(value, opts = {}) {
    let string = "";
    for(let i = 0; i < value.length; i++)string += hexes[value[i]];
    const hex = `0x${string}`;
    if (typeof opts.size === "number") {
        (0, _fromHexJs.assertSize)(hex, {
            size: opts.size
        });
        return (0, _padJs.pad)(hex, {
            dir: "right",
            size: opts.size
        });
    }
    return hex;
}
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value_ === "number") maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
    if (maxValue && value > maxValue || value < minValue) {
        const suffix = typeof value_ === "bigint" ? "n" : "";
        throw new (0, _encodingJs.IntegerOutOfRangeError)({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`
        });
    }
    const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
    if (size) return (0, _padJs.pad)(hex, {
        size
    });
    return hex;
}
const encoder = /*#__PURE__*/ new TextEncoder();
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
}

},{"../../errors/encoding.js":"fTBHi","../data/pad.js":"dh9br","./fromHex.js":"5gdtu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpYiL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keccak256", ()=>keccak256);
var _sha3 = require("@noble/hashes/sha3");
var _isHexJs = require("../data/isHex.js");
var _toBytesJs = require("../encoding/toBytes.js");
var _toHexJs = require("../encoding/toHex.js");
function keccak256(value, to_) {
    const to = to_ || "hex";
    const bytes = (0, _sha3.keccak_256)((0, _isHexJs.isHex)(value, {
        strict: false
    }) ? (0, _toBytesJs.toBytes)(value) : value);
    if (to === "bytes") return bytes;
    return (0, _toHexJs.toHex)(bytes);
}

},{"@noble/hashes/sha3":"cJt9C","../data/isHex.js":"bEohQ","../encoding/toBytes.js":"jsem0","../encoding/toHex.js":"9rk4U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJt9C":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = exports.keccakP = void 0;
const _assert_js_1 = require("ae71bb61dc34d578");
const _u64_js_1 = require("907ac68ff2e44fc3");
const utils_js_1 = require("b9e2908a2afbeac4");
// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [
    [],
    [],
    []
];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, _u64_js_1.split)(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, _u64_js_1.rotlBH)(h, l, s) : (0, _u64_js_1.rotlSH)(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, _u64_js_1.rotlBL)(h, l, s) : (0, _u64_js_1.rotlSL)(h, l, s);
// Same as keccakf1600, but allows to skip some rounds
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(10);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
exports.keccakP = keccakP;
class Keccak extends utils_js_1.Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0, _assert_js_1.number)(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        if (0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_js_1.u32)(this.state);
    }
    keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, _assert_js_1.exists)(this);
        const { blockLen, state } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, _assert_js_1.exists)(this, false);
        (0, _assert_js_1.bytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, _assert_js_1.number)(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, _assert_js_1.output)(out, this);
        if (this.finished) throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
exports.Keccak = Keccak;
const gen = (suffix, blockLen, outputLen)=>(0, utils_js_1.wrapConstructor)(()=>new Keccak(blockLen, suffix, outputLen));
exports.sha3_224 = gen(0x06, 144, 28);
/**
 * SHA3-256 hash function
 * @param message - that would be hashed
 */ exports.sha3_256 = gen(0x06, 136, 32);
exports.sha3_384 = gen(0x06, 104, 48);
exports.sha3_512 = gen(0x06, 72, 64);
exports.keccak_224 = gen(0x01, 144, 28);
/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */ exports.keccak_256 = gen(0x01, 136, 32);
exports.keccak_384 = gen(0x01, 104, 48);
exports.keccak_512 = gen(0x01, 72, 64);
const genShake = (suffix, blockLen, outputLen)=>(0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
exports.shake128 = genShake(0x1f, 168, 16);
exports.shake256 = genShake(0x1f, 136, 32);

},{"ae71bb61dc34d578":"dyuMO","907ac68ff2e44fc3":"69tkj","b9e2908a2afbeac4":"8eiyO"}],"dyuMO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== "boolean") throw new Error(`Expected boolean, not ${b}`);
}
exports.bool = bool;
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(hash) {
    if (typeof hash !== "function" || typeof hash.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash.outputLen);
    number(hash.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"69tkj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.add = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = exports.split = exports.fromBig = void 0;
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
exports.fromBig = fromBig;
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
exports.split = split;
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
exports.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
exports.shrSH = shrSH;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
exports.shrSL = shrSL;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
exports.rotrSH = rotrSH;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
exports.rotrSL = rotrSL;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
exports.rotrBH = rotrBH;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
exports.rotrBL = rotrBL;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
exports.rotr32H = rotr32H;
const rotr32L = (h, _l)=>h;
exports.rotr32L = rotr32L;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
exports.rotlSH = rotlSH;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
exports.rotlSL = rotlSL;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
exports.rotlBH = rotlBH;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
exports.rotlBL = rotlBL;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
exports.add = add;
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
exports.add3L = add3L;
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
exports.add3H = add3H;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
exports.add4L = add4L;
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
exports.add4H = add4H;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
exports.add5L = add5L;
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
exports.add5H = add5H;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
exports.default = u64;

},{}],"8eiyO":[function(require,module,exports) {
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated, we can just drop the import.
const crypto_1 = require("acbb3b357d7a0c6c");
const u8a = (a)=>a instanceof Uint8Array;
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
if (!exports.isLE) throw new Error("Non little-endian hardware is not supported");
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, "0"));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    if (!u8a(bytes)) throw new Error("Uint8Array expected");
    // pre-caching improves the speed 6x
    let hex = "";
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
    const len = hex.length;
    if (len % 2) throw new Error("padded hex string expected, got unpadded hex of length " + len);
    const array = new Uint8Array(len / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error("Invalid byte sequence");
        array[i] = byte;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== "string") throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
exports.utf8ToBytes = utf8ToBytes;
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === "string") data = utf8ToBytes(data);
    if (!u8a(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
exports.toBytes = toBytes;
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a)=>sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a)=>{
        if (!u8a(a)) throw new Error("Uint8Array expected");
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
exports.concatBytes = concatBytes;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== "[object Object]") throw new Error("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    throw new Error("crypto.getRandomValues must be defined");
}
exports.randomBytes = randomBytes;

},{"acbb3b357d7a0c6c":"ePRDN"}],"ePRDN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : undefined;

},{}],"d7pnx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toEventSelector", ()=>toEventSelector);
var _toSignatureHashJs = require("./toSignatureHash.js");
const toEventSelector = (0, _toSignatureHashJs.toSignatureHash);

},{"./toSignatureHash.js":"3Gefh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Gefh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns the hash (of the function/event signature) for a given event or function definition.
 */ parcelHelpers.export(exports, "toSignatureHash", ()=>toSignatureHash);
var _hashSignatureJs = require("./hashSignature.js");
var _toSignatureJs = require("./toSignature.js");
function toSignatureHash(fn) {
    return (0, _hashSignatureJs.hashSignature)((0, _toSignatureJs.toSignature)(fn));
}

},{"./hashSignature.js":"kAkdw","./toSignature.js":"1Kzll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAkdw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hashSignature", ()=>hashSignature);
var _toBytesJs = require("../encoding/toBytes.js");
var _keccak256Js = require("./keccak256.js");
const hash = (value)=>(0, _keccak256Js.keccak256)((0, _toBytesJs.toBytes)(value));
function hashSignature(sig) {
    return hash(sig);
}

},{"../encoding/toBytes.js":"jsem0","./keccak256.js":"cpYiL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kzll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toSignature", ()=>toSignature);
var _abitype = require("abitype");
var _normalizeSignatureJs = require("./normalizeSignature.js");
const toSignature = (def)=>{
    const def_ = (()=>{
        if (typeof def === "string") return def;
        return (0, _abitype.formatAbiItem)(def);
    })();
    return (0, _normalizeSignatureJs.normalizeSignature)(def_);
};

},{"abitype":"2HM8y","./normalizeSignature.js":"fAaha","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2HM8y":[function(require,module,exports) {
// biome-ignore lint/performance/noBarrelFile: <explanation>
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseError", ()=>(0, _errorsJs.BaseError));
parcelHelpers.export(exports, "narrow", ()=>(0, _narrowJs.narrow));
////////////////////////////////////////////////////////////////////////////////////////////////////
// Human-Readable
parcelHelpers.export(exports, "formatAbi", ()=>(0, _formatAbiJs.formatAbi));
parcelHelpers.export(exports, "formatAbiItem", ()=>(0, _formatAbiItemJs.formatAbiItem));
parcelHelpers.export(exports, "formatAbiParameter", ()=>(0, _formatAbiParameterJs.formatAbiParameter));
parcelHelpers.export(exports, "formatAbiParameters", ()=>(0, _formatAbiParametersJs.formatAbiParameters));
parcelHelpers.export(exports, "parseAbi", ()=>(0, _parseAbiJs.parseAbi));
parcelHelpers.export(exports, "parseAbiItem", ()=>(0, _parseAbiItemJs.parseAbiItem));
parcelHelpers.export(exports, "parseAbiParameter", ()=>(0, _parseAbiParameterJs.parseAbiParameter));
parcelHelpers.export(exports, "parseAbiParameters", ()=>(0, _parseAbiParametersJs.parseAbiParameters));
parcelHelpers.export(exports, "UnknownTypeError", ()=>(0, _abiItemJs.UnknownTypeError));
parcelHelpers.export(exports, "InvalidAbiItemError", ()=>(0, _abiItemJs.InvalidAbiItemError));
parcelHelpers.export(exports, "UnknownSolidityTypeError", ()=>(0, _abiItemJs.UnknownSolidityTypeError));
parcelHelpers.export(exports, "InvalidAbiTypeParameterError", ()=>(0, _abiParameterJs.InvalidAbiTypeParameterError));
parcelHelpers.export(exports, "InvalidFunctionModifierError", ()=>(0, _abiParameterJs.InvalidFunctionModifierError));
parcelHelpers.export(exports, "InvalidModifierError", ()=>(0, _abiParameterJs.InvalidModifierError));
parcelHelpers.export(exports, "SolidityProtectedKeywordError", ()=>(0, _abiParameterJs.SolidityProtectedKeywordError));
parcelHelpers.export(exports, "InvalidParameterError", ()=>(0, _abiParameterJs.InvalidParameterError));
parcelHelpers.export(exports, "InvalidAbiParametersError", ()=>(0, _abiParameterJs.InvalidAbiParametersError));
parcelHelpers.export(exports, "InvalidAbiParameterError", ()=>(0, _abiParameterJs.InvalidAbiParameterError));
parcelHelpers.export(exports, "InvalidStructSignatureError", ()=>(0, _signatureJs.InvalidStructSignatureError));
parcelHelpers.export(exports, "InvalidSignatureError", ()=>(0, _signatureJs.InvalidSignatureError));
parcelHelpers.export(exports, "UnknownSignatureError", ()=>(0, _signatureJs.UnknownSignatureError));
parcelHelpers.export(exports, "InvalidParenthesisError", ()=>(0, _splitParametersJs.InvalidParenthesisError));
parcelHelpers.export(exports, "CircularReferenceError", ()=>(0, _structJs.CircularReferenceError));
var _errorsJs = require("../errors.js");
var _narrowJs = require("../narrow.js");
var _formatAbiJs = require("../human-readable/formatAbi.js");
var _formatAbiItemJs = require("../human-readable/formatAbiItem.js");
var _formatAbiParameterJs = require("../human-readable/formatAbiParameter.js");
var _formatAbiParametersJs = require("../human-readable/formatAbiParameters.js");
var _parseAbiJs = require("../human-readable/parseAbi.js");
var _parseAbiItemJs = require("../human-readable/parseAbiItem.js");
var _parseAbiParameterJs = require("../human-readable/parseAbiParameter.js");
var _parseAbiParametersJs = require("../human-readable/parseAbiParameters.js");
var _abiItemJs = require("../human-readable/errors/abiItem.js");
var _abiParameterJs = require("../human-readable/errors/abiParameter.js");
var _signatureJs = require("../human-readable/errors/signature.js");
var _splitParametersJs = require("../human-readable/errors/splitParameters.js");
var _structJs = require("../human-readable/errors/struct.js");

},{"../errors.js":false,"../narrow.js":false,"../human-readable/formatAbi.js":false,"../human-readable/formatAbiItem.js":"eb1PN","../human-readable/formatAbiParameter.js":false,"../human-readable/formatAbiParameters.js":false,"../human-readable/parseAbi.js":"6qREY","../human-readable/parseAbiItem.js":false,"../human-readable/parseAbiParameter.js":false,"../human-readable/parseAbiParameters.js":false,"../human-readable/errors/abiItem.js":false,"../human-readable/errors/abiParameter.js":false,"../human-readable/errors/signature.js":false,"../human-readable/errors/splitParameters.js":false,"../human-readable/errors/struct.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64s4Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseError", ()=>BaseError);
var _versionJs = require("./version.js");
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        const message = [
            shortMessage || "An error occurred.",
            "",
            ...args.metaMessages ? [
                ...args.metaMessages,
                ""
            ] : [],
            ...docsPath ? [
                `Docs: https://abitype.dev${docsPath}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: abitype@${(0, _versionJs.version)}`
        ].join("\n");
        super(message);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "AbiTypeError"
        });
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
}

},{"./version.js":"l00nD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l00nD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "1.0.5";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eb1PN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Formats ABI item (e.g. error, event, function) into human-readable ABI item
 *
 * @param abiItem - ABI item
 * @returns Human-readable ABI item
 */ parcelHelpers.export(exports, "formatAbiItem", ()=>formatAbiItem);
var _formatAbiParametersJs = require("./formatAbiParameters.js");
function formatAbiItem(abiItem) {
    if (abiItem.type === "function") return `function ${abiItem.name}(${(0, _formatAbiParametersJs.formatAbiParameters)(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== "nonpayable" ? ` ${abiItem.stateMutability}` : ""}${abiItem.outputs.length ? ` returns (${(0, _formatAbiParametersJs.formatAbiParameters)(abiItem.outputs)})` : ""}`;
    if (abiItem.type === "event") return `event ${abiItem.name}(${(0, _formatAbiParametersJs.formatAbiParameters)(abiItem.inputs)})`;
    if (abiItem.type === "error") return `error ${abiItem.name}(${(0, _formatAbiParametersJs.formatAbiParameters)(abiItem.inputs)})`;
    if (abiItem.type === "constructor") return `constructor(${(0, _formatAbiParametersJs.formatAbiParameters)(abiItem.inputs)})${abiItem.stateMutability === "payable" ? " payable" : ""}`;
    if (abiItem.type === "fallback") return "fallback()";
    return "receive() external payable";
}

},{"./formatAbiParameters.js":"8LEQy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LEQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Formats {@link AbiParameter}s to human-readable ABI parameters.
 *
 * @param abiParameters - ABI parameters
 * @returns Human-readable ABI parameters
 *
 * @example
 * const result = formatAbiParameters([
 *   //  ^? const result: 'address from, uint256 tokenId'
 *   { type: 'address', name: 'from' },
 *   { type: 'uint256', name: 'tokenId' },
 * ])
 */ parcelHelpers.export(exports, "formatAbiParameters", ()=>formatAbiParameters);
var _formatAbiParameterJs = require("./formatAbiParameter.js");
function formatAbiParameters(abiParameters) {
    let params = "";
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, _formatAbiParameterJs.formatAbiParameter)(abiParameter);
        if (i !== length - 1) params += ", ";
    }
    return params;
}

},{"./formatAbiParameter.js":"lBKtr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBKtr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Formats {@link AbiParameter} to human-readable ABI parameter.
 *
 * @param abiParameter - ABI parameter
 * @returns Human-readable ABI parameter
 *
 * @example
 * const result = formatAbiParameter({ type: 'address', name: 'from' })
 * //    ^? const result: 'address from'
 */ parcelHelpers.export(exports, "formatAbiParameter", ()=>formatAbiParameter);
var _regexJs = require("../regex.js");
// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && "components" in abiParameter) {
        type = "(";
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ", ";
        }
        const result = (0, _regexJs.execTyped)(tupleRegex, abiParameter.type);
        type += `)${result?.array ?? ""}`;
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ("indexed" in abiParameter && abiParameter.indexed) type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name) return `${type} ${abiParameter.name}`;
    return type;
}

},{"../regex.js":"jZaIo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZaIo":[function(require,module,exports) {
// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "execTyped", ()=>execTyped);
parcelHelpers.export(exports, "bytesRegex", ()=>bytesRegex);
parcelHelpers.export(exports, "integerRegex", ()=>integerRegex);
parcelHelpers.export(exports, "isTupleRegex", ()=>isTupleRegex);
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6qREY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parses human-readable ABI into JSON {@link Abi}
 *
 * @param signatures - Human-Readable ABI
 * @returns Parsed {@link Abi}
 *
 * @example
 * const abi = parseAbi([
 *   //  ^? const abi: readonly [{ name: "balanceOf"; type: "function"; stateMutability:...
 *   'function balanceOf(address owner) view returns (uint256)',
 *   'event Transfer(address indexed from, address indexed to, uint256 amount)',
 * ])
 */ parcelHelpers.export(exports, "parseAbi", ()=>parseAbi);
var _signaturesJs = require("./runtime/signatures.js");
var _structsJs = require("./runtime/structs.js");
var _utilsJs = require("./runtime/utils.js");
function parseAbi(signatures) {
    const structs = (0, _structsJs.parseStructs)(signatures);
    const abi = [];
    const length = signatures.length;
    for(let i = 0; i < length; i++){
        const signature = signatures[i];
        if ((0, _signaturesJs.isStructSignature)(signature)) continue;
        abi.push((0, _utilsJs.parseSignature)(signature, structs));
    }
    return abi;
}

},{"./runtime/signatures.js":"lxped","./runtime/structs.js":"9Rix5","./runtime/utils.js":"6DwtC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxped":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isErrorSignature", ()=>isErrorSignature);
parcelHelpers.export(exports, "execErrorSignature", ()=>execErrorSignature);
parcelHelpers.export(exports, "isEventSignature", ()=>isEventSignature);
parcelHelpers.export(exports, "execEventSignature", ()=>execEventSignature);
parcelHelpers.export(exports, "isFunctionSignature", ()=>isFunctionSignature);
parcelHelpers.export(exports, "execFunctionSignature", ()=>execFunctionSignature);
parcelHelpers.export(exports, "isStructSignature", ()=>isStructSignature);
parcelHelpers.export(exports, "execStructSignature", ()=>execStructSignature);
parcelHelpers.export(exports, "isConstructorSignature", ()=>isConstructorSignature);
parcelHelpers.export(exports, "execConstructorSignature", ()=>execConstructorSignature);
parcelHelpers.export(exports, "isFallbackSignature", ()=>isFallbackSignature);
parcelHelpers.export(exports, "isReceiveSignature", ()=>isReceiveSignature);
parcelHelpers.export(exports, "modifiers", ()=>modifiers);
parcelHelpers.export(exports, "eventModifiers", ()=>eventModifiers);
parcelHelpers.export(exports, "functionModifiers", ()=>functionModifiers);
var _regexJs = require("../../regex.js");
// https://regexr.com/7gmok
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0, _regexJs.execTyped)(errorSignatureRegex, signature);
}
// https://regexr.com/7gmoq
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0, _regexJs.execTyped)(eventSignatureRegex, signature);
}
// https://regexr.com/7gmot
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0, _regexJs.execTyped)(functionSignatureRegex, signature);
}
// https://regexr.com/7gmp3
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0, _regexJs.execTyped)(structSignatureRegex, signature);
}
// https://regexr.com/78u01
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0, _regexJs.execTyped)(constructorSignatureRegex, signature);
}
// https://regexr.com/7srtn
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
// https://regexr.com/78u1k
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
const modifiers = new Set([
    "memory",
    "indexed",
    "storage",
    "calldata"
]);
const eventModifiers = new Set([
    "indexed"
]);
const functionModifiers = new Set([
    "calldata",
    "memory",
    "storage"
]);

},{"../../regex.js":"jZaIo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Rix5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseStructs", ()=>parseStructs);
var _regexJs = require("../../regex.js");
var _abiItemJs = require("../errors/abiItem.js");
var _abiParameterJs = require("../errors/abiParameter.js");
var _signatureJs = require("../errors/signature.js");
var _structJs = require("../errors/struct.js");
var _signaturesJs = require("./signatures.js");
var _utilsJs = require("./utils.js");
function parseStructs(signatures) {
    // Create "shallow" version of each struct (and filter out non-structs or invalid structs)
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for(let i = 0; i < signaturesLength; i++){
        const signature = signatures[i];
        if (!(0, _signaturesJs.isStructSignature)(signature)) continue;
        const match = (0, _signaturesJs.execStructSignature)(signature);
        if (!match) throw new (0, _signatureJs.InvalidSignatureError)({
            signature,
            type: "struct"
        });
        const properties = match.properties.split(";");
        const components = [];
        const propertiesLength = properties.length;
        for(let k = 0; k < propertiesLength; k++){
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed) continue;
            const abiParameter = (0, _utilsJs.parseAbiParameter)(trimmed, {
                type: "struct"
            });
            components.push(abiParameter);
        }
        if (!components.length) throw new (0, _signatureJs.InvalidStructSignatureError)({
            signature
        });
        shallowStructs[match.name] = components;
    }
    // Resolve nested structs inside each parameter
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for(let i = 0; i < entriesLength; i++){
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters, structs, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        const isTuple = (0, _regexJs.isTupleRegex).test(abiParameter.type);
        if (isTuple) components.push(abiParameter);
        else {
            const match = (0, _regexJs.execTyped)(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type) throw new (0, _abiParameterJs.InvalidAbiTypeParameterError)({
                abiParameter
            });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type)) throw new (0, _structJs.CircularReferenceError)({
                    type
                });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ""}`,
                    components: resolveStructs(structs[type] ?? [], structs, new Set([
                        ...ancestors,
                        type
                    ]))
                });
            } else {
                if ((0, _utilsJs.isSolidityType)(type)) components.push(abiParameter);
                else throw new (0, _abiItemJs.UnknownTypeError)({
                    type
                });
            }
        }
    }
    return components;
}

},{"../../regex.js":"jZaIo","../errors/abiItem.js":"9ghcs","../errors/abiParameter.js":"816rM","../errors/signature.js":"1QNQj","../errors/struct.js":"iBn82","./signatures.js":"lxped","./utils.js":"6DwtC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ghcs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidAbiItemError", ()=>InvalidAbiItemError);
parcelHelpers.export(exports, "UnknownTypeError", ()=>UnknownTypeError);
parcelHelpers.export(exports, "UnknownSolidityTypeError", ()=>UnknownSolidityTypeError);
var _errorsJs = require("../../errors.js");
class InvalidAbiItemError extends (0, _errorsJs.BaseError) {
    constructor({ signature }){
        super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: "/api/human#parseabiitem-1"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidAbiItemError"
        });
    }
}
class UnknownTypeError extends (0, _errorsJs.BaseError) {
    constructor({ type }){
        super("Unknown type.", {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "UnknownTypeError"
        });
    }
}
class UnknownSolidityTypeError extends (0, _errorsJs.BaseError) {
    constructor({ type }){
        super("Unknown type.", {
            metaMessages: [
                `Type "${type}" is not a valid ABI type.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "UnknownSolidityTypeError"
        });
    }
}

},{"../../errors.js":"64s4Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"816rM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidAbiParameterError", ()=>InvalidAbiParameterError);
parcelHelpers.export(exports, "InvalidAbiParametersError", ()=>InvalidAbiParametersError);
parcelHelpers.export(exports, "InvalidParameterError", ()=>InvalidParameterError);
parcelHelpers.export(exports, "SolidityProtectedKeywordError", ()=>SolidityProtectedKeywordError);
parcelHelpers.export(exports, "InvalidModifierError", ()=>InvalidModifierError);
parcelHelpers.export(exports, "InvalidFunctionModifierError", ()=>InvalidFunctionModifierError);
parcelHelpers.export(exports, "InvalidAbiTypeParameterError", ()=>InvalidAbiTypeParameterError);
var _errorsJs = require("../../errors.js");
class InvalidAbiParameterError extends (0, _errorsJs.BaseError) {
    constructor({ param }){
        super("Failed to parse ABI parameter.", {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: "/api/human#parseabiparameter-1"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidAbiParameterError"
        });
    }
}
class InvalidAbiParametersError extends (0, _errorsJs.BaseError) {
    constructor({ params }){
        super("Failed to parse ABI parameters.", {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: "/api/human#parseabiparameters-1"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidAbiParametersError"
        });
    }
}
class InvalidParameterError extends (0, _errorsJs.BaseError) {
    constructor({ param }){
        super("Invalid ABI parameter.", {
            details: param
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidParameterError"
        });
    }
}
class SolidityProtectedKeywordError extends (0, _errorsJs.BaseError) {
    constructor({ param, name }){
        super("Invalid ABI parameter.", {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "SolidityProtectedKeywordError"
        });
    }
}
class InvalidModifierError extends (0, _errorsJs.BaseError) {
    constructor({ param, type, modifier }){
        super("Invalid ABI parameter.", {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ""}.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidModifierError"
        });
    }
}
class InvalidFunctionModifierError extends (0, _errorsJs.BaseError) {
    constructor({ param, type, modifier }){
        super("Invalid ABI parameter.", {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ""}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidFunctionModifierError"
        });
    }
}
class InvalidAbiTypeParameterError extends (0, _errorsJs.BaseError) {
    constructor({ abiParameter }){
        super("Invalid ABI parameter.", {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: [
                "ABI parameter type is invalid."
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidAbiTypeParameterError"
        });
    }
}

},{"../../errors.js":"64s4Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1QNQj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidSignatureError", ()=>InvalidSignatureError);
parcelHelpers.export(exports, "UnknownSignatureError", ()=>UnknownSignatureError);
parcelHelpers.export(exports, "InvalidStructSignatureError", ()=>InvalidStructSignatureError);
var _errorsJs = require("../../errors.js");
class InvalidSignatureError extends (0, _errorsJs.BaseError) {
    constructor({ signature, type }){
        super(`Invalid ${type} signature.`, {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidSignatureError"
        });
    }
}
class UnknownSignatureError extends (0, _errorsJs.BaseError) {
    constructor({ signature }){
        super("Unknown signature.", {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "UnknownSignatureError"
        });
    }
}
class InvalidStructSignatureError extends (0, _errorsJs.BaseError) {
    constructor({ signature }){
        super("Invalid struct signature.", {
            details: signature,
            metaMessages: [
                "No properties exist."
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidStructSignatureError"
        });
    }
}

},{"../../errors.js":"64s4Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBn82":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircularReferenceError", ()=>CircularReferenceError);
var _errorsJs = require("../../errors.js");
class CircularReferenceError extends (0, _errorsJs.BaseError) {
    constructor({ type }){
        super("Circular reference detected.", {
            metaMessages: [
                `Struct "${type}" is a circular reference.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "CircularReferenceError"
        });
    }
}

},{"../../errors.js":"64s4Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DwtC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseSignature", ()=>parseSignature);
parcelHelpers.export(exports, "parseAbiParameter", ()=>parseAbiParameter);
// s/o latika for this
parcelHelpers.export(exports, "splitParameters", ()=>splitParameters);
parcelHelpers.export(exports, "isSolidityType", ()=>isSolidityType);
/** @internal */ parcelHelpers.export(exports, "isSolidityKeyword", ()=>isSolidityKeyword);
/** @internal */ parcelHelpers.export(exports, "isValidDataLocation", ()=>isValidDataLocation);
var _regexJs = require("../../regex.js");
var _abiItemJs = require("../errors/abiItem.js");
var _abiParameterJs = require("../errors/abiParameter.js");
var _signatureJs = require("../errors/signature.js");
var _splitParametersJs = require("../errors/splitParameters.js");
var _cacheJs = require("./cache.js");
var _signaturesJs = require("./signatures.js");
function parseSignature(signature, structs = {}) {
    if ((0, _signaturesJs.isFunctionSignature)(signature)) {
        const match = (0, _signaturesJs.execFunctionSignature)(signature);
        if (!match) throw new (0, _signatureJs.InvalidSignatureError)({
            signature,
            type: "function"
        });
        const inputParams = splitParameters(match.parameters);
        const inputs = [];
        const inputLength = inputParams.length;
        for(let i = 0; i < inputLength; i++)inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: (0, _signaturesJs.functionModifiers),
            structs,
            type: "function"
        }));
        const outputs = [];
        if (match.returns) {
            const outputParams = splitParameters(match.returns);
            const outputLength = outputParams.length;
            for(let i = 0; i < outputLength; i++)outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: (0, _signaturesJs.functionModifiers),
                structs,
                type: "function"
            }));
        }
        return {
            name: match.name,
            type: "function",
            stateMutability: match.stateMutability ?? "nonpayable",
            inputs,
            outputs
        };
    }
    if ((0, _signaturesJs.isEventSignature)(signature)) {
        const match = (0, _signaturesJs.execEventSignature)(signature);
        if (!match) throw new (0, _signatureJs.InvalidSignatureError)({
            signature,
            type: "event"
        });
        const params = splitParameters(match.parameters);
        const abiParameters = [];
        const length = params.length;
        for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
            modifiers: (0, _signaturesJs.eventModifiers),
            structs,
            type: "event"
        }));
        return {
            name: match.name,
            type: "event",
            inputs: abiParameters
        };
    }
    if ((0, _signaturesJs.isErrorSignature)(signature)) {
        const match = (0, _signaturesJs.execErrorSignature)(signature);
        if (!match) throw new (0, _signatureJs.InvalidSignatureError)({
            signature,
            type: "error"
        });
        const params = splitParameters(match.parameters);
        const abiParameters = [];
        const length = params.length;
        for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
            structs,
            type: "error"
        }));
        return {
            name: match.name,
            type: "error",
            inputs: abiParameters
        };
    }
    if ((0, _signaturesJs.isConstructorSignature)(signature)) {
        const match = (0, _signaturesJs.execConstructorSignature)(signature);
        if (!match) throw new (0, _signatureJs.InvalidSignatureError)({
            signature,
            type: "constructor"
        });
        const params = splitParameters(match.parameters);
        const abiParameters = [];
        const length = params.length;
        for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
            structs,
            type: "constructor"
        }));
        return {
            type: "constructor",
            stateMutability: match.stateMutability ?? "nonpayable",
            inputs: abiParameters
        };
    }
    if ((0, _signaturesJs.isFallbackSignature)(signature)) return {
        type: "fallback"
    };
    if ((0, _signaturesJs.isReceiveSignature)(signature)) return {
        type: "receive",
        stateMutability: "payable"
    };
    throw new (0, _signatureJs.UnknownSignatureError)({
        signature
    });
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    // optional namespace cache by `type`
    const parameterCacheKey = (0, _cacheJs.getParameterCacheKey)(param, options?.type);
    if ((0, _cacheJs.parameterCache).has(parameterCacheKey)) return (0, _cacheJs.parameterCache).get(parameterCacheKey);
    const isTuple = (0, _regexJs.isTupleRegex).test(param);
    const match = (0, _regexJs.execTyped)(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match) throw new (0, _abiParameterJs.InvalidParameterError)({
        param
    });
    if (match.name && isSolidityKeyword(match.name)) throw new (0, _abiParameterJs.SolidityProtectedKeywordError)({
        param,
        name: match.name
    });
    const name = match.name ? {
        name: match.name
    } : {};
    const indexed = match.modifier === "indexed" ? {
        indexed: true
    } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = "tuple";
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for(let i = 0; i < length; i++)// remove `modifiers` from `options` to prevent from being added to tuple components
        components_.push(parseAbiParameter(params[i], {
            structs
        }));
        components = {
            components: components_
        };
    } else if (match.type in structs) {
        type = "tuple";
        components = {
            components: structs[match.type]
        };
    } else if (dynamicIntegerRegex.test(match.type)) type = `${match.type}256`;
    else {
        type = match.type;
        if (!(options?.type === "struct") && !isSolidityType(type)) throw new (0, _abiItemJs.UnknownSolidityTypeError)({
            type
        });
    }
    if (match.modifier) {
        // Check if modifier exists, but is not allowed (e.g. `indexed` in `functionModifiers`)
        if (!options?.modifiers?.has?.(match.modifier)) throw new (0, _abiParameterJs.InvalidModifierError)({
            param,
            type: options?.type,
            modifier: match.modifier
        });
        // Check if resolved `type` is valid if there is a function modifier
        if ((0, _signaturesJs.functionModifiers).has(match.modifier) && !isValidDataLocation(type, !!match.array)) throw new (0, _abiParameterJs.InvalidFunctionModifierError)({
            param,
            type: options?.type,
            modifier: match.modifier
        });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ""}`,
        ...name,
        ...indexed,
        ...components
    };
    (0, _cacheJs.parameterCache).set(parameterCacheKey, abiParameter);
    return abiParameter;
}
function splitParameters(params, result = [], current = "", depth = 0) {
    const length = params.trim().length;
    // biome-ignore lint/correctness/noUnreachable: recursive
    for(let i = 0; i < length; i++){
        const char = params[i];
        const tail = params.slice(i + 1);
        switch(char){
            case ",":
                return depth === 0 ? splitParameters(tail, [
                    ...result,
                    current.trim()
                ]) : splitParameters(tail, result, `${current}${char}`, depth);
            case "(":
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ")":
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === "") return result;
    if (depth !== 0) throw new (0, _splitParametersJs.InvalidParenthesisError)({
        current,
        depth
    });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return type === "address" || type === "bool" || type === "function" || type === "string" || (0, _regexJs.bytesRegex).test(type) || (0, _regexJs.integerRegex).test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
    return name === "address" || name === "bool" || name === "function" || name === "string" || name === "tuple" || (0, _regexJs.bytesRegex).test(name) || (0, _regexJs.integerRegex).test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray) {
    return isArray || type === "bytes" || type === "string" || type === "tuple";
}

},{"../../regex.js":"jZaIo","../errors/abiItem.js":"9ghcs","../errors/abiParameter.js":"816rM","../errors/signature.js":"1QNQj","../errors/splitParameters.js":"6BHyK","./cache.js":"kt9Sx","./signatures.js":"lxped","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BHyK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidParenthesisError", ()=>InvalidParenthesisError);
var _errorsJs = require("../../errors.js");
class InvalidParenthesisError extends (0, _errorsJs.BaseError) {
    constructor({ current, depth }){
        super("Unbalanced parentheses.", {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? "opening" : "closing"} parentheses.`
            ],
            details: `Depth "${depth}"`
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidParenthesisError"
        });
    }
}

},{"../../errors.js":"64s4Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kt9Sx":[function(require,module,exports) {
/**
 * Gets {@link parameterCache} cache key namespaced by {@link type}. This prevents parameters from being accessible to types that don't allow them (e.g. `string indexed foo` not allowed outside of `type: 'event'`).
 * @param param ABI parameter string
 * @param type ABI parameter type
 * @returns Cache key for {@link parameterCache}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getParameterCacheKey", ()=>getParameterCacheKey);
parcelHelpers.export(exports, "parameterCache", ()=>parameterCache);
function getParameterCacheKey(param, type) {
    if (type) return `${type}:${param}`;
    return param;
}
const parameterCache = new Map([
    // Unnamed
    [
        "address",
        {
            type: "address"
        }
    ],
    [
        "bool",
        {
            type: "bool"
        }
    ],
    [
        "bytes",
        {
            type: "bytes"
        }
    ],
    [
        "bytes32",
        {
            type: "bytes32"
        }
    ],
    [
        "int",
        {
            type: "int256"
        }
    ],
    [
        "int256",
        {
            type: "int256"
        }
    ],
    [
        "string",
        {
            type: "string"
        }
    ],
    [
        "uint",
        {
            type: "uint256"
        }
    ],
    [
        "uint8",
        {
            type: "uint8"
        }
    ],
    [
        "uint16",
        {
            type: "uint16"
        }
    ],
    [
        "uint24",
        {
            type: "uint24"
        }
    ],
    [
        "uint32",
        {
            type: "uint32"
        }
    ],
    [
        "uint64",
        {
            type: "uint64"
        }
    ],
    [
        "uint96",
        {
            type: "uint96"
        }
    ],
    [
        "uint112",
        {
            type: "uint112"
        }
    ],
    [
        "uint160",
        {
            type: "uint160"
        }
    ],
    [
        "uint192",
        {
            type: "uint192"
        }
    ],
    [
        "uint256",
        {
            type: "uint256"
        }
    ],
    // Named
    [
        "address owner",
        {
            type: "address",
            name: "owner"
        }
    ],
    [
        "address to",
        {
            type: "address",
            name: "to"
        }
    ],
    [
        "bool approved",
        {
            type: "bool",
            name: "approved"
        }
    ],
    [
        "bytes _data",
        {
            type: "bytes",
            name: "_data"
        }
    ],
    [
        "bytes data",
        {
            type: "bytes",
            name: "data"
        }
    ],
    [
        "bytes signature",
        {
            type: "bytes",
            name: "signature"
        }
    ],
    [
        "bytes32 hash",
        {
            type: "bytes32",
            name: "hash"
        }
    ],
    [
        "bytes32 r",
        {
            type: "bytes32",
            name: "r"
        }
    ],
    [
        "bytes32 root",
        {
            type: "bytes32",
            name: "root"
        }
    ],
    [
        "bytes32 s",
        {
            type: "bytes32",
            name: "s"
        }
    ],
    [
        "string name",
        {
            type: "string",
            name: "name"
        }
    ],
    [
        "string symbol",
        {
            type: "string",
            name: "symbol"
        }
    ],
    [
        "string tokenURI",
        {
            type: "string",
            name: "tokenURI"
        }
    ],
    [
        "uint tokenId",
        {
            type: "uint256",
            name: "tokenId"
        }
    ],
    [
        "uint8 v",
        {
            type: "uint8",
            name: "v"
        }
    ],
    [
        "uint256 balance",
        {
            type: "uint256",
            name: "balance"
        }
    ],
    [
        "uint256 tokenId",
        {
            type: "uint256",
            name: "tokenId"
        }
    ],
    [
        "uint256 value",
        {
            type: "uint256",
            name: "value"
        }
    ],
    // Indexed
    [
        "event:address indexed from",
        {
            type: "address",
            name: "from",
            indexed: true
        }
    ],
    [
        "event:address indexed to",
        {
            type: "address",
            name: "to",
            indexed: true
        }
    ],
    [
        "event:uint indexed tokenId",
        {
            type: "uint256",
            name: "tokenId",
            indexed: true
        }
    ],
    [
        "event:uint256 indexed tokenId",
        {
            type: "uint256",
            name: "tokenId",
            indexed: true
        }
    ]
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAaha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeSignature", ()=>normalizeSignature);
var _baseJs = require("../../errors/base.js");
function normalizeSignature(signature) {
    let active = true;
    let current = "";
    let level = 0;
    let result = "";
    let valid = false;
    for(let i = 0; i < signature.length; i++){
        const char = signature[i];
        // If the character is a separator, we want to reactivate.
        if ([
            "(",
            ")",
            ","
        ].includes(char)) active = true;
        // If the character is a "level" token, we want to increment/decrement.
        if (char === "(") level++;
        if (char === ")") level--;
        // If we aren't active, we don't want to mutate the result.
        if (!active) continue;
        // If level === 0, we are at the definition level.
        if (level === 0) {
            if (char === " " && [
                "event",
                "function",
                ""
            ].includes(result)) result = "";
            else {
                result += char;
                // If we are at the end of the definition, we must be finished.
                if (char === ")") {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        // Ignore spaces
        if (char === " ") {
            // If the previous character is a separator, and the current section isn't empty, we want to deactivate.
            if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
                current = "";
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid) throw new (0, _baseJs.BaseError)("Unable to normalize signature.");
    return result;
}

},{"../../errors/base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZBjv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toFunctionSelector", ()=>toFunctionSelector);
var _sliceJs = require("../data/slice.js");
var _toSignatureHashJs = require("./toSignatureHash.js");
const toFunctionSelector = (fn)=>(0, _sliceJs.slice)((0, _toSignatureHashJs.toSignatureHash)(fn), 0, 4);

},{"../data/slice.js":"bOruf","./toSignatureHash.js":"3Gefh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOruf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @description Returns a section of the hex or byte array given a start/end bytes offset.
 *
 * @param value The hex or byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */ parcelHelpers.export(exports, "slice", ()=>slice);
/**
 * @description Returns a section of the byte array given a start/end bytes offset.
 *
 * @param value The byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */ parcelHelpers.export(exports, "sliceBytes", ()=>sliceBytes);
/**
 * @description Returns a section of the hex value given a start/end bytes offset.
 *
 * @param value The hex value to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */ parcelHelpers.export(exports, "sliceHex", ()=>sliceHex);
var _dataJs = require("../../errors/data.js");
var _isHexJs = require("./isHex.js");
var _sizeJs = require("./size.js");
function slice(value, start, end, { strict } = {}) {
    if ((0, _isHexJs.isHex)(value, {
        strict: false
    })) return sliceHex(value, start, end, {
        strict
    });
    return sliceBytes(value, start, end, {
        strict
    });
}
function assertStartOffset(value, start) {
    if (typeof start === "number" && start > 0 && start > (0, _sizeJs.size)(value) - 1) throw new (0, _dataJs.SliceOffsetOutOfBoundsError)({
        offset: start,
        position: "start",
        size: (0, _sizeJs.size)(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === "number" && typeof end === "number" && (0, _sizeJs.size)(value) !== end - start) throw new (0, _dataJs.SliceOffsetOutOfBoundsError)({
        offset: end,
        position: "end",
        size: (0, _sizeJs.size)(value)
    });
}
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict) assertEndOffset(value, start, end);
    return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_.replace("0x", "").slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict) assertEndOffset(value, start, end);
    return value;
}

},{"../../errors/data.js":"lKIWZ","./isHex.js":"bEohQ","./size.js":"iGp06","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ji1Pk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @description Encodes a list of primitive values into an ABI-encoded hex value.
 *
 * - Docs: https://viem.sh/docs/abi/encodeAbiParameters#encodeabiparameters
 *
 *   Generates ABI encoded data using the [ABI specification](https://docs.soliditylang.org/en/latest/abi-spec), given a set of ABI parameters (inputs/outputs) and their corresponding values.
 *
 * @param params - a set of ABI Parameters (params), that can be in the shape of the inputs or outputs attribute of an ABI Item.
 * @param values - a set of values (values) that correspond to the given params.
 * @example
 * ```typescript
 * import { encodeAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   [
 *     { name: 'x', type: 'string' },
 *     { name: 'y', type: 'uint' },
 *     { name: 'z', type: 'bool' }
 *   ],
 *   ['wagmi', 420n, true]
 * )
 * ```
 *
 * You can also pass in Human Readable parameters with the parseAbiParameters utility.
 *
 * @example
 * ```typescript
 * import { encodeAbiParameters, parseAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   parseAbiParameters('string x, uint y, bool z'),
 *   ['wagmi', 420n, true]
 * )
 * ```
 */ parcelHelpers.export(exports, "encodeAbiParameters", ()=>encodeAbiParameters);
parcelHelpers.export(exports, "getArrayComponents", ()=>getArrayComponents);
var _abiJs = require("../../errors/abi.js");
var _addressJs = require("../../errors/address.js");
var _baseJs = require("../../errors/base.js");
var _isAddressJs = require("../address/isAddress.js");
var _concatJs = require("../data/concat.js");
var _padJs = require("../data/pad.js");
var _sizeJs = require("../data/size.js");
var _sliceJs = require("../data/slice.js");
var _toHexJs = require("../encoding/toHex.js");
function encodeAbiParameters(params, values) {
    if (params.length !== values.length) throw new (0, _abiJs.AbiEncodingLengthMismatchError)({
        expectedLength: params.length,
        givenLength: values.length
    });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParams = prepareParams({
        params: params,
        values: values
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0) return "0x";
    return data;
}
function prepareParams({ params, values }) {
    const preparedParams = [];
    for(let i = 0; i < params.length; i++)preparedParams.push(prepareParam({
        param: params[i],
        value: values[i]
    }));
    return preparedParams;
}
function prepareParam({ param, value }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            length,
            param: {
                ...param,
                type
            }
        });
    }
    if (param.type === "tuple") return encodeTuple(value, {
        param: param
    });
    if (param.type === "address") return encodeAddress(value);
    if (param.type === "bool") return encodeBool(value);
    if (param.type.startsWith("uint") || param.type.startsWith("int")) {
        const signed = param.type.startsWith("int");
        return encodeNumber(value, {
            signed
        });
    }
    if (param.type.startsWith("bytes")) return encodeBytes(value, {
        param
    });
    if (param.type === "string") return encodeString(value);
    throw new (0, _abiJs.InvalidAbiEncodingTypeError)(param.type, {
        docsPath: "/docs/contract/encodeAbiParameters"
    });
}
function encodeParams(preparedParams) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) staticSize += 32;
        else staticSize += (0, _sizeJs.size)(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0, _toHexJs.numberToHex)(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParams.push(encoded);
            dynamicSize += (0, _sizeJs.size)(encoded);
        } else staticParams.push(encoded);
    }
    // 3. Concatenate static and dynamic parts.
    return (0, _concatJs.concat)([
        ...staticParams,
        ...dynamicParams
    ]);
}
function encodeAddress(value) {
    if (!(0, _isAddressJs.isAddress)(value)) throw new (0, _addressJs.InvalidAddressError)({
        address: value
    });
    return {
        dynamic: false,
        encoded: (0, _padJs.padHex)(value.toLowerCase())
    };
}
function encodeArray(value, { length, param }) {
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new (0, _abiJs.InvalidArrayError)(value);
    if (!dynamic && value.length !== length) throw new (0, _abiJs.AbiEncodingArrayLengthMismatchError)({
        expectedLength: length,
        givenLength: value.length,
        type: `${param.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParams = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParam({
            param,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0, _toHexJs.numberToHex)(preparedParams.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0, _concatJs.concat)([
                    length,
                    data
                ]) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: (0, _concatJs.concat)(preparedParams.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split("bytes");
    const bytesSize = (0, _sizeJs.size)(value);
    if (!paramSize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0) value_ = (0, _padJs.padHex)(value_, {
            dir: "right",
            size: Math.ceil((value.length - 2) / 2 / 32) * 32
        });
        return {
            dynamic: true,
            encoded: (0, _concatJs.concat)([
                (0, _padJs.padHex)((0, _toHexJs.numberToHex)(bytesSize, {
                    size: 32
                })),
                value_
            ])
        };
    }
    if (bytesSize !== Number.parseInt(paramSize)) throw new (0, _abiJs.AbiEncodingBytesSizeMismatchError)({
        expectedSize: Number.parseInt(paramSize),
        value
    });
    return {
        dynamic: false,
        encoded: (0, _padJs.padHex)(value, {
            dir: "right"
        })
    };
}
function encodeBool(value) {
    if (typeof value !== "boolean") throw new (0, _baseJs.BaseError)(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: false,
        encoded: (0, _padJs.padHex)((0, _toHexJs.boolToHex)(value))
    };
}
function encodeNumber(value, { signed }) {
    return {
        dynamic: false,
        encoded: (0, _toHexJs.numberToHex)(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = (0, _toHexJs.stringToHex)(value);
    const partsLength = Math.ceil((0, _sizeJs.size)(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++)parts.push((0, _padJs.padHex)((0, _sliceJs.slice)(hexValue, i * 32, (i + 1) * 32), {
        dir: "right"
    }));
    return {
        dynamic: true,
        encoded: (0, _concatJs.concat)([
            (0, _padJs.padHex)((0, _toHexJs.numberToHex)((0, _sizeJs.size)(hexValue), {
                size: 32
            })),
            ...parts
        ])
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for(let i = 0; i < param.components.length; i++){
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index]
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encodeParams(preparedParams) : (0, _concatJs.concat)(preparedParams.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
}

},{"../../errors/abi.js":"edx9G","../../errors/address.js":"aXG3R","../../errors/base.js":"4yABH","../address/isAddress.js":"8I3zw","../data/concat.js":"x7umB","../data/pad.js":"dh9br","../data/size.js":"iGp06","../data/slice.js":"bOruf","../encoding/toHex.js":"9rk4U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"x7umB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat);
parcelHelpers.export(exports, "concatBytes", ()=>concatBytes);
parcelHelpers.export(exports, "concatHex", ()=>concatHex);
function concat(values) {
    if (typeof values[0] === "string") return concatHex(values);
    return concatBytes(values);
}
function concatBytes(values) {
    let length = 0;
    for (const arr of values)length += arr.length;
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values){
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
function concatHex(values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace("0x", ""), "")}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVquf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAddressEqual", ()=>isAddressEqual);
var _addressJs = require("../../errors/address.js");
var _isAddressJs = require("./isAddress.js");
function isAddressEqual(a, b) {
    if (!(0, _isAddressJs.isAddress)(a, {
        strict: false
    })) throw new (0, _addressJs.InvalidAddressError)({
        address: a
    });
    if (!(0, _isAddressJs.isAddress)(b, {
        strict: false
    })) throw new (0, _addressJs.InvalidAddressError)({
        address: b
    });
    return a.toLowerCase() === b.toLowerCase();
}

},{"../../errors/address.js":"aXG3R","./isAddress.js":"8I3zw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guRrG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NegativeOffsetError", ()=>NegativeOffsetError);
parcelHelpers.export(exports, "PositionOutOfBoundsError", ()=>PositionOutOfBoundsError);
parcelHelpers.export(exports, "RecursiveReadLimitExceededError", ()=>RecursiveReadLimitExceededError);
var _baseJs = require("./base.js");
class NegativeOffsetError extends (0, _baseJs.BaseError) {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`, {
            name: "NegativeOffsetError"
        });
    }
}
class PositionOutOfBoundsError extends (0, _baseJs.BaseError) {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, {
            name: "PositionOutOfBoundsError"
        });
    }
}
class RecursiveReadLimitExceededError extends (0, _baseJs.BaseError) {
    constructor({ count, limit }){
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, {
            name: "RecursiveReadLimitExceededError"
        });
    }
}

},{"./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOFWa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeAbiParameters", ()=>decodeAbiParameters);
var _abiJs = require("../../errors/abi.js");
var _getAddressJs = require("../address/getAddress.js");
var _cursorJs = require("../cursor.js");
var _sizeJs = require("../data/size.js");
var _sliceJs = require("../data/slice.js");
var _trimJs = require("../data/trim.js");
var _fromBytesJs = require("../encoding/fromBytes.js");
var _toBytesJs = require("../encoding/toBytes.js");
var _toHexJs = require("../encoding/toHex.js");
var _encodeAbiParametersJs = require("./encodeAbiParameters.js");
function decodeAbiParameters(params, data) {
    const bytes = typeof data === "string" ? (0, _toBytesJs.hexToBytes)(data) : data;
    const cursor = (0, _cursorJs.createCursor)(bytes);
    if ((0, _sizeJs.size)(bytes) === 0 && params.length > 0) throw new (0, _abiJs.AbiDecodingZeroDataError)();
    if ((0, _sizeJs.size)(data) && (0, _sizeJs.size)(data) < 32) throw new (0, _abiJs.AbiDecodingDataSizeTooSmallError)({
        data: typeof data === "string" ? data : (0, _toHexJs.bytesToHex)(data),
        params: params,
        size: (0, _sizeJs.size)(data)
    });
    let consumed = 0;
    const values = [];
    for(let i = 0; i < params.length; ++i){
        const param = params[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: 0
        });
        consumed += consumed_;
        values.push(data);
    }
    return values;
}
function decodeParameter(cursor, param, { staticPosition }) {
    const arrayComponents = (0, _encodeAbiParametersJs.getArrayComponents)(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, {
            ...param,
            type
        }, {
            length,
            staticPosition
        });
    }
    if (param.type === "tuple") return decodeTuple(cursor, param, {
        staticPosition
    });
    if (param.type === "address") return decodeAddress(cursor);
    if (param.type === "bool") return decodeBool(cursor);
    if (param.type.startsWith("bytes")) return decodeBytes(cursor, param, {
        staticPosition
    });
    if (param.type.startsWith("uint") || param.type.startsWith("int")) return decodeNumber(cursor, param);
    if (param.type === "string") return decodeString(cursor, {
        staticPosition
    });
    throw new (0, _abiJs.InvalidAbiDecodingTypeError)(param.type, {
        docsPath: "/docs/contract/decodeAbiParameters"
    });
}
////////////////////////////////////////////////////////////////////
// Type Decoders
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor) {
    const value = cursor.readBytes(32);
    return [
        (0, _getAddressJs.checksumAddress)((0, _toHexJs.bytesToHex)((0, _sliceJs.sliceBytes)(value, -20))),
        32
    ];
}
function decodeArray(cursor, param, { length, staticPosition }) {
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = (0, _fromBytesJs.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = (0, _fromBytesJs.bytesToNumber)(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                staticPosition: startOfData
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = (0, _fromBytesJs.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for(let i = 0; i < length; ++i){
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                staticPosition: start
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for(let i = 0; i < length; ++i){
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: staticPosition + consumed
        });
        consumed += consumed_;
        value.push(data);
    }
    return [
        value,
        consumed
    ];
}
function decodeBool(cursor) {
    return [
        (0, _fromBytesJs.bytesToBool)(cursor.readBytes(32), {
            size: 32
        }),
        32
    ];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split("bytes");
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = (0, _fromBytesJs.bytesToNumber)(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = (0, _fromBytesJs.bytesToNumber)(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return [
                "0x",
                32
            ];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            (0, _toHexJs.bytesToHex)(data),
            32
        ];
    }
    const value = (0, _toHexJs.bytesToHex)(cursor.readBytes(Number.parseInt(size), 32));
    return [
        value,
        32
    ];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith("int");
    const size = Number.parseInt(param.type.split("int")[1] || "256");
    const value = cursor.readBytes(32);
    return [
        size > 48 ? (0, _fromBytesJs.bytesToBigInt)(value, {
            signed
        }) : (0, _fromBytesJs.bytesToNumber)(value, {
            signed
        }),
        32
    ];
}
function decodeTuple(cursor, param, { staticPosition }) {
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = (0, _fromBytesJs.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                staticPosition: start
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for(let i = 0; i < param.components.length; ++i){
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            staticPosition
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [
        value,
        consumed
    ];
}
function decodeString(cursor, { staticPosition }) {
    // Get offset to start of string data.
    const offset = (0, _fromBytesJs.bytesToNumber)(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = (0, _fromBytesJs.bytesToNumber)(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return [
            "",
            32
        ];
    }
    const data = cursor.readBytes(length, 32);
    const value = (0, _fromBytesJs.bytesToString)((0, _trimJs.trim)(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [
        value,
        32
    ];
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === "string") return true;
    if (type === "bytes") return true;
    if (type.endsWith("[]")) return true;
    if (type === "tuple") return param.components?.some(hasDynamicChild);
    const arrayComponents = (0, _encodeAbiParametersJs.getArrayComponents)(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
}

},{"../../errors/abi.js":"edx9G","../address/getAddress.js":"hjZaw","../cursor.js":"iBTBS","../data/size.js":"iGp06","../data/slice.js":"bOruf","../data/trim.js":"a7ozD","../encoding/fromBytes.js":"lLieF","../encoding/toBytes.js":"jsem0","../encoding/toHex.js":"9rk4U","./encodeAbiParameters.js":"ji1Pk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBTBS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCursor", ()=>createCursor);
var _cursorJs = require("../errors/cursor.js");
const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new (0, _cursorJs.RecursiveReadLimitExceededError)({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new (0, _cursorJs.PositionOutOfBoundsError)({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new (0, _cursorJs.NegativeOffsetError)({
            offset
        });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount (position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition (offset) {
        if (offset < 0) throw new (0, _cursorJs.NegativeOffsetError)({
            offset
        });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes (length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
    },
    inspectUint32 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte (byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes (bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8 (value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16 (value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24 (value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & 255);
        this.position += 3;
    },
    pushUint32 (value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes (length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining () {
        return this.bytes.length - this.position;
    },
    setPosition (position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return ()=>this.position = oldPosition;
    },
    _touch () {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0) this.recursiveReadCount++;
    }
};
function createCursor(bytes, { recursiveReadLimit = 8192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}

},{"../errors/cursor.js":"guRrG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLieF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decodes a byte array into a UTF-8 string, hex value, number, bigint or boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes
 * - Example: https://viem.sh/docs/utilities/fromBytes#usage
 *
 * @param bytes Byte array to decode.
 * @param toOrOpts Type to convert to or options.
 * @returns Decoded value.
 *
 * @example
 * import { fromBytes } from 'viem'
 * const data = fromBytes(new Uint8Array([1, 164]), 'number')
 * // 420
 *
 * @example
 * import { fromBytes } from 'viem'
 * const data = fromBytes(
 *   new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]),
 *   'string'
 * )
 * // 'Hello world'
 */ parcelHelpers.export(exports, "fromBytes", ()=>fromBytes);
/**
 * Decodes a byte array into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestobigint
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { bytesToBigInt } from 'viem'
 * const data = bytesToBigInt(new Uint8Array([1, 164]))
 * // 420n
 */ parcelHelpers.export(exports, "bytesToBigInt", ()=>bytesToBigInt);
/**
 * Decodes a byte array into a boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestobool
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns Boolean value.
 *
 * @example
 * import { bytesToBool } from 'viem'
 * const data = bytesToBool(new Uint8Array([1]))
 * // true
 */ parcelHelpers.export(exports, "bytesToBool", ()=>bytesToBool);
/**
 * Decodes a byte array into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestonumber
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { bytesToNumber } from 'viem'
 * const data = bytesToNumber(new Uint8Array([1, 164]))
 * // 420
 */ parcelHelpers.export(exports, "bytesToNumber", ()=>bytesToNumber);
/**
 * Decodes a byte array into a UTF-8 string.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestostring
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns String value.
 *
 * @example
 * import { bytesToString } from 'viem'
 * const data = bytesToString(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // 'Hello world'
 */ parcelHelpers.export(exports, "bytesToString", ()=>bytesToString);
var _encodingJs = require("../../errors/encoding.js");
var _trimJs = require("../data/trim.js");
var _fromHexJs = require("./fromHex.js");
var _toHexJs = require("./toHex.js");
function fromBytes(bytes, toOrOpts) {
    const opts = typeof toOrOpts === "string" ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === "number") return bytesToNumber(bytes, opts);
    if (to === "bigint") return bytesToBigInt(bytes, opts);
    if (to === "boolean") return bytesToBool(bytes, opts);
    if (to === "string") return bytesToString(bytes, opts);
    return (0, _toHexJs.bytesToHex)(bytes, opts);
}
function bytesToBigInt(bytes, opts = {}) {
    if (typeof opts.size !== "undefined") (0, _fromHexJs.assertSize)(bytes, {
        size: opts.size
    });
    const hex = (0, _toHexJs.bytesToHex)(bytes, opts);
    return (0, _fromHexJs.hexToBigInt)(hex, opts);
}
function bytesToBool(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== "undefined") {
        (0, _fromHexJs.assertSize)(bytes, {
            size: opts.size
        });
        bytes = (0, _trimJs.trim)(bytes);
    }
    if (bytes.length > 1 || bytes[0] > 1) throw new (0, _encodingJs.InvalidBytesBooleanError)(bytes);
    return Boolean(bytes[0]);
}
function bytesToNumber(bytes, opts = {}) {
    if (typeof opts.size !== "undefined") (0, _fromHexJs.assertSize)(bytes, {
        size: opts.size
    });
    const hex = (0, _toHexJs.bytesToHex)(bytes, opts);
    return (0, _fromHexJs.hexToNumber)(hex, opts);
}
function bytesToString(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== "undefined") {
        (0, _fromHexJs.assertSize)(bytes, {
            size: opts.size
        });
        bytes = (0, _trimJs.trim)(bytes, {
            dir: "right"
        });
    }
    return new TextDecoder().decode(bytes);
}

},{"../../errors/encoding.js":"fTBHi","../data/trim.js":"a7ozD","./fromHex.js":"5gdtu","./toHex.js":"9rk4U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kP5TX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeFunctionResult", ()=>decodeFunctionResult);
var _abiJs = require("../../errors/abi.js");
var _decodeAbiParametersJs = require("./decodeAbiParameters.js");
var _getAbiItemJs = require("./getAbiItem.js");
const docsPath = "/docs/contract/decodeFunctionResult";
function decodeFunctionResult(parameters) {
    const { abi, args, functionName, data } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, _getAbiItemJs.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        if (!item) throw new (0, _abiJs.AbiFunctionNotFoundError)(functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== "function") throw new (0, _abiJs.AbiFunctionNotFoundError)(undefined, {
        docsPath
    });
    if (!abiItem.outputs) throw new (0, _abiJs.AbiFunctionOutputsNotFoundError)(abiItem.name, {
        docsPath
    });
    const values = (0, _decodeAbiParametersJs.decodeAbiParameters)(abiItem.outputs, data);
    if (values && values.length > 1) return values;
    if (values && values.length === 1) return values[0];
    return undefined;
}

},{"../../errors/abi.js":"edx9G","./decodeAbiParameters.js":"eOFWa","./getAbiItem.js":"6yQt3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kLrl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodeFunctionData", ()=>encodeFunctionData);
var _concatJs = require("../data/concat.js");
var _encodeAbiParametersJs = require("./encodeAbiParameters.js");
var _prepareEncodeFunctionDataJs = require("./prepareEncodeFunctionData.js");
function encodeFunctionData(parameters) {
    const { args } = parameters;
    const { abi, functionName } = (()=>{
        if (parameters.abi.length === 1 && parameters.functionName?.startsWith("0x")) return parameters;
        return (0, _prepareEncodeFunctionDataJs.prepareEncodeFunctionData)(parameters);
    })();
    const abiItem = abi[0];
    const signature = functionName;
    const data = "inputs" in abiItem && abiItem.inputs ? (0, _encodeAbiParametersJs.encodeAbiParameters)(abiItem.inputs, args ?? []) : undefined;
    return (0, _concatJs.concatHex)([
        signature,
        data ?? "0x"
    ]);
}

},{"../data/concat.js":"x7umB","./encodeAbiParameters.js":"ji1Pk","./prepareEncodeFunctionData.js":"3I2AR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3I2AR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prepareEncodeFunctionData", ()=>prepareEncodeFunctionData);
var _abiJs = require("../../errors/abi.js");
var _toFunctionSelectorJs = require("../hash/toFunctionSelector.js");
var _formatAbiItemJs = require("./formatAbiItem.js");
var _getAbiItemJs = require("./getAbiItem.js");
const docsPath = "/docs/contract/encodeFunctionData";
function prepareEncodeFunctionData(parameters) {
    const { abi, args, functionName } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, _getAbiItemJs.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        if (!item) throw new (0, _abiJs.AbiFunctionNotFoundError)(functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== "function") throw new (0, _abiJs.AbiFunctionNotFoundError)(undefined, {
        docsPath
    });
    return {
        abi: [
            abiItem
        ],
        functionName: (0, _toFunctionSelectorJs.toFunctionSelector)((0, _formatAbiItemJs.formatAbiItem)(abiItem))
    };
}

},{"../../errors/abi.js":"edx9G","../hash/toFunctionSelector.js":"iZBjv","./formatAbiItem.js":"1dQtZ","./getAbiItem.js":"6yQt3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zhkD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CallExecutionError", ()=>CallExecutionError);
parcelHelpers.export(exports, "ContractFunctionExecutionError", ()=>ContractFunctionExecutionError);
parcelHelpers.export(exports, "ContractFunctionRevertedError", ()=>ContractFunctionRevertedError);
parcelHelpers.export(exports, "ContractFunctionZeroDataError", ()=>ContractFunctionZeroDataError);
parcelHelpers.export(exports, "CounterfactualDeploymentFailedError", ()=>CounterfactualDeploymentFailedError);
parcelHelpers.export(exports, "RawContractError", ()=>RawContractError);
var _parseAccountJs = require("../accounts/utils/parseAccount.js");
var _solidityJs = require("../constants/solidity.js");
var _decodeErrorResultJs = require("../utils/abi/decodeErrorResult.js");
var _formatAbiItemJs = require("../utils/abi/formatAbiItem.js");
var _formatAbiItemWithArgsJs = require("../utils/abi/formatAbiItemWithArgs.js");
var _getAbiItemJs = require("../utils/abi/getAbiItem.js");
var _formatEtherJs = require("../utils/unit/formatEther.js");
var _formatGweiJs = require("../utils/unit/formatGwei.js");
var _abiJs = require("./abi.js");
var _baseJs = require("./base.js");
var _stateOverrideJs = require("./stateOverride.js");
var _transactionJs = require("./transaction.js");
var _utilsJs = require("./utils.js");
class CallExecutionError extends (0, _baseJs.BaseError) {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride }){
        const account = account_ ? (0, _parseAccountJs.parseAccount)(account_) : undefined;
        let prettyArgs = (0, _transactionJs.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== "undefined" && `${(0, _formatEtherJs.formatEther)(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== "undefined" && `${(0, _formatGweiJs.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${(0, _formatGweiJs.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${(0, _formatGweiJs.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        if (stateOverride) prettyArgs += `\n${(0, _stateOverrideJs.prettyStateOverride)(stateOverride)}`;
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    " "
                ] : [],
                "Raw Call Arguments:",
                prettyArgs
            ].filter(Boolean),
            name: "CallExecutionError"
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class ContractFunctionExecutionError extends (0, _baseJs.BaseError) {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender }){
        const abiItem = (0, _getAbiItemJs.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        const formattedArgs = abiItem ? (0, _formatAbiItemWithArgsJs.formatAbiItemWithArgs)({
            abiItem,
            args,
            includeFunctionName: false,
            includeName: false
        }) : undefined;
        const functionWithParams = abiItem ? (0, _formatAbiItemJs.formatAbiItem)(abiItem, {
            includeName: true
        }) : undefined;
        const prettyArgs = (0, _transactionJs.prettyPrint)({
            address: contractAddress && (0, _utilsJs.getContractAddress)(contractAddress),
            function: functionWithParams,
            args: formattedArgs && formattedArgs !== "()" && `${[
                ...Array(functionName?.length ?? 0).keys()
            ].map(()=>" ").join("")}${formattedArgs}`,
            sender
        });
        super(cause.shortMessage || `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    " "
                ] : [],
                prettyArgs && "Contract Call:",
                prettyArgs
            ].filter(Boolean),
            name: "ContractFunctionExecutionError"
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
class ContractFunctionRevertedError extends (0, _baseJs.BaseError) {
    constructor({ abi, data, functionName, message }){
        let cause;
        let decodedData = undefined;
        let metaMessages;
        let reason;
        if (data && data !== "0x") try {
            decodedData = (0, _decodeErrorResultJs.decodeErrorResult)({
                abi,
                data
            });
            const { abiItem, errorName, args: errorArgs } = decodedData;
            if (errorName === "Error") reason = errorArgs[0];
            else if (errorName === "Panic") {
                const [firstArg] = errorArgs;
                reason = (0, _solidityJs.panicReasons)[firstArg];
            } else {
                const errorWithParams = abiItem ? (0, _formatAbiItemJs.formatAbiItem)(abiItem, {
                    includeName: true
                }) : undefined;
                const formattedArgs = abiItem && errorArgs ? (0, _formatAbiItemWithArgsJs.formatAbiItemWithArgs)({
                    abiItem,
                    args: errorArgs,
                    includeFunctionName: false,
                    includeName: false
                }) : undefined;
                metaMessages = [
                    errorWithParams ? `Error: ${errorWithParams}` : "",
                    formattedArgs && formattedArgs !== "()" ? `       ${[
                        ...Array(errorName?.length ?? 0).keys()
                    ].map(()=>" ").join("")}${formattedArgs}` : ""
                ];
            }
        } catch (err) {
            cause = err;
        }
        else if (message) reason = message;
        let signature;
        if (cause instanceof (0, _abiJs.AbiErrorSignatureNotFoundError)) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                "Make sure you are using the correct ABI and that the error exists on it.",
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
            ];
        }
        super(reason && reason !== "execution reverted" || signature ? [
            `The contract function "${functionName}" reverted with the following ${signature ? "signature" : "reason"}:`,
            reason || signature
        ].join("\n") : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages,
            name: "ContractFunctionRevertedError"
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.reason = reason;
        this.signature = signature;
    }
}
class ContractFunctionZeroDataError extends (0, _baseJs.BaseError) {
    constructor({ functionName }){
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                "This could be due to any of the following:",
                `  - The contract does not have the function "${functionName}",`,
                "  - The parameters passed to the contract function may be invalid, or",
                "  - The address is not a contract."
            ],
            name: "ContractFunctionZeroDataError"
        });
    }
}
class CounterfactualDeploymentFailedError extends (0, _baseJs.BaseError) {
    constructor({ factory }){
        super(`Deployment for counterfactual contract call failed${factory ? ` for factory "${factory}".` : ""}`, {
            metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."
            ],
            name: "CounterfactualDeploymentFailedError"
        });
    }
}
class RawContractError extends (0, _baseJs.BaseError) {
    constructor({ data, message }){
        super(message || "", {
            name: "RawContractError"
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}

},{"../accounts/utils/parseAccount.js":"befdU","../constants/solidity.js":"eMjGz","../utils/abi/decodeErrorResult.js":"ccmb3","../utils/abi/formatAbiItem.js":"1dQtZ","../utils/abi/formatAbiItemWithArgs.js":"glq9G","../utils/abi/getAbiItem.js":"6yQt3","../utils/unit/formatEther.js":"iKYu7","../utils/unit/formatGwei.js":"5KTZD","./abi.js":"edx9G","./base.js":"4yABH","./stateOverride.js":"4k5xW","./transaction.js":"6z6vx","./utils.js":"l0xWn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"befdU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAccount", ()=>parseAccount);
function parseAccount(account) {
    if (typeof account === "string") return {
        address: account,
        type: "json-rpc"
    };
    return account;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eMjGz":[function(require,module,exports) {
// https://docs.soliditylang.org/en/v0.8.16/control-structures.html#panic-via-assert-and-error-via-require
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "panicReasons", ()=>panicReasons);
parcelHelpers.export(exports, "solidityError", ()=>solidityError);
parcelHelpers.export(exports, "solidityPanic", ()=>solidityPanic);
const panicReasons = {
    1: "An `assert` condition failed.",
    17: "Arithmetic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type."
};
const solidityError = {
    inputs: [
        {
            name: "message",
            type: "string"
        }
    ],
    name: "Error",
    type: "error"
};
const solidityPanic = {
    inputs: [
        {
            name: "reason",
            type: "uint256"
        }
    ],
    name: "Panic",
    type: "error"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccmb3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeErrorResult", ()=>decodeErrorResult);
var _solidityJs = require("../../constants/solidity.js");
var _abiJs = require("../../errors/abi.js");
var _sliceJs = require("../data/slice.js");
var _toFunctionSelectorJs = require("../hash/toFunctionSelector.js");
var _decodeAbiParametersJs = require("./decodeAbiParameters.js");
var _formatAbiItemJs = require("./formatAbiItem.js");
function decodeErrorResult(parameters) {
    const { abi, data } = parameters;
    const signature = (0, _sliceJs.slice)(data, 0, 4);
    if (signature === "0x") throw new (0, _abiJs.AbiDecodingZeroDataError)();
    const abi_ = [
        ...abi || [],
        (0, _solidityJs.solidityError),
        (0, _solidityJs.solidityPanic)
    ];
    const abiItem = abi_.find((x)=>x.type === "error" && signature === (0, _toFunctionSelectorJs.toFunctionSelector)((0, _formatAbiItemJs.formatAbiItem)(x)));
    if (!abiItem) throw new (0, _abiJs.AbiErrorSignatureNotFoundError)(signature, {
        docsPath: "/docs/contract/decodeErrorResult"
    });
    return {
        abiItem,
        args: "inputs" in abiItem && abiItem.inputs && abiItem.inputs.length > 0 ? (0, _decodeAbiParametersJs.decodeAbiParameters)(abiItem.inputs, (0, _sliceJs.slice)(data, 4)) : undefined,
        errorName: abiItem.name
    };
}

},{"../../constants/solidity.js":"eMjGz","../../errors/abi.js":"edx9G","../data/slice.js":"bOruf","../hash/toFunctionSelector.js":"iZBjv","./decodeAbiParameters.js":"eOFWa","./formatAbiItem.js":"1dQtZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glq9G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatAbiItemWithArgs", ()=>formatAbiItemWithArgs);
var _stringifyJs = require("../stringify.js");
function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false }) {
    if (!("name" in abiItem)) return;
    if (!("inputs" in abiItem)) return;
    if (!abiItem.inputs) return;
    return `${includeFunctionName ? abiItem.name : ""}(${abiItem.inputs.map((input, i)=>`${includeName && input.name ? `${input.name}: ` : ""}${typeof args[i] === "object" ? (0, _stringifyJs.stringify)(args[i]) : args[i]}`).join(", ")})`;
}

},{"../stringify.js":"eYWjq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYWjq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringify", ()=>stringify);
const stringify = (value, replacer, space)=>JSON.stringify(value, (key, value_)=>{
        const value = typeof value_ === "bigint" ? value_.toString() : value_;
        return typeof replacer === "function" ? replacer(key, value) : value;
    }, space);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iKYu7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts numerical wei to a string representation of ether.
 *
 * - Docs: https://viem.sh/docs/utilities/formatEther
 *
 * @example
 * import { formatEther } from 'viem'
 *
 * formatEther(1000000000000000000n)
 * // '1'
 */ parcelHelpers.export(exports, "formatEther", ()=>formatEther);
var _unitJs = require("../../constants/unit.js");
var _formatUnitsJs = require("./formatUnits.js");
function formatEther(wei, unit = "wei") {
    return (0, _formatUnitsJs.formatUnits)(wei, (0, _unitJs.etherUnits)[unit]);
}

},{"../../constants/unit.js":"c1ktM","./formatUnits.js":"8CRhe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1ktM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "etherUnits", ()=>etherUnits);
parcelHelpers.export(exports, "gweiUnits", ()=>gweiUnits);
parcelHelpers.export(exports, "weiUnits", ()=>weiUnits);
const etherUnits = {
    gwei: 9,
    wei: 18
};
const gweiUnits = {
    ether: -9,
    wei: 9
};
const weiUnits = {
    ether: -18,
    gwei: -9
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CRhe":[function(require,module,exports) {
/**
 *  Divides a number by a given exponent of base 10 (10exponent), and formats it into a string representation of the number..
 *
 * - Docs: https://viem.sh/docs/utilities/formatUnits
 *
 * @example
 * import { formatUnits } from 'viem'
 *
 * formatUnits(420000000000n, 9)
 * // '420'
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatUnits", ()=>formatUnits);
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith("-");
    if (negative) display = display.slice(1);
    display = display.padStart(decimals, "0");
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals)
    ];
    fraction = fraction.replace(/(0+)$/, "");
    return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5KTZD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts numerical wei to a string representation of gwei.
 *
 * - Docs: https://viem.sh/docs/utilities/formatGwei
 *
 * @example
 * import { formatGwei } from 'viem'
 *
 * formatGwei(1000000000n)
 * // '1'
 */ parcelHelpers.export(exports, "formatGwei", ()=>formatGwei);
var _unitJs = require("../../constants/unit.js");
var _formatUnitsJs = require("./formatUnits.js");
function formatGwei(wei, unit = "wei") {
    return (0, _formatUnitsJs.formatUnits)(wei, (0, _unitJs.gweiUnits)[unit]);
}

},{"../../constants/unit.js":"c1ktM","./formatUnits.js":"8CRhe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4k5xW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AccountStateConflictError", ()=>AccountStateConflictError);
parcelHelpers.export(exports, "StateAssignmentConflictError", ()=>StateAssignmentConflictError);
/** @internal */ parcelHelpers.export(exports, "prettyStateMapping", ()=>prettyStateMapping);
parcelHelpers.export(exports, "prettyStateOverride", ()=>prettyStateOverride);
var _baseJs = require("./base.js");
class AccountStateConflictError extends (0, _baseJs.BaseError) {
    constructor({ address }){
        super(`State for account "${address}" is set multiple times.`, {
            name: "AccountStateConflictError"
        });
    }
}
class StateAssignmentConflictError extends (0, _baseJs.BaseError) {
    constructor(){
        super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError"
        });
    }
}
function prettyStateMapping(stateMapping) {
    return stateMapping.reduce((pretty, { slot, value })=>{
        return `${pretty}        ${slot}: ${value}\n`;
    }, "");
}
function prettyStateOverride(stateOverride) {
    return stateOverride.reduce((pretty, { address, ...state })=>{
        let val = `${pretty}    ${address}:\n`;
        if (state.nonce) val += `      nonce: ${state.nonce}\n`;
        if (state.balance) val += `      balance: ${state.balance}\n`;
        if (state.code) val += `      code: ${state.code}\n`;
        if (state.state) {
            val += "      state:\n";
            val += prettyStateMapping(state.state);
        }
        if (state.stateDiff) {
            val += "      stateDiff:\n";
            val += prettyStateMapping(state.stateDiff);
        }
        return val;
    }, "  State Override:\n").slice(0, -1);
}

},{"./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z6vx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prettyPrint", ()=>prettyPrint);
parcelHelpers.export(exports, "FeeConflictError", ()=>FeeConflictError);
parcelHelpers.export(exports, "InvalidLegacyVError", ()=>InvalidLegacyVError);
parcelHelpers.export(exports, "InvalidSerializableTransactionError", ()=>InvalidSerializableTransactionError);
parcelHelpers.export(exports, "InvalidSerializedTransactionTypeError", ()=>InvalidSerializedTransactionTypeError);
parcelHelpers.export(exports, "InvalidSerializedTransactionError", ()=>InvalidSerializedTransactionError);
parcelHelpers.export(exports, "InvalidStorageKeySizeError", ()=>InvalidStorageKeySizeError);
parcelHelpers.export(exports, "TransactionExecutionError", ()=>TransactionExecutionError);
parcelHelpers.export(exports, "TransactionNotFoundError", ()=>TransactionNotFoundError);
parcelHelpers.export(exports, "TransactionReceiptNotFoundError", ()=>TransactionReceiptNotFoundError);
parcelHelpers.export(exports, "WaitForTransactionReceiptTimeoutError", ()=>WaitForTransactionReceiptTimeoutError);
var _formatEtherJs = require("../utils/unit/formatEther.js");
var _formatGweiJs = require("../utils/unit/formatGwei.js");
var _baseJs = require("./base.js");
function prettyPrint(args) {
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join("\n");
}
class FeeConflictError extends (0, _baseJs.BaseError) {
    constructor(){
        super([
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
            "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
        ].join("\n"), {
            name: "FeeConflictError"
        });
    }
}
class InvalidLegacyVError extends (0, _baseJs.BaseError) {
    constructor({ v }){
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
            name: "InvalidLegacyVError"
        });
    }
}
class InvalidSerializableTransactionError extends (0, _baseJs.BaseError) {
    constructor({ transaction }){
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
                "Provided Transaction:",
                "{",
                prettyPrint(transaction),
                "}",
                "",
                "To infer the type, either provide:",
                "- a `type` to the Transaction, or",
                "- an EIP-1559 Transaction with `maxFeePerGas`, or",
                "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
                "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
                "- an EIP-7702 Transaction with `authorizationList`, or",
                "- a Legacy Transaction with `gasPrice`"
            ],
            name: "InvalidSerializableTransactionError"
        });
    }
}
class InvalidSerializedTransactionTypeError extends (0, _baseJs.BaseError) {
    constructor({ serializedType }){
        super(`Serialized transaction type "${serializedType}" is invalid.`, {
            name: "InvalidSerializedTransactionType"
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
class InvalidSerializedTransactionError extends (0, _baseJs.BaseError) {
    constructor({ attributes, serializedTransaction, type }){
        const missing = Object.entries(attributes).map(([key, value])=>typeof value === "undefined" ? key : undefined).filter(Boolean);
        super(`Invalid serialized transaction of type "${type}" was provided.`, {
            metaMessages: [
                `Serialized Transaction: "${serializedTransaction}"`,
                missing.length > 0 ? `Missing Attributes: ${missing.join(", ")}` : ""
            ].filter(Boolean),
            name: "InvalidSerializedTransactionError"
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
class InvalidStorageKeySizeError extends (0, _baseJs.BaseError) {
    constructor({ storageKey }){
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, {
            name: "InvalidStorageKeySizeError"
        });
    }
}
class TransactionExecutionError extends (0, _baseJs.BaseError) {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const prettyArgs = prettyPrint({
            chain: chain && `${chain?.name} (id: ${chain?.id})`,
            from: account?.address,
            to,
            value: typeof value !== "undefined" && `${(0, _formatEtherJs.formatEther)(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== "undefined" && `${(0, _formatGweiJs.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${(0, _formatGweiJs.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${(0, _formatGweiJs.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    " "
                ] : [],
                "Request Arguments:",
                prettyArgs
            ].filter(Boolean),
            name: "TransactionExecutionError"
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class TransactionNotFoundError extends (0, _baseJs.BaseError) {
    constructor({ blockHash, blockNumber, blockTag, hash, index }){
        let identifier = "Transaction";
        if (blockTag && index !== undefined) identifier = `Transaction at block time "${blockTag}" at index "${index}"`;
        if (blockHash && index !== undefined) identifier = `Transaction at block hash "${blockHash}" at index "${index}"`;
        if (blockNumber && index !== undefined) identifier = `Transaction at block number "${blockNumber}" at index "${index}"`;
        if (hash) identifier = `Transaction with hash "${hash}"`;
        super(`${identifier} could not be found.`, {
            name: "TransactionNotFoundError"
        });
    }
}
class TransactionReceiptNotFoundError extends (0, _baseJs.BaseError) {
    constructor({ hash }){
        super(`Transaction receipt with hash "${hash}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: "TransactionReceiptNotFoundError"
        });
    }
}
class WaitForTransactionReceiptTimeoutError extends (0, _baseJs.BaseError) {
    constructor({ hash }){
        super(`Timed out while waiting for transaction with hash "${hash}" to be confirmed.`, {
            name: "WaitForTransactionReceiptTimeoutError"
        });
    }
}

},{"../utils/unit/formatEther.js":"iKYu7","../utils/unit/formatGwei.js":"5KTZD","./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0xWn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContractAddress", ()=>getContractAddress);
parcelHelpers.export(exports, "getUrl", ()=>getUrl);
const getContractAddress = (address)=>address;
const getUrl = (url)=>url;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2an5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RpcError", ()=>RpcError);
parcelHelpers.export(exports, "ProviderRpcError", ()=>ProviderRpcError);
parcelHelpers.export(exports, "ParseRpcError", ()=>ParseRpcError);
parcelHelpers.export(exports, "InvalidRequestRpcError", ()=>InvalidRequestRpcError);
parcelHelpers.export(exports, "MethodNotFoundRpcError", ()=>MethodNotFoundRpcError);
parcelHelpers.export(exports, "InvalidParamsRpcError", ()=>InvalidParamsRpcError);
parcelHelpers.export(exports, "InternalRpcError", ()=>InternalRpcError);
parcelHelpers.export(exports, "InvalidInputRpcError", ()=>InvalidInputRpcError);
parcelHelpers.export(exports, "ResourceNotFoundRpcError", ()=>ResourceNotFoundRpcError);
parcelHelpers.export(exports, "ResourceUnavailableRpcError", ()=>ResourceUnavailableRpcError);
parcelHelpers.export(exports, "TransactionRejectedRpcError", ()=>TransactionRejectedRpcError);
parcelHelpers.export(exports, "MethodNotSupportedRpcError", ()=>MethodNotSupportedRpcError);
parcelHelpers.export(exports, "LimitExceededRpcError", ()=>LimitExceededRpcError);
parcelHelpers.export(exports, "JsonRpcVersionUnsupportedError", ()=>JsonRpcVersionUnsupportedError);
parcelHelpers.export(exports, "UserRejectedRequestError", ()=>UserRejectedRequestError);
parcelHelpers.export(exports, "UnauthorizedProviderError", ()=>UnauthorizedProviderError);
parcelHelpers.export(exports, "UnsupportedProviderMethodError", ()=>UnsupportedProviderMethodError);
parcelHelpers.export(exports, "ProviderDisconnectedError", ()=>ProviderDisconnectedError);
parcelHelpers.export(exports, "ChainDisconnectedError", ()=>ChainDisconnectedError);
parcelHelpers.export(exports, "SwitchChainError", ()=>SwitchChainError);
parcelHelpers.export(exports, "UnknownRpcError", ()=>UnknownRpcError);
var _baseJs = require("./base.js");
var _requestJs = require("./request.js");
const unknownErrorCode = -1;
class RpcError extends (0, _baseJs.BaseError) {
    constructor(cause, { code, docsPath, metaMessages, name, shortMessage }){
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages,
            name: name || "RpcError"
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name || cause.name;
        this.code = cause instanceof (0, _requestJs.RpcRequestError) ? cause.code : code ?? unknownErrorCode;
    }
}
class ProviderRpcError extends RpcError {
    constructor(cause, options){
        super(cause, options);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = options.data;
    }
}
class ParseRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ParseRpcError.code,
            name: "ParseRpcError",
            shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        });
    }
}
Object.defineProperty(ParseRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32700
});
class InvalidRequestRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidRequestRpcError.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object."
        });
    }
}
Object.defineProperty(InvalidRequestRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32600
});
class MethodNotFoundRpcError extends RpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: MethodNotFoundRpcError.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${method ? ` "${method}"` : ""} does not exist / is not available.`
        });
    }
}
Object.defineProperty(MethodNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32601
});
class InvalidParamsRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidParamsRpcError.code,
            name: "InvalidParamsRpcError",
            shortMessage: [
                "Invalid parameters were provided to the RPC method.",
                "Double check you have provided the correct parameters."
            ].join("\n")
        });
    }
}
Object.defineProperty(InvalidParamsRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InternalRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InternalRpcError.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received."
        });
    }
}
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});
class InvalidInputRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidInputRpcError.code,
            name: "InvalidInputRpcError",
            shortMessage: [
                "Missing or invalid parameters.",
                "Double check you have provided the correct parameters."
            ].join("\n")
        });
    }
}
Object.defineProperty(InvalidInputRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32000
});
class ResourceNotFoundRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceNotFoundRpcError.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found."
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ResourceNotFoundRpcError"
        });
    }
}
Object.defineProperty(ResourceNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32001
});
class ResourceUnavailableRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceUnavailableRpcError.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available."
        });
    }
}
Object.defineProperty(ResourceUnavailableRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32002
});
class TransactionRejectedRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: TransactionRejectedRpcError.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed."
        });
    }
}
Object.defineProperty(TransactionRejectedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32003
});
class MethodNotSupportedRpcError extends RpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: MethodNotSupportedRpcError.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${method ? ` "${method}"` : ""} is not implemented.`
        });
    }
}
Object.defineProperty(MethodNotSupportedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32004
});
class LimitExceededRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: LimitExceededRpcError.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit."
        });
    }
}
Object.defineProperty(LimitExceededRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32005
});
class JsonRpcVersionUnsupportedError extends RpcError {
    constructor(cause){
        super(cause, {
            code: JsonRpcVersionUnsupportedError.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported."
        });
    }
}
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32006
});
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UserRejectedRequestError.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request."
        });
    }
}
Object.defineProperty(UserRejectedRequestError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4001
});
class UnauthorizedProviderError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnauthorizedProviderError.code,
            name: "UnauthorizedProviderError",
            shortMessage: "The requested method and/or account has not been authorized by the user."
        });
    }
}
Object.defineProperty(UnauthorizedProviderError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4100
});
class UnsupportedProviderMethodError extends ProviderRpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: UnsupportedProviderMethodError.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${method ? ` " ${method}"` : ""}.`
        });
    }
}
Object.defineProperty(UnsupportedProviderMethodError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4200
});
class ProviderDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ProviderDisconnectedError.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains."
        });
    }
}
Object.defineProperty(ProviderDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4900
});
class ChainDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ChainDisconnectedError.code,
            name: "ChainDisconnectedError",
            shortMessage: "The Provider is not connected to the requested chain."
        });
    }
}
Object.defineProperty(ChainDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4901
});
class SwitchChainError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: SwitchChainError.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain."
        });
    }
}
Object.defineProperty(SwitchChainError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4902
});
class UnknownRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred."
        });
    }
}

},{"./base.js":"4yABH","./request.js":"gfO3n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gfO3n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpRequestError", ()=>HttpRequestError);
parcelHelpers.export(exports, "WebSocketRequestError", ()=>WebSocketRequestError);
parcelHelpers.export(exports, "RpcRequestError", ()=>RpcRequestError);
parcelHelpers.export(exports, "SocketClosedError", ()=>SocketClosedError);
parcelHelpers.export(exports, "TimeoutError", ()=>TimeoutError);
var _stringifyJs = require("../utils/stringify.js");
var _baseJs = require("./base.js");
var _utilsJs = require("./utils.js");
class HttpRequestError extends (0, _baseJs.BaseError) {
    constructor({ body, cause, details, headers, status, url }){
        super("HTTP request failed.", {
            cause,
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${(0, _utilsJs.getUrl)(url)}`,
                body && `Request body: ${(0, _stringifyJs.stringify)(body)}`
            ].filter(Boolean),
            name: "HttpRequestError"
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
class WebSocketRequestError extends (0, _baseJs.BaseError) {
    constructor({ body, cause, details, url }){
        super("WebSocket request failed.", {
            cause,
            details,
            metaMessages: [
                `URL: ${(0, _utilsJs.getUrl)(url)}`,
                body && `Request body: ${(0, _stringifyJs.stringify)(body)}`
            ].filter(Boolean),
            name: "WebSocketRequestError"
        });
    }
}
class RpcRequestError extends (0, _baseJs.BaseError) {
    constructor({ body, error, url }){
        super("RPC Request failed.", {
            cause: error,
            details: error.message,
            metaMessages: [
                `URL: ${(0, _utilsJs.getUrl)(url)}`,
                `Request body: ${(0, _stringifyJs.stringify)(body)}`
            ],
            name: "RpcRequestError"
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
    }
}
class SocketClosedError extends (0, _baseJs.BaseError) {
    constructor({ url } = {}){
        super("The socket has been closed.", {
            metaMessages: [
                url && `URL: ${(0, _utilsJs.getUrl)(url)}`
            ].filter(Boolean),
            name: "SocketClosedError"
        });
    }
}
class TimeoutError extends (0, _baseJs.BaseError) {
    constructor({ body, url }){
        super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
                `URL: ${(0, _utilsJs.getUrl)(url)}`,
                `Request body: ${(0, _stringifyJs.stringify)(body)}`
            ],
            name: "TimeoutError"
        });
    }
}

},{"../utils/stringify.js":"eYWjq","./base.js":"4yABH","./utils.js":"l0xWn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lzQeB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Executes a new message call immediately without submitting a transaction to the network.
 *
 * - Docs: https://viem.sh/docs/actions/public/call
 * - JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)
 *
 * @param client - Client to use
 * @param parameters - {@link CallParameters}
 * @returns The call data. {@link CallReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { call } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const data = await call(client, {
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 *   data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 * })
 */ parcelHelpers.export(exports, "call", ()=>call);
/** @internal */ parcelHelpers.export(exports, "getRevertErrorData", ()=>getRevertErrorData);
var _abitype = require("abitype");
var _parseAccountJs = require("../../accounts/utils/parseAccount.js");
var _abisJs = require("../../constants/abis.js");
var _contractJs = require("../../constants/contract.js");
var _contractsJs = require("../../constants/contracts.js");
var _baseJs = require("../../errors/base.js");
var _chainJs = require("../../errors/chain.js");
var _contractJs1 = require("../../errors/contract.js");
var _decodeFunctionResultJs = require("../../utils/abi/decodeFunctionResult.js");
var _encodeDeployDataJs = require("../../utils/abi/encodeDeployData.js");
var _encodeFunctionDataJs = require("../../utils/abi/encodeFunctionData.js");
var _getChainContractAddressJs = require("../../utils/chain/getChainContractAddress.js");
var _toHexJs = require("../../utils/encoding/toHex.js");
var _getCallErrorJs = require("../../utils/errors/getCallError.js");
var _extractJs = require("../../utils/formatters/extract.js");
var _transactionRequestJs = require("../../utils/formatters/transactionRequest.js");
var _createBatchSchedulerJs = require("../../utils/promise/createBatchScheduler.js");
var _stateOverrideJs = require("../../utils/stateOverride.js");
var _assertRequestJs = require("../../utils/transaction/assertRequest.js");
async function call(client, args) {
    const { account: account_ = client.account, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = "latest", accessList, blobs, code, data: data_, factory, factoryData, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
    const account = account_ ? (0, _parseAccountJs.parseAccount)(account_) : undefined;
    if (code && (factory || factoryData)) throw new (0, _baseJs.BaseError)("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
    if (code && to) throw new (0, _baseJs.BaseError)("Cannot provide both `code` & `to` as parameters.");
    // Check if the call is deployless via bytecode.
    const deploylessCallViaBytecode = code && data_;
    // Check if the call is deployless via a factory.
    const deploylessCallViaFactory = factory && factoryData && to && data_;
    const deploylessCall = deploylessCallViaBytecode || deploylessCallViaFactory;
    const data = (()=>{
        if (deploylessCallViaBytecode) return toDeploylessCallViaBytecodeData({
            code,
            data: data_
        });
        if (deploylessCallViaFactory) return toDeploylessCallViaFactoryData({
            data: data_,
            factory,
            factoryData,
            to
        });
        return data_;
    })();
    try {
        (0, _assertRequestJs.assertRequest)(args);
        const blockNumberHex = blockNumber ? (0, _toHexJs.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = (0, _stateOverrideJs.serializeStateOverride)(stateOverride);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || (0, _transactionRequestJs.formatTransactionRequest);
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, _extractJs.extract)(rest, {
                format: chainFormat
            }),
            from: account?.address,
            accessList,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to: deploylessCall ? undefined : to,
            value
        });
        if (batch && shouldPerformMulticall({
            request
        }) && !rpcStateOverride) try {
            return await scheduleMulticall(client, {
                ...request,
                blockNumber,
                blockTag
            });
        } catch (err) {
            if (!(err instanceof (0, _chainJs.ClientChainNotConfiguredError)) && !(err instanceof (0, _chainJs.ChainDoesNotSupportContract))) throw err;
        }
        const response = await client.request({
            method: "eth_call",
            params: rpcStateOverride ? [
                request,
                block,
                rpcStateOverride
            ] : [
                request,
                block
            ]
        });
        if (response === "0x") return {
            data: undefined
        };
        return {
            data: response
        };
    } catch (err) {
        const data = getRevertErrorData(err);
        // Check for CCIP-Read offchain lookup signature.
        const { offchainLookup, offchainLookupSignature } = await require("4ee58dd6de3b4d58");
        if (client.ccipRead !== false && data?.slice(0, 10) === offchainLookupSignature && to) return {
            data: await offchainLookup(client, {
                data,
                to
            })
        };
        // Check for counterfactual deployment error.
        if (deploylessCall && data?.slice(0, 10) === "0x101bb98d") throw new (0, _contractJs1.CounterfactualDeploymentFailedError)({
            factory
        });
        throw (0, _getCallErrorJs.getCallError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
}
// We only want to perform a scheduled multicall if:
// - The request has calldata,
// - The request has a target address,
// - The target address is not already the aggregate3 signature,
// - The request has no other properties (`nonce`, `gas`, etc cannot be sent with a multicall).
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data) return false;
    if (data.startsWith((0, _contractJs.aggregate3Signature))) return false;
    if (!to) return false;
    if (Object.values(request_).filter((x)=>typeof x !== "undefined").length > 0) return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, wait = 0 } = typeof client.batch?.multicall === "object" ? client.batch.multicall : {};
    const { blockNumber, blockTag = "latest", data, multicallAddress: multicallAddress_, to } = args;
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain) throw new (0, _chainJs.ClientChainNotConfiguredError)();
        multicallAddress = (0, _getChainContractAddressJs.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: "multicall3"
        });
    }
    const blockNumberHex = blockNumber ? (0, _toHexJs.numberToHex)(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0, _createBatchSchedulerJs.createBatchScheduler)({
        id: `${client.uid}.${block}`,
        wait,
        shouldSplitBatch (args) {
            const size = args.reduce((size, { data })=>size + (data.length - 2), 0);
            return size > batchSize * 2;
        },
        fn: async (requests)=>{
            const calls = requests.map((request)=>({
                    allowFailure: true,
                    callData: request.data,
                    target: request.to
                }));
            const calldata = (0, _encodeFunctionDataJs.encodeFunctionData)({
                abi: (0, _abisJs.multicall3Abi),
                args: [
                    calls
                ],
                functionName: "aggregate3"
            });
            const data = await client.request({
                method: "eth_call",
                params: [
                    {
                        data: calldata,
                        to: multicallAddress
                    },
                    block
                ]
            });
            return (0, _decodeFunctionResultJs.decodeFunctionResult)({
                abi: (0, _abisJs.multicall3Abi),
                args: [
                    calls
                ],
                functionName: "aggregate3",
                data: data || "0x"
            });
        }
    });
    const [{ returnData, success }] = await schedule({
        data,
        to
    });
    if (!success) throw new (0, _contractJs1.RawContractError)({
        data: returnData
    });
    if (returnData === "0x") return {
        data: undefined
    };
    return {
        data: returnData
    };
}
function toDeploylessCallViaBytecodeData(parameters) {
    const { code, data } = parameters;
    return (0, _encodeDeployDataJs.encodeDeployData)({
        abi: (0, _abitype.parseAbi)([
            "constructor(bytes, bytes)"
        ]),
        bytecode: (0, _contractsJs.deploylessCallViaBytecodeBytecode),
        args: [
            code,
            data
        ]
    });
}
function toDeploylessCallViaFactoryData(parameters) {
    const { data, factory, factoryData, to } = parameters;
    return (0, _encodeDeployDataJs.encodeDeployData)({
        abi: (0, _abitype.parseAbi)([
            "constructor(address, bytes, address, bytes)"
        ]),
        bytecode: (0, _contractsJs.deploylessCallViaFactoryBytecode),
        args: [
            to,
            data,
            factory,
            factoryData
        ]
    });
}
function getRevertErrorData(err) {
    if (!(err instanceof (0, _baseJs.BaseError))) return undefined;
    const error = err.walk();
    return typeof error?.data === "object" ? error.data?.data : error.data;
}

},{"abitype":"2HM8y","../../accounts/utils/parseAccount.js":"befdU","../../constants/abis.js":"ccRP2","../../constants/contract.js":"55yxb","../../constants/contracts.js":"73488","../../errors/base.js":"4yABH","../../errors/chain.js":"kvrX6","../../errors/contract.js":"3zhkD","../../utils/abi/decodeFunctionResult.js":"kP5TX","../../utils/abi/encodeDeployData.js":"61SWJ","../../utils/abi/encodeFunctionData.js":"4kLrl","../../utils/chain/getChainContractAddress.js":"1JVSG","../../utils/encoding/toHex.js":"9rk4U","../../utils/errors/getCallError.js":"8WoLm","../../utils/formatters/extract.js":"aRpxx","../../utils/formatters/transactionRequest.js":"isW2z","../../utils/promise/createBatchScheduler.js":"hhTk9","../../utils/stateOverride.js":"dRtaj","../../utils/transaction/assertRequest.js":"k7P6b","4ee58dd6de3b4d58":"iVyGm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccRP2":[function(require,module,exports) {
/* [Multicall3](https://github.com/mds1/multicall) */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "multicall3Abi", ()=>multicall3Abi);
parcelHelpers.export(exports, "universalResolverResolveAbi", ()=>universalResolverResolveAbi);
parcelHelpers.export(exports, "universalResolverReverseAbi", ()=>universalResolverReverseAbi);
parcelHelpers.export(exports, "textResolverAbi", ()=>textResolverAbi);
parcelHelpers.export(exports, "addressResolverAbi", ()=>addressResolverAbi);
parcelHelpers.export(exports, "smartAccountAbi", ()=>smartAccountAbi);
parcelHelpers.export(exports, "universalSignatureValidatorAbi", ()=>universalSignatureValidatorAbi);
parcelHelpers.export(exports, "erc20Abi", ()=>erc20Abi);
parcelHelpers.export(exports, "erc20Abi_bytes32", ()=>erc20Abi_bytes32);
parcelHelpers.export(exports, "erc721Abi", ()=>erc721Abi);
parcelHelpers.export(exports, "erc4626Abi", ()=>erc4626Abi);
const multicall3Abi = [
    {
        inputs: [
            {
                components: [
                    {
                        name: "target",
                        type: "address"
                    },
                    {
                        name: "allowFailure",
                        type: "bool"
                    },
                    {
                        name: "callData",
                        type: "bytes"
                    }
                ],
                name: "calls",
                type: "tuple[]"
            }
        ],
        name: "aggregate3",
        outputs: [
            {
                components: [
                    {
                        name: "success",
                        type: "bool"
                    },
                    {
                        name: "returnData",
                        type: "bytes"
                    }
                ],
                name: "returnData",
                type: "tuple[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
const universalResolverErrors = [
    {
        inputs: [],
        name: "ResolverNotFound",
        type: "error"
    },
    {
        inputs: [],
        name: "ResolverWildcardNotSupported",
        type: "error"
    },
    {
        inputs: [],
        name: "ResolverNotContract",
        type: "error"
    },
    {
        inputs: [
            {
                name: "returnData",
                type: "bytes"
            }
        ],
        name: "ResolverError",
        type: "error"
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: "status",
                        type: "uint16"
                    },
                    {
                        name: "message",
                        type: "string"
                    }
                ],
                name: "errors",
                type: "tuple[]"
            }
        ],
        name: "HttpError",
        type: "error"
    }
];
const universalResolverResolveAbi = [
    ...universalResolverErrors,
    {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
            {
                name: "name",
                type: "bytes"
            },
            {
                name: "data",
                type: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes"
            },
            {
                name: "address",
                type: "address"
            }
        ]
    },
    {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
            {
                name: "name",
                type: "bytes"
            },
            {
                name: "data",
                type: "bytes"
            },
            {
                name: "gateways",
                type: "string[]"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes"
            },
            {
                name: "address",
                type: "address"
            }
        ]
    }
];
const universalResolverReverseAbi = [
    ...universalResolverErrors,
    {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [
            {
                type: "bytes",
                name: "reverseName"
            }
        ],
        outputs: [
            {
                type: "string",
                name: "resolvedName"
            },
            {
                type: "address",
                name: "resolvedAddress"
            },
            {
                type: "address",
                name: "reverseResolver"
            },
            {
                type: "address",
                name: "resolver"
            }
        ]
    },
    {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [
            {
                type: "bytes",
                name: "reverseName"
            },
            {
                type: "string[]",
                name: "gateways"
            }
        ],
        outputs: [
            {
                type: "string",
                name: "resolvedName"
            },
            {
                type: "address",
                name: "resolvedAddress"
            },
            {
                type: "address",
                name: "reverseResolver"
            },
            {
                type: "address",
                name: "resolver"
            }
        ]
    }
];
const textResolverAbi = [
    {
        name: "text",
        type: "function",
        stateMutability: "view",
        inputs: [
            {
                name: "name",
                type: "bytes32"
            },
            {
                name: "key",
                type: "string"
            }
        ],
        outputs: [
            {
                name: "",
                type: "string"
            }
        ]
    }
];
const addressResolverAbi = [
    {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [
            {
                name: "name",
                type: "bytes32"
            }
        ],
        outputs: [
            {
                name: "",
                type: "address"
            }
        ]
    },
    {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [
            {
                name: "name",
                type: "bytes32"
            },
            {
                name: "coinType",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes"
            }
        ]
    }
];
const smartAccountAbi = [
    {
        name: "isValidSignature",
        type: "function",
        stateMutability: "view",
        inputs: [
            {
                name: "hash",
                type: "bytes32"
            },
            {
                name: "signature",
                type: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4"
            }
        ]
    }
];
const universalSignatureValidatorAbi = [
    {
        inputs: [
            {
                name: "_signer",
                type: "address"
            },
            {
                name: "_hash",
                type: "bytes32"
            },
            {
                name: "_signature",
                type: "bytes"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    }
];
const erc20Abi = [
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ]
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "allowance",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "spender",
                type: "address"
            }
        ],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "uint8"
            }
        ]
    },
    {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "sender",
                type: "address"
            },
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "bool"
            }
        ]
    }
];
const erc20Abi_bytes32 = [
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ]
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "allowance",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "spender",
                type: "address"
            }
        ],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "uint8"
            }
        ]
    },
    {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "bytes32"
            }
        ]
    },
    {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "bytes32"
            }
        ]
    },
    {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "sender",
                type: "address"
            },
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "bool"
            }
        ]
    }
];
const erc721Abi = [
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: true,
                name: "tokenId",
                type: "uint256"
            }
        ]
    },
    {
        type: "event",
        name: "ApprovalForAll",
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                name: "approved",
                type: "bool"
            }
        ]
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: true,
                name: "tokenId",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "approve",
        stateMutability: "payable",
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "getApproved",
        stateMutability: "view",
        inputs: [
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "address"
            }
        ]
    },
    {
        type: "function",
        name: "isApprovedForAll",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "operator",
                type: "address"
            }
        ],
        outputs: [
            {
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "ownerOf",
        stateMutability: "view",
        inputs: [
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "owner",
                type: "address"
            }
        ]
    },
    {
        type: "function",
        name: "safeTransferFrom",
        stateMutability: "payable",
        inputs: [
            {
                name: "from",
                type: "address"
            },
            {
                name: "to",
                type: "address"
            },
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "safeTransferFrom",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "from",
                type: "address"
            },
            {
                name: "to",
                type: "address"
            },
            {
                name: "id",
                type: "uint256"
            },
            {
                name: "data",
                type: "bytes"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "setApprovalForAll",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "operator",
                type: "address"
            },
            {
                name: "approved",
                type: "bool"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "tokenByIndex",
        stateMutability: "view",
        inputs: [
            {
                name: "index",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "tokenByIndex",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "index",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "tokenId",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "tokenURI",
        stateMutability: "view",
        inputs: [
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: [
            {
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "transferFrom",
        stateMutability: "payable",
        inputs: [
            {
                name: "sender",
                type: "address"
            },
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "tokeId",
                type: "uint256"
            }
        ],
        outputs: []
    }
];
const erc4626Abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "sender",
                type: "address"
            },
            {
                indexed: true,
                name: "receiver",
                type: "address"
            },
            {
                indexed: false,
                name: "assets",
                type: "uint256"
            },
            {
                indexed: false,
                name: "shares",
                type: "uint256"
            }
        ],
        name: "Deposit",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "sender",
                type: "address"
            },
            {
                indexed: true,
                name: "receiver",
                type: "address"
            },
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: false,
                name: "assets",
                type: "uint256"
            },
            {
                indexed: false,
                name: "shares",
                type: "uint256"
            }
        ],
        name: "Withdraw",
        type: "event"
    },
    {
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "asset",
        outputs: [
            {
                name: "assetTokenAddress",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        name: "convertToAssets",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        name: "convertToShares",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            },
            {
                name: "receiver",
                type: "address"
            }
        ],
        name: "deposit",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "caller",
                type: "address"
            }
        ],
        name: "maxDeposit",
        outputs: [
            {
                name: "maxAssets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "caller",
                type: "address"
            }
        ],
        name: "maxMint",
        outputs: [
            {
                name: "maxShares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "owner",
                type: "address"
            }
        ],
        name: "maxRedeem",
        outputs: [
            {
                name: "maxShares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "owner",
                type: "address"
            }
        ],
        name: "maxWithdraw",
        outputs: [
            {
                name: "maxAssets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            },
            {
                name: "receiver",
                type: "address"
            }
        ],
        name: "mint",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        name: "previewDeposit",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        name: "previewMint",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        name: "previewRedeem",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        name: "previewWithdraw",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            },
            {
                name: "receiver",
                type: "address"
            },
            {
                name: "owner",
                type: "address"
            }
        ],
        name: "redeem",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "totalAssets",
        outputs: [
            {
                name: "totalManagedAssets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "to",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "from",
                type: "address"
            },
            {
                name: "to",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            },
            {
                name: "receiver",
                type: "address"
            },
            {
                name: "owner",
                type: "address"
            }
        ],
        name: "withdraw",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55yxb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aggregate3Signature", ()=>aggregate3Signature);
const aggregate3Signature = "0x82ad56cb";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73488":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deploylessCallViaBytecodeBytecode", ()=>deploylessCallViaBytecodeBytecode);
parcelHelpers.export(exports, "deploylessCallViaFactoryBytecode", ()=>deploylessCallViaFactoryBytecode);
parcelHelpers.export(exports, "universalSignatureValidatorByteCode", ()=>universalSignatureValidatorByteCode);
const deploylessCallViaBytecodeBytecode = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe";
const deploylessCallViaFactoryBytecode = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe";
const universalSignatureValidatorByteCode = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvrX6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChainDoesNotSupportContract", ()=>ChainDoesNotSupportContract);
parcelHelpers.export(exports, "ChainMismatchError", ()=>ChainMismatchError);
parcelHelpers.export(exports, "ChainNotFoundError", ()=>ChainNotFoundError);
parcelHelpers.export(exports, "ClientChainNotConfiguredError", ()=>ClientChainNotConfiguredError);
parcelHelpers.export(exports, "InvalidChainIdError", ()=>InvalidChainIdError);
var _baseJs = require("./base.js");
class ChainDoesNotSupportContract extends (0, _baseJs.BaseError) {
    constructor({ blockNumber, chain, contract }){
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
            metaMessages: [
                "This could be due to any of the following:",
                ...blockNumber && contract.blockCreated && contract.blockCreated > blockNumber ? [
                    `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`
                ] : [
                    `- The chain does not have the contract "${contract.name}" configured.`
                ]
            ],
            name: "ChainDoesNotSupportContract"
        });
    }
}
class ChainMismatchError extends (0, _baseJs.BaseError) {
    constructor({ chain, currentChainId }){
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} \u{2013} ${chain.name}).`, {
            metaMessages: [
                `Current Chain ID:  ${currentChainId}`,
                `Expected Chain ID: ${chain.id} \u{2013} ${chain.name}`
            ],
            name: "ChainMismatchError"
        });
    }
}
class ChainNotFoundError extends (0, _baseJs.BaseError) {
    constructor(){
        super([
            "No chain was provided to the request.",
            "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
        ].join("\n"), {
            name: "ChainNotFoundError"
        });
    }
}
class ClientChainNotConfiguredError extends (0, _baseJs.BaseError) {
    constructor(){
        super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError"
        });
    }
}
class InvalidChainIdError extends (0, _baseJs.BaseError) {
    constructor({ chainId }){
        super(typeof chainId === "number" ? `Chain ID "${chainId}" is invalid.` : "Chain ID is invalid.", {
            name: "InvalidChainIdError"
        });
    }
}

},{"./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61SWJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodeDeployData", ()=>encodeDeployData);
var _abiJs = require("../../errors/abi.js");
var _concatJs = require("../data/concat.js");
var _encodeAbiParametersJs = require("./encodeAbiParameters.js");
const docsPath = "/docs/contract/encodeDeployData";
function encodeDeployData(parameters) {
    const { abi, args, bytecode } = parameters;
    if (!args || args.length === 0) return bytecode;
    const description = abi.find((x)=>"type" in x && x.type === "constructor");
    if (!description) throw new (0, _abiJs.AbiConstructorNotFoundError)({
        docsPath
    });
    if (!("inputs" in description)) throw new (0, _abiJs.AbiConstructorParamsNotFoundError)({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new (0, _abiJs.AbiConstructorParamsNotFoundError)({
        docsPath
    });
    const data = (0, _encodeAbiParametersJs.encodeAbiParameters)(description.inputs, args);
    return (0, _concatJs.concatHex)([
        bytecode,
        data
    ]);
}

},{"../../errors/abi.js":"edx9G","../data/concat.js":"x7umB","./encodeAbiParameters.js":"ji1Pk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JVSG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getChainContractAddress", ()=>getChainContractAddress);
var _chainJs = require("../../errors/chain.js");
function getChainContractAddress({ blockNumber, chain, contract: name }) {
    const contract = chain?.contracts?.[name];
    if (!contract) throw new (0, _chainJs.ChainDoesNotSupportContract)({
        chain,
        contract: {
            name
        }
    });
    if (blockNumber && contract.blockCreated && contract.blockCreated > blockNumber) throw new (0, _chainJs.ChainDoesNotSupportContract)({
        blockNumber,
        chain,
        contract: {
            name,
            blockCreated: contract.blockCreated
        }
    });
    return contract.address;
}

},{"../../errors/chain.js":"kvrX6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WoLm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCallError", ()=>getCallError);
var _contractJs = require("../../errors/contract.js");
var _nodeJs = require("../../errors/node.js");
var _getNodeErrorJs = require("./getNodeError.js");
function getCallError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, _getNodeErrorJs.getNodeError)(err, args);
        if (cause instanceof (0, _nodeJs.UnknownNodeError)) return err;
        return cause;
    })();
    return new (0, _contractJs.CallExecutionError)(cause, {
        docsPath,
        ...args
    });
}

},{"../../errors/contract.js":"3zhkD","../../errors/node.js":"h1hyA","./getNodeError.js":"ldFPH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1hyA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExecutionRevertedError", ()=>ExecutionRevertedError);
parcelHelpers.export(exports, "FeeCapTooHighError", ()=>FeeCapTooHighError);
parcelHelpers.export(exports, "FeeCapTooLowError", ()=>FeeCapTooLowError);
parcelHelpers.export(exports, "NonceTooHighError", ()=>NonceTooHighError);
parcelHelpers.export(exports, "NonceTooLowError", ()=>NonceTooLowError);
parcelHelpers.export(exports, "NonceMaxValueError", ()=>NonceMaxValueError);
parcelHelpers.export(exports, "InsufficientFundsError", ()=>InsufficientFundsError);
parcelHelpers.export(exports, "IntrinsicGasTooHighError", ()=>IntrinsicGasTooHighError);
parcelHelpers.export(exports, "IntrinsicGasTooLowError", ()=>IntrinsicGasTooLowError);
parcelHelpers.export(exports, "TransactionTypeNotSupportedError", ()=>TransactionTypeNotSupportedError);
parcelHelpers.export(exports, "TipAboveFeeCapError", ()=>TipAboveFeeCapError);
parcelHelpers.export(exports, "UnknownNodeError", ()=>UnknownNodeError);
var _formatGweiJs = require("../utils/unit/formatGwei.js");
var _baseJs = require("./base.js");
class ExecutionRevertedError extends (0, _baseJs.BaseError) {
    constructor({ cause, message } = {}){
        const reason = message?.replace("execution reverted: ", "")?.replace("execution reverted", "");
        super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
            cause,
            name: "ExecutionRevertedError"
        });
    }
}
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FeeCapTooHighError extends (0, _baseJs.BaseError) {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, _formatGweiJs.formatGwei)(maxFeePerGas)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause,
            name: "FeeCapTooHighError"
        });
    }
}
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class FeeCapTooLowError extends (0, _baseJs.BaseError) {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, _formatGweiJs.formatGwei)(maxFeePerGas)}` : ""} gwei) cannot be lower than the block base fee.`, {
            cause,
            name: "FeeCapTooLowError"
        });
    }
}
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class NonceTooHighError extends (0, _baseJs.BaseError) {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is higher than the next one expected.`, {
            cause,
            name: "NonceTooHighError"
        });
    }
}
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});
class NonceTooLowError extends (0, _baseJs.BaseError) {
    constructor({ cause, nonce } = {}){
        super([
            `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is lower than the current nonce of the account.`,
            "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
        ].join("\n"), {
            cause,
            name: "NonceTooLowError"
        });
    }
}
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});
class NonceMaxValueError extends (0, _baseJs.BaseError) {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}exceeds the maximum allowed nonce.`, {
            cause,
            name: "NonceMaxValueError"
        });
    }
}
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});
class InsufficientFundsError extends (0, _baseJs.BaseError) {
    constructor({ cause } = {}){
        super([
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
        ].join("\n"), {
            cause,
            metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient."
            ],
            name: "InsufficientFundsError"
        });
    }
}
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds|exceeds transaction sender account balance/
});
class IntrinsicGasTooHighError extends (0, _baseJs.BaseError) {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause,
            name: "IntrinsicGasTooHighError"
        });
    }
}
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});
class IntrinsicGasTooLowError extends (0, _baseJs.BaseError) {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction is too low.`, {
            cause,
            name: "IntrinsicGasTooLowError"
        });
    }
}
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});
class TransactionTypeNotSupportedError extends (0, _baseJs.BaseError) {
    constructor({ cause }){
        super("The transaction type is not supported for this chain.", {
            cause,
            name: "TransactionTypeNotSupportedError"
        });
    }
}
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});
class TipAboveFeeCapError extends (0, _baseJs.BaseError) {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}){
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${(0, _formatGweiJs.formatGwei)(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, _formatGweiJs.formatGwei)(maxFeePerGas)} gwei` : ""}).`
        ].join("\n"), {
            cause,
            name: "TipAboveFeeCapError"
        });
    }
}
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class UnknownNodeError extends (0, _baseJs.BaseError) {
    constructor({ cause }){
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
            cause,
            name: "UnknownNodeError"
        });
    }
}

},{"../utils/unit/formatGwei.js":"5KTZD","./base.js":"4yABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldFPH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "containsNodeError", ()=>containsNodeError);
parcelHelpers.export(exports, "getNodeError", ()=>getNodeError);
var _baseJs = require("../../errors/base.js");
var _nodeJs = require("../../errors/node.js");
var _requestJs = require("../../errors/request.js");
var _rpcJs = require("../../errors/rpc.js");
function containsNodeError(err) {
    return err instanceof (0, _rpcJs.TransactionRejectedRpcError) || err instanceof (0, _rpcJs.InvalidInputRpcError) || err instanceof (0, _requestJs.RpcRequestError) && err.code === (0, _nodeJs.ExecutionRevertedError).code;
}
function getNodeError(err, args) {
    const message = (err.details || "").toLowerCase();
    const executionRevertedError = err instanceof (0, _baseJs.BaseError) ? err.walk((e)=>e.code === (0, _nodeJs.ExecutionRevertedError).code) : err;
    if (executionRevertedError instanceof (0, _baseJs.BaseError)) return new (0, _nodeJs.ExecutionRevertedError)({
        cause: err,
        message: executionRevertedError.details
    });
    if ((0, _nodeJs.ExecutionRevertedError).nodeMessage.test(message)) return new (0, _nodeJs.ExecutionRevertedError)({
        cause: err,
        message: err.details
    });
    if ((0, _nodeJs.FeeCapTooHighError).nodeMessage.test(message)) return new (0, _nodeJs.FeeCapTooHighError)({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if ((0, _nodeJs.FeeCapTooLowError).nodeMessage.test(message)) return new (0, _nodeJs.FeeCapTooLowError)({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if ((0, _nodeJs.NonceTooHighError).nodeMessage.test(message)) return new (0, _nodeJs.NonceTooHighError)({
        cause: err,
        nonce: args?.nonce
    });
    if ((0, _nodeJs.NonceTooLowError).nodeMessage.test(message)) return new (0, _nodeJs.NonceTooLowError)({
        cause: err,
        nonce: args?.nonce
    });
    if ((0, _nodeJs.NonceMaxValueError).nodeMessage.test(message)) return new (0, _nodeJs.NonceMaxValueError)({
        cause: err,
        nonce: args?.nonce
    });
    if ((0, _nodeJs.InsufficientFundsError).nodeMessage.test(message)) return new (0, _nodeJs.InsufficientFundsError)({
        cause: err
    });
    if ((0, _nodeJs.IntrinsicGasTooHighError).nodeMessage.test(message)) return new (0, _nodeJs.IntrinsicGasTooHighError)({
        cause: err,
        gas: args?.gas
    });
    if ((0, _nodeJs.IntrinsicGasTooLowError).nodeMessage.test(message)) return new (0, _nodeJs.IntrinsicGasTooLowError)({
        cause: err,
        gas: args?.gas
    });
    if ((0, _nodeJs.TransactionTypeNotSupportedError).nodeMessage.test(message)) return new (0, _nodeJs.TransactionTypeNotSupportedError)({
        cause: err
    });
    if ((0, _nodeJs.TipAboveFeeCapError).nodeMessage.test(message)) return new (0, _nodeJs.TipAboveFeeCapError)({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas,
        maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
    return new (0, _nodeJs.UnknownNodeError)({
        cause: err
    });
}

},{"../../errors/base.js":"4yABH","../../errors/node.js":"h1hyA","../../errors/request.js":"gfO3n","../../errors/rpc.js":"2an5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRpxx":[function(require,module,exports) {
/**
 * @description Picks out the keys from `value` that exist in the formatter..
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extract", ()=>extract);
function extract(value_, { format }) {
    if (!format) return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys){
            if (key in value_) value[key] = value_[key];
            if (formatted[key] && typeof formatted[key] === "object" && !Array.isArray(formatted[key])) extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isW2z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rpcTransactionType", ()=>rpcTransactionType);
parcelHelpers.export(exports, "formatTransactionRequest", ()=>formatTransactionRequest);
parcelHelpers.export(exports, "defineTransactionRequest", ()=>defineTransactionRequest);
var _toHexJs = require("../encoding/toHex.js");
var _formatterJs = require("./formatter.js");
const rpcTransactionType = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2",
    eip4844: "0x3",
    eip7702: "0x4"
};
function formatTransactionRequest(request) {
    const rpcRequest = {};
    if (typeof request.authorizationList !== "undefined") rpcRequest.authorizationList = formatAuthorizationList(request.authorizationList);
    if (typeof request.accessList !== "undefined") rpcRequest.accessList = request.accessList;
    if (typeof request.blobVersionedHashes !== "undefined") rpcRequest.blobVersionedHashes = request.blobVersionedHashes;
    if (typeof request.blobs !== "undefined") {
        if (typeof request.blobs[0] !== "string") rpcRequest.blobs = request.blobs.map((x)=>(0, _toHexJs.bytesToHex)(x));
        else rpcRequest.blobs = request.blobs;
    }
    if (typeof request.data !== "undefined") rpcRequest.data = request.data;
    if (typeof request.from !== "undefined") rpcRequest.from = request.from;
    if (typeof request.gas !== "undefined") rpcRequest.gas = (0, _toHexJs.numberToHex)(request.gas);
    if (typeof request.gasPrice !== "undefined") rpcRequest.gasPrice = (0, _toHexJs.numberToHex)(request.gasPrice);
    if (typeof request.maxFeePerBlobGas !== "undefined") rpcRequest.maxFeePerBlobGas = (0, _toHexJs.numberToHex)(request.maxFeePerBlobGas);
    if (typeof request.maxFeePerGas !== "undefined") rpcRequest.maxFeePerGas = (0, _toHexJs.numberToHex)(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== "undefined") rpcRequest.maxPriorityFeePerGas = (0, _toHexJs.numberToHex)(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== "undefined") rpcRequest.nonce = (0, _toHexJs.numberToHex)(request.nonce);
    if (typeof request.to !== "undefined") rpcRequest.to = request.to;
    if (typeof request.type !== "undefined") rpcRequest.type = rpcTransactionType[request.type];
    if (typeof request.value !== "undefined") rpcRequest.value = (0, _toHexJs.numberToHex)(request.value);
    return rpcRequest;
}
const defineTransactionRequest = /*#__PURE__*/ (0, _formatterJs.defineFormatter)("transactionRequest", formatTransactionRequest);
//////////////////////////////////////////////////////////////////////////////
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization)=>({
            address: authorization.contractAddress,
            r: authorization.r,
            s: authorization.s,
            chainId: (0, _toHexJs.numberToHex)(authorization.chainId),
            nonce: (0, _toHexJs.numberToHex)(authorization.nonce),
            ...typeof authorization.yParity !== "undefined" ? {
                yParity: (0, _toHexJs.numberToHex)(authorization.yParity)
            } : {},
            ...typeof authorization.v !== "undefined" && typeof authorization.yParity === "undefined" ? {
                v: (0, _toHexJs.numberToHex)(authorization.v)
            } : {}
        }));
}

},{"../encoding/toHex.js":"9rk4U","./formatter.js":"jWhrb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jWhrb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defineFormatter", ()=>defineFormatter);
function defineFormatter(type, format) {
    return ({ exclude, format: overrides })=>{
        return {
            exclude,
            format: (args)=>{
                const formatted = format(args);
                if (exclude) for (const key of exclude)delete formatted[key];
                return {
                    ...formatted,
                    ...overrides(args)
                };
            },
            type
        };
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhTk9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @internal */ parcelHelpers.export(exports, "createBatchScheduler", ()=>createBatchScheduler);
const schedulerCache = /*#__PURE__*/ new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, sort }) {
    const exec = async ()=>{
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args })=>args);
        if (args.length === 0) return;
        fn(args).then((data)=>{
            if (sort && Array.isArray(data)) data.sort(sort);
            for(let i = 0; i < scheduler.length; i++){
                const { pendingPromise } = scheduler[i];
                pendingPromise.resolve?.([
                    data[i],
                    data
                ]);
            }
        }).catch((err)=>{
            for(let i = 0; i < scheduler.length; i++){
                const { pendingPromise } = scheduler[i];
                pendingPromise.reject?.(err);
            }
        });
    };
    const flush = ()=>schedulerCache.delete(id);
    const getBatchedArgs = ()=>getScheduler().map(({ args })=>args);
    const getScheduler = ()=>schedulerCache.get(id) || [];
    const setScheduler = (item)=>schedulerCache.set(id, [
            ...getScheduler(),
            item
        ]);
    return {
        flush,
        async schedule (args) {
            const pendingPromise = {};
            const promise = new Promise((resolve, reject)=>{
                pendingPromise.resolve = resolve;
                pendingPromise.reject = reject;
            });
            const split = shouldSplitBatch?.([
                ...getBatchedArgs(),
                args
            ]);
            if (split) exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({
                    args,
                    pendingPromise
                });
                return promise;
            }
            setScheduler({
                args,
                pendingPromise
            });
            setTimeout(exec, wait);
            return promise;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRtaj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @internal */ parcelHelpers.export(exports, "serializeStateMapping", ()=>serializeStateMapping);
/** @internal */ parcelHelpers.export(exports, "serializeAccountStateOverride", ()=>serializeAccountStateOverride);
/** @internal */ parcelHelpers.export(exports, "serializeStateOverride", ()=>serializeStateOverride);
var _addressJs = require("../errors/address.js");
var _dataJs = require("../errors/data.js");
var _stateOverrideJs = require("../errors/stateOverride.js");
var _isAddressJs = require("./address/isAddress.js");
var _toHexJs = require("./encoding/toHex.js");
function serializeStateMapping(stateMapping) {
    if (!stateMapping || stateMapping.length === 0) return undefined;
    return stateMapping.reduce((acc, { slot, value })=>{
        if (slot.length !== 66) throw new (0, _dataJs.InvalidBytesLengthError)({
            size: slot.length,
            targetSize: 66,
            type: "hex"
        });
        if (value.length !== 66) throw new (0, _dataJs.InvalidBytesLengthError)({
            size: value.length,
            targetSize: 66,
            type: "hex"
        });
        acc[slot] = value;
        return acc;
    }, {});
}
function serializeAccountStateOverride(parameters) {
    const { balance, nonce, state, stateDiff, code } = parameters;
    const rpcAccountStateOverride = {};
    if (code !== undefined) rpcAccountStateOverride.code = code;
    if (balance !== undefined) rpcAccountStateOverride.balance = (0, _toHexJs.numberToHex)(balance);
    if (nonce !== undefined) rpcAccountStateOverride.nonce = (0, _toHexJs.numberToHex)(nonce);
    if (state !== undefined) rpcAccountStateOverride.state = serializeStateMapping(state);
    if (stateDiff !== undefined) {
        if (rpcAccountStateOverride.state) throw new (0, _stateOverrideJs.StateAssignmentConflictError)();
        rpcAccountStateOverride.stateDiff = serializeStateMapping(stateDiff);
    }
    return rpcAccountStateOverride;
}
function serializeStateOverride(parameters) {
    if (!parameters) return undefined;
    const rpcStateOverride = {};
    for (const { address, ...accountState } of parameters){
        if (!(0, _isAddressJs.isAddress)(address, {
            strict: false
        })) throw new (0, _addressJs.InvalidAddressError)({
            address
        });
        if (rpcStateOverride[address]) throw new (0, _stateOverrideJs.AccountStateConflictError)({
            address: address
        });
        rpcStateOverride[address] = serializeAccountStateOverride(accountState);
    }
    return rpcStateOverride;
}

},{"../errors/address.js":"aXG3R","../errors/data.js":"lKIWZ","../errors/stateOverride.js":"4k5xW","./address/isAddress.js":"8I3zw","./encoding/toHex.js":"9rk4U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k7P6b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assertRequest", ()=>assertRequest);
var _parseAccountJs = require("../../accounts/utils/parseAccount.js");
var _addressJs = require("../../errors/address.js");
var _nodeJs = require("../../errors/node.js");
var _transactionJs = require("../../errors/transaction.js");
var _isAddressJs = require("../address/isAddress.js");
function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
    const account = account_ ? (0, _parseAccountJs.parseAccount)(account_) : undefined;
    if (account && !(0, _isAddressJs.isAddress)(account.address)) throw new (0, _addressJs.InvalidAddressError)({
        address: account.address
    });
    if (to && !(0, _isAddressJs.isAddress)(to)) throw new (0, _addressJs.InvalidAddressError)({
        address: to
    });
    if (typeof gasPrice !== "undefined" && (typeof maxFeePerGas !== "undefined" || typeof maxPriorityFeePerGas !== "undefined")) throw new (0, _transactionJs.FeeConflictError)();
    if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n) throw new (0, _nodeJs.FeeCapTooHighError)({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new (0, _nodeJs.TipAboveFeeCapError)({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
}

},{"../../accounts/utils/parseAccount.js":"befdU","../../errors/address.js":"aXG3R","../../errors/node.js":"h1hyA","../../errors/transaction.js":"6z6vx","../address/isAddress.js":"8I3zw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVyGm":[function(require,module,exports) {
module.exports = Promise.all([
    require("e34e6a8049ddcc38")(require("a043f4f68c27d740").getBundleURL("dIYk7") + "ccip.edcb9007.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("e34e6a8049ddcc38")(require("a043f4f68c27d740").getBundleURL("dIYk7") + "ccip.994c5035.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("5zATs"));

},{"e34e6a8049ddcc38":"61B45","a043f4f68c27d740":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["hdVcO"], null, "parcelRequirebc19")

//# sourceMappingURL=ccip.edcb9007.js.map
