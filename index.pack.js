/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: Unknown plugin \"babel-plugin-transform-object-rest-spread\" specified in \"D:\\\\shafi2\\\\programming\\\\2023\\\\React\\\\scrimba\\\\memeGenerator\\\\.babelrc\" at 0, attempted to resolve relative to \"D:\\\\shafi2\\\\programming\\\\2023\\\\React\\\\scrimba\\\\memeGenerator\"\n    at D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:180:17\n    at Array.map (<anonymous>)\n    at Function.normalisePlugins (D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:158:20)\n    at OptionManager.mergeOptions (D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:234:36)\n    at OptionManager.init (D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-loader\\lib\\index.js:50:20)\n    at module.exports (D:\\shafi2\\programming\\2023\\React\\scrimba\\memeGenerator\\node_modules\\babel-loader\\lib\\index.js:173:20)");

/***/ })
/******/ ]);