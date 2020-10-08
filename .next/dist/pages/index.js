'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Crowdfunding DAPP\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }, 'View Campaign')),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Campaign',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfX3Byb3RvX18iLCJhcHBseSIsImFyZ3VtZW50cyIsImtleSIsInZhbHVlIiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImZsb2F0ZWQiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBTEEsSUFBSUEsZUFBZSw4Q0FBbkI7OztBQU9BLElBQUlDLGdCQUFnQixVQUFVQyxVQUFWLEVBQXNCO0FBQ3hDLDBCQUFVRCxhQUFWLEVBQXlCQyxVQUF6Qjs7QUFFQSxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCLGtDQUFnQixJQUFoQixFQUFzQkEsYUFBdEI7O0FBRUEsV0FBTyx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0EsY0FBY0UsU0FBZCxJQUEyQiw4QkFBdUJGLGFBQXZCLENBQTVCLEVBQW1FRyxLQUFuRSxDQUF5RSxJQUF6RSxFQUErRUMsU0FBL0UsQ0FBakMsQ0FBUDtBQUNEOztBQUVELDZCQUFhSixhQUFiLEVBQTRCLENB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U0FBYixFQUExQixDQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDQSxtQkFBSyxLQUFMO0FBQ0UsdUJBQU9zQixTQUFTUSxJQUFULEVBQVA7QUFYSjtBQWFEO0FBQ0YsU0FoQk0sRUFnQkpYLE9BaEJJLEVBZ0JLLElBaEJMLENBQVA7QUFpQkQsT0FuQjBDLENBQWhDLENBQVg7O0FBcUJBLGVBQVNZLGVBQVQsR0FBMkI7QUFDekIsZUFBT2QsS0FBS3hCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT3FDLGVBQVA7QUFDRCxLQTNCTTtBQUZKLEdBQUQsQ0E5Rko7O0FBOEhBLFNBQU96QyxhQUFQO0FBQ0QsQ0F4SW1CLGtCQUFwQjs7a0JBMEllQSxhIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnRDpcXFxcQ3Jvd2RmdW5kaW5nIERBUFBcXFxccGFnZXNcXFxcaW5kZXguanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcblxudmFyIENhbXBhaWduSW5kZXggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2FtcGFpZ25JbmRleCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2FtcGFpZ25JbmRleCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FtcGFpZ25JbmRleCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENhbXBhaWduSW5kZXguX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQ2FtcGFpZ25JbmRleCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhbXBhaWduSW5kZXgsIFt7XG4gICAga2V5OiAncmVuZGVyQ2FtcGFpZ25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgTGluayxcbiAgICAgICAgICAgIHsgcm91dGU6ICcvY2FtcGFpZ25zLycgKyBhZGRyZXNzLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdWaWV3IENhbXBhaWduJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkdyb3VwLCB7IGl0ZW1zOiBpdGVtcywgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDI3XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMYXlvdXQsXG4gICAgICAgIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnT3BlbiBDYW1wYWlnbnMnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgTGluayxcbiAgICAgICAgICAgIHsgcm91dGU6ICcvY2FtcGFpZ25zL25ldycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzNlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzN1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICAgICAgICBmbG9hdGVkOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdDcmVhdGUgQ2FtcGFpZ24nLFxuICAgICAgICAgICAgICAgIGljb246ICdhZGQgY2lyY2xlJyxcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnJlbmRlckNhbXBhaWducygpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdnZXRJbml0aWFsUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgIHZhciBjYW1wYWlnbnM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FtcGFpZ25zID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCB7IGNhbXBhaWduczogY2FtcGFpZ25zIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBDYW1wYWlnbkluZGV4O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4OyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfX3Byb3RvX18iLCJhcHBseSIsImFyZ3VtZW50cyIsImtleSIsInZhbHVlIiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImZsb2F0ZWQiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBTEEsSUFBSUEsZUFBZSw4Q0FBbkI7OztBQU9BLElBQUlDLGdCQUFnQixVQUFVQyxVQUFWLEVBQXNCO0FBQ3hDLDBCQUFVRCxhQUFWLEVBQXlCQyxVQUF6Qjs7QUFFQSxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCLGtDQUFnQixJQUFoQixFQUFzQkEsYUFBdEI7O0FBRUEsV0FBTyx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0EsY0FBY0UsU0FBZCxJQUEyQiw4QkFBdUJGLGFBQXZCLENBQTVCLEVBQW1FRyxLQUFuRSxDQUF5RSxJQUF6RSxFQUErRUMsU0FBL0UsQ0FBakMsQ0FBUDtBQUNEOztBQUVELDZCQUFhSixhQUFiLEVBQTRCLENBQUM7QUFDM0JLLFNBQUssaUJBRHNCO0FBRTNCQyxXQUFPLFNBQVNDLGVBQVQsR0FBMkI7QUFDaEMsVUFBSUMsUUFBUSxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDdEQsZUFBTztBQUNMQyxrQkFBUUQsT0FESDtBQUVMRSx1QkFBYSxnQkFBTUMsYUFBTixlQUVYLEVBQUVDLE9BQU8sZ0JBQWdCSixPQUF6QixFQUFrQ0ssVUFBVTtBQUN4Q0Msd0JBQVVuQixZQUQ4QjtBQUV4Q29CLDBCQUFZO0FBRjRCO0FBQTVDLFdBRlcsRUFPWCxnQkFBTUosYUFBTixDQUNFLEdBREYsRUFFRTtBQUNFRSxzQkFBVTtBQUNSQyx3QkFBVW5CLFlBREY7QUFFUm9CLDBCQUFZO0FBRko7QUFEWixXQUZGLEVBUUUsZUFSRixDQVBXLENBRlI7QUFvQkxDLGlCQUFPO0FBcEJGLFNBQVA7QUFzQkQsT0F2QlcsQ0FBWjs7QUF5QkEsYUFBTyxnQkFBTUwsYUFBTixDQUFvQixzQkFBS00sS0FBekIsRUFBZ0MsRUFBRWIsT0FBT0EsS0FBVCxFQUFnQlMsVUFBVTtBQUM3REMsb0JBQVVuQixZQURtRDtBQUU3RG9CLHNCQUFZO0FBRmlEO0FBQTFCLE9BQWhDLENBQVA7QUFLRDtBQWpDMEIsR0FBRCxFQWtDekI7QUFDRGQsU0FBSyxRQURKO0FBRURDLFdBQU8sU0FBU2dCLE1BQVQsR0FBa0I7QUFDdkIsYUFBTyxnQkFBTVAsYUFBTixtQkFFTDtBQUNFRSxrQkFBVTtBQUNSQyxvQkFBVW5CLFlBREY7QUFFUm9CLHNCQUFZO0FBRko7QUFEWixPQUZLLEVBUUwsZ0JBQU1KLGFBQU4sQ0FDRSxLQURGLEVBRUU7QUFDRUUsa0JBQVU7QUFDUkMsb0JBQVVuQixZQURGO0FBRVJvQixzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLGdCQUFNSixhQUFOLENBQ0UsSUFERixFQUVFO0FBQ0VFLGtCQUFVO0FBQ1JDLG9CQUFVbkIsWUFERjtBQUVSb0Isc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxnQkFSRixDQVJGLEVBa0JFLGdCQUFNSixhQUFOLGVBRUUsRUFBRUMsT0FBTyxnQkFBVCxFQUEyQkMsVUFBVTtBQUNqQ0Msb0JBQVVuQixZQUR1QjtBQUVqQ29CLHNCQUFZO0FBRnFCO0FBQXJDLE9BRkYsRUFPRSxnQkFBTUosYUFBTixDQUNFLEdBREYsRUFFRTtBQUNFRSxrQkFBVTtBQUNSQyxvQkFBVW5CLFlBREY7QUFFUm9CLHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsZ0JBQU1KLGFBQU4sMEJBQTRCO0FBQzFCUSxpQkFBUyxPQURpQjtBQUUxQkMsaUJBQVMsaUJBRmlCO0FBRzFCQyxjQUFNLFlBSG9CO0FBSTFCQyxpQkFBUyxJQUppQjtBQUsxQlQsa0JBQVU7QUFDUkMsb0JBQVVuQixZQURGO0FBRVJvQixzQkFBWTtBQUZKO0FBTGdCLE9BQTVCLENBUkYsQ0FQRixDQWxCRixFQTZDRSxLQUFLWixlQUFMLEVBN0NGLENBUkssQ0FBUDtBQXdERDtBQTNEQSxHQWxDeUIsQ0FBNUIsRUE4RkksQ0FBQztBQUNIRixTQUFLLGlCQURGO0FBRUhDLFdBQU8sWUFBWTtBQUNqQixVQUFJcUIsT0FBTyxpQ0FBbUIsYUFBYSxzQkFBb0JDLElBQXBCLENBQXlCLFNBQVNDLE9BQVQsR0FBbUI7QUFDckYsWUFBSW5CLFNBQUo7QUFDQSxlQUFPLHNCQUFvQm9CLElBQXBCLENBQXlCLFNBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCO0FBQzFELGlCQUFPLENBQVAsRUFBVTtBQUNSLG9CQUFRQSxTQUFTQyxJQUFULEdBQWdCRCxTQUFTRSxJQUFqQztBQUNFLG1CQUFLLENBQUw7QUFDRUYseUJBQVNFLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQSx1QkFBTyxrQkFBUUMsT0FBUixDQUFnQkMsb0JBQWhCLEdBQXVDQyxJQUF2QyxFQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDRTNCLDRCQUFZc0IsU0FBU00sSUFBckI7QUFDQSx1QkFBT04sU0FBU08sTUFBVCxDQUFnQixRQUFoQixFQUEwQixFQUFFN0IsV0FBV0EsU0FBYixFQUExQixDQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDQSxtQkFBSyxLQUFMO0FBQ0UsdUJBQU9zQixTQUFTUSxJQUFULEVBQVA7QUFYSjtBQWFEO0FBQ0YsU0FoQk0sRUFnQkpYLE9BaEJJLEVBZ0JLLElBaEJMLENBQVA7QUFpQkQsT0FuQjBDLENBQWhDLENBQVg7O0FBcUJBLGVBQVNZLGVBQVQsR0FBMkI7QUFDekIsZUFBT2QsS0FBS3hCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT3FDLGVBQVA7QUFDRCxLQTNCTTtBQUZKLEdBQUQsQ0E5Rko7O0FBOEhBLFNBQU96QyxhQUFQO0FBQ0QsQ0F4SW1CLGtCQUFwQjs7a0JBMEllQSxhIiwiZmlsZSI6InVua25vd24ifQ==