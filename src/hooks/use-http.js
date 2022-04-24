"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var useHTTP = function (initLoadingStatus) {
    if (initLoadingStatus === void 0) { initLoadingStatus = false; }
    var _a = (0, react_1.useState)({
        skills: [],
        education: [],
        projects: []
    }), response = _a[0], setResponse = _a[1];
    var _b = (0, react_1.useState)(initLoadingStatus), isLoading = _b[0], setIsLoading = _b[1];
    var _c = (0, react_1.useState)(''), error = _c[0], setError = _c[1];
    var transformFetchedData = function (data) {
        var skills = [];
        if (data.skills) {
            var fetchedSkills_1 = data.skills;
            skills = Object.keys(fetchedSkills_1).map(function (id) {
                return __assign(__assign({}, fetchedSkills_1[id]), { id: id });
            });
        }
        var education = [];
        if (data.education) {
            var fetchedEducation_1 = data.education;
            education = Object.keys(fetchedEducation_1).map(function (id) {
                return __assign(__assign({}, fetchedEducation_1[id]), { id: id });
            });
        }
        var projects = [];
        if (data.projects) {
            var fetchedProjects_1 = data.projects;
            projects = Object.keys(fetchedProjects_1).map(function (id) {
                return __assign(__assign({}, fetchedProjects_1[id]), { id: id, technologies: fetchedProjects_1[id].technologies
                        ? Object.values(fetchedProjects_1[id].technologies)
                        : [], category: fetchedProjects_1[id].category
                        ? Object.values(fetchedProjects_1[id].category)
                        : [] });
            });
        }
        return {
            skills: skills,
            education: education,
            projects: projects
        };
    };
    var request = (0, react_1.useCallback)(function (config) { return __awaiter(void 0, void 0, void 0, function () {
        var request_1, transformedData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].request(config)];
                case 2:
                    request_1 = _a.sent();
                    transformedData = transformFetchedData(request_1.data);
                    setResponse(transformedData);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setError(error_1.message || error_1);
                    return [3 /*break*/, 4];
                case 4:
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var resetError = function () {
        setError('');
    };
    return {
        request: request,
        response: response,
        isLoading: isLoading,
        error: error,
        resetError: resetError
    };
};
exports["default"] = useHTTP;
