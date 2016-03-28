/* Generated by Babel */
// Define parser
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lex = require('./lex');

var _lex2 = _interopRequireDefault(_lex);

var _tks = require('./tks');

var _tks2 = _interopRequireDefault(_tks);

var _chars = require('../chars');

var CheddarParser = (function () {
    function CheddarParser(Code, Index) {
        _classCallCheck(this, CheddarParser);

        this.Code = Code;
        this.Index = Index;

        this._Tokens = [];
    }

    // Parse from tokenized result

    _createClass(CheddarParser, [{
        key: 'parse',
        value: function parse(parseClass) {
            if (parseClass.prototype instanceof _lex2['default']) {
                var _ref;

                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                var Parser = (_ref = new parseClass(this.Code, this.Index)).exec.apply(_ref, args);

                this._Tokens.push(Parser.Tokens);
                this.Index = Parser.Index;
                console.log(JUMP_WHITE);
                return this;
            } else {
                throw new TypeError('CheddarParser: provided parser is not a CheddarLexer');
            }
        }
    }, {
        key: 'jumpwhite',
        value: function jumpwhite() {
            while (_chars.WHITESPACE.indexOf(this.Code[this.Index]) > -1) this.Index++;
        }
    }, {
        key: 'Tokens',
        get: function get() {
            return this._Tokens instanceof _tks2['default'] ? this._Tokens : new _tks2['default'](this._Tokens);
        },
        set: function set(v) {
            if (v instanceof _tks2['default'] || v instanceof Array) this._Tokens = v;
        }
    }]);

    return CheddarParser;
})();

exports['default'] = CheddarParser;
module.exports = exports['default'];