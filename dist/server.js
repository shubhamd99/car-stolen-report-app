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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/controllers/auth.ts":
/*!****************************************!*\
  !*** ./src/server/controllers/auth.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// User Register\nexports.handleRegister = function (req, res, db, bcrypt) {\n    var _a = req.body, email = _a.email, name = _a.name, password = _a.password;\n    if (!email || !name || !password) {\n        return res.status(400).json('incorrect form submission');\n    }\n    // encrypt password\n    var hash = bcrypt.hashSync(password, 10, function (err, hash) { return hash; });\n    // Transactions allow correct recovery from failures\n    db.transaction(function (trx) {\n        trx.insert({\n            hash: hash,\n            email: email,\n            name: name\n        })\n            .into('users')\n            .returning('*')\n            .then(function (result) {\n            return res.status(200).json(result);\n        })\n            // commit incase of success\n            .then(trx.commit)\n            // rollback incase of failure\n            .catch(function (err) {\n            // console.log(\"err\", err);\n            trx.rollback;\n            res.status(400).json('email already exists');\n        });\n    })\n        .catch(function (err) { return res.status(400).json('unable to register'); });\n};\n// User Signin\nexports.handleSignin = function (req, res, db, bcrypt) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, email, password, subquery, getUnAssignedComplains;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, email = _a.email, password = _a.password;\n                if (!email || !password) {\n                    return [2 /*return*/, res.status(400).json('incorrect form submission')];\n                }\n                subquery = db.select('fk_complains_id').from('users').whereNotNull('fk_complains_id');\n                return [4 /*yield*/, db('complains').whereNotIn('id', subquery)];\n            case 1:\n                getUnAssignedComplains = _b.sent();\n                // console.log(\"getUnAssignedComplains\", getUnAssignedComplains);\n                db.select('email', 'hash').from('users')\n                    .where('email', '=', email)\n                    .then(function (data) {\n                    // compare password hash\n                    var isValid = bcrypt.compareSync(password, data[0].hash);\n                    if (isValid) {\n                        return db.select('id', 'email', 'name', 'created_at', 'status', 'fk_complains_id').from('users')\n                            .where('email', '=', email)\n                            .then(function (user) {\n                            var model = { status: 'online' };\n                            if (user[0].fk_complains_id === null && getUnAssignedComplains.length) {\n                                model = {\n                                    status: 'online',\n                                    fk_complains_id: getUnAssignedComplains[0].id,\n                                };\n                            }\n                            db.transaction(function (trx) {\n                                trx('users').where({ id: user[0].id })\n                                    .update(model)\n                                    .returning('*')\n                                    .then(function (result) {\n                                    return res.status(200).json(result[0]);\n                                })\n                                    .then(trx.commit)\n                                    .catch(function (error) { return res.status(200).json(user[0]); });\n                            })\n                                .catch(function (err) { return res.status(200).json(user[0]); });\n                        })\n                            .catch(function (err) { return res.status(400).json('unable to get user'); });\n                    }\n                    else {\n                        res.status(400).json('wrong credentials');\n                    }\n                })\n                    .catch(function (err) { return res.status(400).json('wrong email id'); });\n                return [2 /*return*/];\n        }\n    });\n}); };\n// User Logout\nexports.handleLogout = function (req, res, db, bcrypt) {\n    var id = req.params.id;\n    if (!id) {\n        return res.status(400).json('incorrect form submission');\n    }\n    db('users').where({ id: id })\n        .update({\n        status: 'offline',\n    })\n        .returning('*')\n        .then(function (result) {\n        return res.status(200).json(result);\n    })\n        .catch(function (err) { return res.status(400).json('Unable to log out'); });\n};\n\n\n//# sourceURL=webpack:///./src/server/controllers/auth.ts?");

/***/ }),

/***/ "./src/server/controllers/complains.ts":
/*!*********************************************!*\
  !*** ./src/server/controllers/complains.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// Create Complains\nexports.handlePostComplains = function (req, res, db) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, carModelNumber, note, officersOnline;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, carModelNumber = _a.carModelNumber, note = _a.note;\n                return [4 /*yield*/, db('users').where({ status: 'online', fk_complains_id: null })];\n            case 1:\n                officersOnline = _b.sent();\n                // console.log(\"driversOnline\", officersOnline)\n                db.transaction(function (trx) {\n                    trx.insert({\n                        car_model: carModelNumber,\n                        notes: note,\n                    })\n                        .into('complains')\n                        .returning('*')\n                        .then(function (result) {\n                        // console.log(\"result\", result);\n                        if (officersOnline.length) {\n                            return trx('users').where({ id: officersOnline[0].id })\n                                .update({ fk_complains_id: result[0].id })\n                                .then(function (result2) {\n                                return res.status(200).json(result[0]);\n                            })\n                                .then(trx.commit)\n                                .catch(function (err) {\n                                // console.log(\"err\", err);\n                                res.status(400).json('wrong credentials');\n                            });\n                        }\n                        else {\n                            return res.status(200).json(result[0]);\n                        }\n                    })\n                        .then(trx.commit)\n                        .catch(function (err) {\n                        // console.log(\"err\", err)\n                        trx.rollback;\n                        res.status(400).json('Error posting complains');\n                    });\n                })\n                    .catch(function (err) { return res.status(400).json('Error posting complains'); });\n                return [2 /*return*/];\n        }\n    });\n}); };\n// Fetch Complains\nexports.handleGetComplains = function (req, res, db) {\n    // select complains.*, users.* from complains left join users on complains.id = users.fk_complains_id;\n    db.select('complains.*', 'users.name as officer_name', 'users.email as officer_email', 'users.status as officer_status', 'users.id as officer_user_id')\n        .from('complains').leftJoin('users', 'complains.id', 'users.fk_complains_id')\n        .then(function (complains) {\n        if (complains.length) {\n            res.json(complains);\n        }\n        else {\n            res.status(400).json('Complains Not Found');\n        }\n    })\n        .catch(function (err) { return res.status(400).json('Error getting complains'); });\n};\n// Update Complains Status\nexports.handleUpdateComplainsStatus = function (req, res, db) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, id, isCompleted, officerWithLoad;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, id = _a.id, isCompleted = _a.isCompleted;\n                if (isCompleted === \"undefined\") {\n                    return [2 /*return*/, res.status(400).json('incorrect form submission')];\n                }\n                return [4 /*yield*/, db('users').where('fk_complains_id', id)];\n            case 1:\n                officerWithLoad = _b.sent();\n                // console.log(\"officerWithLoad\", officerWithLoad);\n                db.transaction(function (trx) {\n                    trx('complains').where({ id: id })\n                        .update({\n                        is_completed: isCompleted,\n                    })\n                        .returning('*')\n                        .then(function (result) {\n                        // console.log(\"result\", result[0]);\n                        // If Complain status is completed, we will un-assign it from officers\n                        if (result[0].is_completed === true && officerWithLoad.length) {\n                            return trx('users').where({ id: officerWithLoad[0].id })\n                                .update({ fk_complains_id: null })\n                                .then(function (result2) {\n                                return res.status(200).json(result[0]);\n                            })\n                                .then(trx.commit)\n                                .catch(function (err) {\n                                res.status(200).json(result);\n                            });\n                        }\n                        else {\n                            return res.status(200).json(result);\n                        }\n                    })\n                        .then(trx.commit)\n                        .catch(function (err) {\n                        // console.log(\"err\", err)\n                        res.status(400).json('Unable to update the complain status');\n                    });\n                })\n                    .catch(function (err) { return res.status(400).json('Unable to update the complain status'); });\n                return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/server/controllers/complains.ts?");

/***/ }),

/***/ "./src/server/middleware/logger.ts":
/*!*****************************************!*\
  !*** ./src/server/middleware/logger.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar moment = __webpack_require__(/*! moment */ \"moment\");\nvar colors = __webpack_require__(/*! colors */ \"colors\");\nvar logger = function (req, res, next) {\n    console.log(colors.cyan(req.protocol + \"://\" + req.get('host') + req.originalUrl + \" : \" + moment().format()));\n    // http://localhost:5000/ :  2019-06-23T21:18:43+05:30\n    next();\n};\nexports.default = logger;\n\n\n//# sourceURL=webpack:///./src/server/middleware/logger.ts?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nvar knex = __webpack_require__(/*! knex */ \"knex\");\nvar auth_1 = __webpack_require__(/*! ./controllers/auth */ \"./src/server/controllers/auth.ts\");\nvar complains_1 = __webpack_require__(/*! ./controllers/complains */ \"./src/server/controllers/complains.ts\");\nvar db = knex({\n    client: 'pg',\n    connection: function () {\n        return {\n            host: '127.0.0.1',\n            user: 'postgres',\n            password: 'test',\n            database: 'postgres',\n            port: '5435'\n        };\n    }\n});\nvar router = express.Router();\n// For Testing\nrouter.get('/hello', function (req, res, next) {\n    res.json('Hello World');\n    next();\n});\n// APIs\nrouter.post('/signin', function (req, res) { auth_1.handleSignin(req, res, db, bcrypt); });\nrouter.post('/register', function (req, res) { auth_1.handleRegister(req, res, db, bcrypt); });\nrouter.put('/logout/:id', function (req, res) { auth_1.handleLogout(req, res, db, bcrypt); });\nrouter.get('/complains', function (req, res) { complains_1.handleGetComplains(req, res, db); });\nrouter.post('/complains', function (req, res) { complains_1.handlePostComplains(req, res, db); });\nrouter.put('/complains/:id', function (req, res) { complains_1.handleUpdateComplainsStatus(req, res, db); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\nvar logger_1 = __webpack_require__(/*! ./middleware/logger */ \"./src/server/middleware/logger.ts\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar app = express();\n// Init middleware\napp.use(logger_1.default);\napp.use(cors());\n// body-parser (express middleware) that reads a form's input and stores it as a javascript object accessible through req.body\napp.use(bodyParser.json());\n// API Routes\napp.use('/api', routes_1.default);\n// Path used by client /*\napp.use(express.static(path.join(__dirname, '../public')));\napp.get('*', function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });\nvar port = Number(process.env.PORT) || 8000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"colors\");\n\n//# sourceURL=webpack:///external_%22colors%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"knex\");\n\n//# sourceURL=webpack:///external_%22knex%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });