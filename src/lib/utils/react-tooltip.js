(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Slider"] = factory(require("react"), require("react-dom"));
	else
		root["Slider"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _class2, _temp;

	/* Decoraters */

	/* Utils */

	/* CSS */

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(8);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _staticMethods = __webpack_require__(10);

	var _staticMethods2 = _interopRequireDefault(_staticMethods);

	var _windowListener = __webpack_require__(12);

	var _windowListener2 = _interopRequireDefault(_windowListener);

	var _customEvent = __webpack_require__(13);

	var _customEvent2 = _interopRequireDefault(_customEvent);

	var _isCapture = __webpack_require__(14);

	var _isCapture2 = _interopRequireDefault(_isCapture);

	var _getEffect = __webpack_require__(15);

	var _getEffect2 = _interopRequireDefault(_getEffect);

	var _trackRemoval = __webpack_require__(16);

	var _trackRemoval2 = _interopRequireDefault(_trackRemoval);

	var _getPosition = __webpack_require__(17);

	var _getPosition2 = _interopRequireDefault(_getPosition);

	var _getTipContent = __webpack_require__(18);

	var _getTipContent2 = _interopRequireDefault(_getTipContent);

	var _aria = __webpack_require__(19);

	var _nodeListToArray = __webpack_require__(20);

	var _nodeListToArray2 = _interopRequireDefault(_nodeListToArray);

	var _style = __webpack_require__(21);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ReactTooltip = (0, _staticMethods2.default)(_class = (0, _windowListener2.default)(_class = (0, _customEvent2.default)(_class = (0, _isCapture2.default)(_class = (0, _getEffect2.default)(_class = (0, _trackRemoval2.default)(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(ReactTooltip, _React$Component);

	  function ReactTooltip(props) {
	    _classCallCheck(this, ReactTooltip);

	    var _this = _possibleConstructorReturn(this, (ReactTooltip.__proto__ || Object.getPrototypeOf(ReactTooltip)).call(this, props));

	    _this.state = {
	      place: props.place || 'top', // Direction of tooltip
	      desiredPlace: props.place || 'top',
	      type: 'dark', // Color theme of tooltip
	      effect: 'float', // float or fixed
	      show: false,
	      border: false,
	      offset: {},
	      extraClass: '',
	      html: false,
	      delayHide: 0,
	      delayShow: 0,
	      event: props.event || null,
	      eventOff: props.eventOff || null,
	      currentEvent: null, // Current mouse event
	      currentTarget: null, // Current target of mouse event
	      ariaProps: (0, _aria.parseAria)(props), // aria- and role attributes
	      isEmptyTip: false,
	      disable: false,
	      originTooltip: null,
	      isMultiline: false
	    };

	    _this.bind(['showTooltip', 'updateTooltip', 'hideTooltip', 'getTooltipContent', 'globalRebuild', 'globalShow', 'globalHide', 'onWindowResize', 'mouseOnToolTip']);

	    _this.mount = true;
	    _this.delayShowLoop = null;
	    _this.delayHideLoop = null;
	    _this.delayReshow = null;
	    _this.intervalUpdateContent = null;
	    return _this;
	  }

	  /**
	   * For unify the bind and unbind listener
	   */

	  _createClass(ReactTooltip, [{
	    key: 'bind',
	    value: function bind(methodArray) {
	      var _this2 = this;

	      methodArray.forEach(function (method) {
	        _this2[method] = _this2[method].bind(_this2);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          insecure = _props.insecure,
	          resizeHide = _props.resizeHide;

	      if (insecure) {
	        this.setStyleHeader(); // Set the style to the <link>
	      }
	      this.bindListener(); // Bind listener for tooltip
	      this.bindWindowEvents(resizeHide); // Bind global event for static method
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      var ariaProps = this.state.ariaProps;

	      var newAriaProps = (0, _aria.parseAria)(props);

	      var isChanged = Object.keys(newAriaProps).some(function (props) {
	        return newAriaProps[props] !== ariaProps[props];
	      });
	      if (isChanged) {
	        this.setState({ ariaProps: newAriaProps });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mount = false;

	      this.clearTimer();

	      this.unbindListener();
	      this.removeScrollListener();
	      this.unbindWindowEvents();
	    }

	    /**
	     * Return if the mouse is on the tooltip.
	     * @returns {boolean} true - mouse is on the tooltip
	     */

	  }, {
	    key: 'mouseOnToolTip',
	    value: function mouseOnToolTip() {
	      var show = this.state.show;

	      if (show && this.tooltipRef) {
	        /* old IE or Firefox work around */
	        if (!this.tooltipRef.matches) {
	          /* old IE work around */
	          if (this.tooltipRef.msMatchesSelector) {
	            this.tooltipRef.matches = this.tooltipRef.msMatchesSelector;
	          } else {
	            /* old Firefox work around */
	            this.tooltipRef.matches = this.tooltipRef.mozMatchesSelector;
	          }
	        }
	        return this.tooltipRef.matches(':hover');
	      }
	      return false;
	    }
	    /**
	     * Pick out corresponded target elements
	     */

	  }, {
	    key: 'getTargetArray',
	    value: function getTargetArray(id) {
	      var targetArray = void 0;
	      if (!id) {
	        targetArray = document.querySelectorAll('[data-tip]:not([data-for])');
	      } else {
	        var escaped = id.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
	        targetArray = document.querySelectorAll('[data-tip][data-for="' + escaped + '"]');
	      }
	      // targetArray is a NodeList, convert it to a real array
	      return (0, _nodeListToArray2.default)(targetArray);
	    }

	    /**
	     * Bind listener to the target elements
	     * These listeners used to trigger showing or hiding the tooltip
	     */

	  }, {
	    key: 'bindListener',
	    value: function bindListener() {
	      var _this3 = this;

	      var _props2 = this.props,
	          id = _props2.id,
	          globalEventOff = _props2.globalEventOff,
	          isCapture = _props2.isCapture;

	      var targetArray = this.getTargetArray(id);

	      targetArray.forEach(function (target) {
	        var isCaptureMode = _this3.isCapture(target);
	        var effect = _this3.getEffect(target);
	        if (target.getAttribute('currentItem') === null) {
	          target.setAttribute('currentItem', 'false');
	        }
	        _this3.unbindBasicListener(target);

	        if (_this3.isCustomEvent(target)) {
	          _this3.customBindListener(target);
	          return;
	        }

	        target.addEventListener('mouseenter', _this3.showTooltip, isCaptureMode);
	        if (effect === 'float') {
	          target.addEventListener('mousemove', _this3.updateTooltip, isCaptureMode);
	        }
	        target.addEventListener('mouseleave', _this3.hideTooltip, isCaptureMode);
	      });

	      // Global event to hide tooltip
	      if (globalEventOff) {
            globalEventOff.split(' ').forEach(function (event) {
                window.removeEventListener(event, _this3.hideTooltip);
	            window.addEventListener(event, _this3.hideTooltip, isCapture);
            });
	        
	      }

	      // Track removal of targetArray elements from DOM
	      this.bindRemovalTracker();
	    }

	    /**
	     * Unbind listeners on target elements
	     */

	  }, {
	    key: 'unbindListener',
	    value: function unbindListener() {
	      var _this4 = this;

	      var _props3 = this.props,
	          id = _props3.id,
	          globalEventOff = _props3.globalEventOff;

	      var targetArray = this.getTargetArray(id);
	      targetArray.forEach(function (target) {
	        _this4.unbindBasicListener(target);
	        if (_this4.isCustomEvent(target)) _this4.customUnbindListener(target);
	      });

	      if (globalEventOff) window.removeEventListener(globalEventOff, this.hideTooltip);
	      this.unbindRemovalTracker();
	    }

	    /**
	     * Invoke this before bind listener and ummount the compont
	     * it is necessary to invloke this even when binding custom event
	     * so that the tooltip can switch between custom and default listener
	     */

	  }, {
	    key: 'unbindBasicListener',
	    value: function unbindBasicListener(target) {
	      var isCaptureMode = this.isCapture(target);
	      target.removeEventListener('mouseenter', this.showTooltip, isCaptureMode);
	      target.removeEventListener('mousemove', this.updateTooltip, isCaptureMode);
	      target.removeEventListener('mouseleave', this.hideTooltip, isCaptureMode);
	    }
	  }, {
	    key: 'getTooltipContent',
	    value: function getTooltipContent() {
	      var _props4 = this.props,
	          getContent = _props4.getContent,
	          children = _props4.children;

	      // Generate tooltip content

	      var content = void 0;
	      if (getContent) {
	        if (Array.isArray(getContent)) {
	          content = getContent[0] && getContent[0](this.state.originTooltip);
	        } else {
	          content = getContent(this.state.originTooltip);
	        }
	      }

	      return (0, _getTipContent2.default)(this.state.originTooltip, children, content, this.state.isMultiline);
	    }
	  }, {
	    key: 'isEmptyTip',
	    value: function isEmptyTip(placeholder) {
	      return typeof placeholder === 'string' && placeholder === '' || placeholder === null;
	    }

	    /**
	     * When mouse enter, show the tooltip
	     */

	  }, {
	    key: 'showTooltip',
	    value: function showTooltip(e, isGlobalCall) {
	      if (isGlobalCall) {
	        // Don't trigger other elements belongs to other ReactTooltip
	        var targetArray = this.getTargetArray(this.props.id);
	        var isMyElement = targetArray.some(function (ele) {
	          return ele === e.currentTarget;
	        });
	        if (!isMyElement) return;
	      }
	      // Get the tooltip content
	      // calculate in this phrase so that tip width height can be detected
	      var _props5 = this.props,
	          multiline = _props5.multiline,
	          getContent = _props5.getContent;

	      var originTooltip = e.currentTarget.getAttribute('data-tip');
	      var isMultiline = e.currentTarget.getAttribute('data-multiline') || multiline || false;

	      // If it is focus event or called by ReactTooltip.show, switch to `solid` effect
	      var switchToSolid = e instanceof window.FocusEvent || isGlobalCall;

	      // if it needs to skip adding hide listener to scroll
	      var scrollHide = true;
	      if (e.currentTarget.getAttribute('data-scroll-hide')) {
	        scrollHide = e.currentTarget.getAttribute('data-scroll-hide') === 'true';
	      } else if (this.props.scrollHide != null) {
	        scrollHide = this.props.scrollHide;
	      }

	      // Make sure the correct place is set
	      var desiredPlace = e.currentTarget.getAttribute('data-place') || this.props.place || 'top';
	      var effect = switchToSolid && 'solid' || this.getEffect(e.currentTarget);
	      var offset = e.currentTarget.getAttribute('data-offset') || this.props.offset || {};
	      var result = (0, _getPosition2.default)(e, e.currentTarget, _reactDom2.default.findDOMNode(this), desiredPlace, desiredPlace, effect, offset);
	      var place = result.isNewState ? result.newState.place : desiredPlace;

	      // To prevent previously created timers from triggering
	      this.clearTimer();

	      var target = e.currentTarget;

	      var reshowDelay = this.state.show ? target.getAttribute('data-delay-update') || this.props.delayUpdate : 0;

	      var self = this;

	      var updateState = function updateState() {
	        self.setState({
	          originTooltip: originTooltip,
	          isMultiline: isMultiline,
	          desiredPlace: desiredPlace,
	          place: place,
	          type: target.getAttribute('data-type') || self.props.type || 'dark',
	          effect: effect,
	          offset: offset,
	          html: target.getAttribute('data-html') ? target.getAttribute('data-html') === 'true' : self.props.html || false,
	          delayShow: target.getAttribute('data-delay-show') || self.props.delayShow || 0,
	          delayHide: target.getAttribute('data-delay-hide') || self.props.delayHide || 0,
	          delayUpdate: target.getAttribute('data-delay-update') || self.props.delayUpdate || 0,
	          border: target.getAttribute('data-border') ? target.getAttribute('data-border') === 'true' : self.props.border || false,
	          extraClass: target.getAttribute('data-class') || self.props.class || self.props.className || '',
	          disable: target.getAttribute('data-tip-disable') ? target.getAttribute('data-tip-disable') === 'true' : self.props.disable || false,
	          currentTarget: target
	        }, function () {
	          if (scrollHide) self.addScrollListener(self.state.currentTarget);
	          self.updateTooltip(e);

	          if (getContent && Array.isArray(getContent)) {
	            self.intervalUpdateContent = setInterval(function () {
	              if (self.mount) {
	                var _getContent = self.props.getContent;

	                var placeholder = (0, _getTipContent2.default)(originTooltip, '', _getContent[0](), isMultiline);
	                var isEmptyTip = self.isEmptyTip(placeholder);
	                self.setState({
	                  isEmptyTip: isEmptyTip
	                });
	                self.updatePosition();
	              }
	            }, getContent[1]);
	          }
	        });
	      };

	      // If there is no delay call immediately, don't allow events to get in first.
	      if (reshowDelay) {
	        this.delayReshow = setTimeout(updateState, reshowDelay);
	      } else {
	        updateState();
          }
	    }

	    /**
	     * When mouse hover, updatetooltip
	     */

	  }, {
	    key: 'updateTooltip',
	    value: function updateTooltip(e) {
	      var _this5 = this;

	      var _state = this.state,
	          delayShow = _state.delayShow,
	          disable = _state.disable;
	      var afterShow = this.props.afterShow;

	      var placeholder = this.getTooltipContent();
	      var delayTime = parseInt(delayShow, 10);
	      var eventTarget = e.currentTarget || e.target;

	      // Check if the mouse is actually over the tooltip, if so don't hide the tooltip
	      if (this.mouseOnToolTip()) {
	        return;
	      }

	      if (this.isEmptyTip(placeholder) || disable) return; // if the tooltip is empty, disable the tooltip
	      var updateState = function updateState() {
	        if (Array.isArray(placeholder) && placeholder.length > 0 || placeholder) {
	          var isInvisible = !_this5.state.show;
	          _this5.setState({
	            currentEvent: e,
	            currentTarget: eventTarget,
	            show: true
	          }, function () {
	            _this5.updatePosition();
	            if (isInvisible && afterShow) afterShow(e);
	          });
	        }
	      };

	      clearTimeout(this.delayShowLoop);
	      if (delayShow) {
	        this.delayShowLoop = setTimeout(updateState, delayTime);
	      } else {
	        updateState();
	      }
	    }

	    /*
	    * If we're mousing over the tooltip remove it when we leave.
	     */

	  }, {
	    key: 'listenForTooltipExit',
	    value: function listenForTooltipExit() {
	      var show = this.state.show;

	      if (show && this.tooltipRef) {
	        this.tooltipRef.addEventListener('mouseleave', this.hideTooltip);
	      }
	    }
	  }, {
	    key: 'removeListenerForTooltipExit',
	    value: function removeListenerForTooltipExit() {
	      var show = this.state.show;

	      if (show && this.tooltipRef) {
	        this.tooltipRef.removeEventListener('mouseleave', this.hideTooltip);
	      }
	    }

	    /**
	     * When mouse leave, hide tooltip
	     */

	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip(e, hasTarget) {
	      var _this6 = this;

	      var _state2 = this.state,
	          delayHide = _state2.delayHide,
	          disable = _state2.disable;
          var afterHide = this.props.afterHide;

          if(typeof(e) !== 'undefined' && (e.type === "focus" && _state2.show && _this6.tooltipRef.contains(document.activeElement))) {
            e.stopPropagation();
            return;
          }

	      var placeholder = this.getTooltipContent();
	      if (!this.mount) return;
	      if (this.isEmptyTip(placeholder) || disable) return; // if the tooltip is empty, disable the tooltip
	      if (hasTarget) {
	        // Don't trigger other elements belongs to other ReactTooltip
	        var targetArray = this.getTargetArray(this.props.id);
	        var isMyElement = targetArray.some(function (ele) {
	          return ele === e.currentTarget;
	        });
	        if (!isMyElement || !this.state.show) return;
	      }

	      var resetState = function resetState() {
	        var isVisible = _this6.state.show;
	        // Check if the mouse is actually over the tooltip, if so don't hide the tooltip
	        if (_this6.mouseOnToolTip()) {
	          _this6.listenForTooltipExit();
	          return;
	        }
	        _this6.removeListenerForTooltipExit();

	        _this6.setState({
	          show: false
	        }, function () {
	          _this6.removeScrollListener();
	          if (isVisible && afterHide) afterHide(e);
	        });
	      };

	      this.clearTimer();
	      if (delayHide) {
	        this.delayHideLoop = setTimeout(resetState, parseInt(delayHide, 10));
	      } else {
	        resetState();
	      }
	    }

	    /**
	     * Add scroll eventlistener when tooltip show
	     * automatically hide the tooltip when scrolling
	     */

	  }, {
	    key: 'addScrollListener',
	    value: function addScrollListener(currentTarget) {
	      var isCaptureMode = this.isCapture(currentTarget);
	      window.addEventListener('scroll', this.hideTooltip, isCaptureMode);
	    }
	  }, {
	    key: 'removeScrollListener',
	    value: function removeScrollListener() {
	      window.removeEventListener('scroll', this.hideTooltip);
	    }

	    // Calculation the position

	  }, {
	    key: 'updatePosition',
	    value: function updatePosition() {
	      var _this7 = this;

	      var _state3 = this.state,
	          currentEvent = _state3.currentEvent,
	          currentTarget = _state3.currentTarget,
	          place = _state3.place,
	          desiredPlace = _state3.desiredPlace,
	          effect = _state3.effect,
	          offset = _state3.offset;

	      var node = _reactDom2.default.findDOMNode(this);
	      var result = (0, _getPosition2.default)(currentEvent, currentTarget, node, place, desiredPlace, effect, offset);

	      if (result.isNewState) {
	        // Switch to reverse placement
	        return this.setState(result.newState, function () {
	          _this7.updatePosition();
	        });
	      }
	      // Set tooltip position
	      node.style.left = result.position.left + 'px';
	      node.style.top = result.position.top + 'px';
	    }

	    /**
	     * Set style tag in header
	     * in this way we can insert default css
	     */

	  }, {
	    key: 'setStyleHeader',
	    value: function setStyleHeader() {
	      var head = document.getElementsByTagName('head')[0];
	      if (!head.querySelector('style[id="react-tooltip"]')) {
	        var tag = document.createElement('style');
	        tag.id = 'react-tooltip';
	        tag.innerHTML = _style2.default;
	        /* eslint-disable */
	        if (typeof __webpack_nonce__ !== 'undefined' && __webpack_nonce__) {
	          tag.setAttribute('nonce', __webpack_nonce__);
	        }
	        /* eslint-enable */
	        head.insertBefore(tag, head.firstChild);
	      }
	    }

	    /**
	     * CLear all kinds of timeout of interval
	     */

	  }, {
	    key: 'clearTimer',
	    value: function clearTimer() {
	      clearTimeout(this.delayShowLoop);
	      clearTimeout(this.delayHideLoop);
	      clearTimeout(this.delayReshow);
	      clearInterval(this.intervalUpdateContent);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this8 = this;

	      var _state4 = this.state,
	          extraClass = _state4.extraClass,
	          html = _state4.html,
	          ariaProps = _state4.ariaProps,
	          disable = _state4.disable;

	      var placeholder = this.getTooltipContent();
	      var isEmptyTip = this.isEmptyTip(placeholder);
	      var tooltipClass = (0, _classnames2.default)('__react_component_tooltip tiffany-tooltip', { 'show': this.state.show && !disable && !isEmptyTip }, { 'border': this.state.border }, { 'place-top': this.state.place === 'top' }, { 'place-bottom': this.state.place === 'bottom' }, { 'place-left': this.state.place === 'left' }, { 'place-right': this.state.place === 'right' }, { 'type-dark': this.state.type === 'dark' }, { 'type-success': this.state.type === 'success' }, { 'type-warning': this.state.type === 'warning' }, { 'type-error': this.state.type === 'error' }, { 'type-info': this.state.type === 'info' }, { 'type-light': this.state.type === 'light' }, { 'allow_hover': this.props.delayUpdate });

	      var Wrapper = this.props.wrapper;
	      if (ReactTooltip.supportedWrappers.indexOf(Wrapper) < 0) {
	        Wrapper = ReactTooltip.defaultProps.wrapper;
	      }

	      if (html) {
	        return _react2.default.createElement(Wrapper, _extends({ className: tooltipClass + ' ' + extraClass,
	          id: this.props.id,
	          ref: function ref(_ref) {
	            return _this8.tooltipRef = _ref;
						},
						'tabindex': 0,
						'role': 'tooltip'
	        }, ariaProps, {
						'data-id': 'tooltip',
	          dangerouslySetInnerHTML: { __html: placeholder } }));
	      } else {
	        return _react2.default.createElement(Wrapper, _extends({ className: tooltipClass + ' ' + extraClass,
	          id: this.props.id,
						'tabindex': 0,
						'role': 'tooltip'
	        }, ariaProps, {
	          ref: function ref(_ref2) {
	            return _this8.tooltipRef = _ref2;
	          },
	          'data-id': 'tooltip' }), placeholder);
	      }
	    }
	  }]);

	  return ReactTooltip;
	}(_react2.default.Component), _class2.propTypes = {
	  children: _propTypes2.default.any,
	  place: _propTypes2.default.string,
	  type: _propTypes2.default.string,
	  effect: _propTypes2.default.string,
	  offset: _propTypes2.default.object,
	  multiline: _propTypes2.default.bool,
	  border: _propTypes2.default.bool,
	  insecure: _propTypes2.default.bool,
	  class: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  id: _propTypes2.default.string,
	  html: _propTypes2.default.bool,
	  delayHide: _propTypes2.default.number,
	  delayUpdate: _propTypes2.default.number,
	  delayShow: _propTypes2.default.number,
	  event: _propTypes2.default.string,
	  eventOff: _propTypes2.default.string,
	  watchWindow: _propTypes2.default.bool,
	  isCapture: _propTypes2.default.bool,
	  globalEventOff: _propTypes2.default.string,
	  getContent: _propTypes2.default.any,
	  afterShow: _propTypes2.default.func,
	  afterHide: _propTypes2.default.func,
	  disable: _propTypes2.default.bool,
	  scrollHide: _propTypes2.default.bool,
	  resizeHide: _propTypes2.default.bool,
	  wrapper: _propTypes2.default.string
	}, _class2.defaultProps = {
	  insecure: true,
	  resizeHide: true,
	  wrapper: 'div'
	}, _class2.supportedWrappers = ['div', 'span'], _class2.displayName = 'ReactTooltip', _temp)) || _class) || _class) || _class) || _class) || _class) || _class;

	/* export default not fit for standalone, it will exports {default:...} */

	module.exports = ReactTooltip;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if ((undefined) !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(3)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(7)();
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var assign = __webpack_require__(4);

	var ReactPropTypesSecret = __webpack_require__(5);
	var checkPropTypes = __webpack_require__(6);

	var printWarning = function() {};

	if ((undefined) !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if ((undefined) !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if ((undefined) !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      (undefined) !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      (undefined) !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if ((undefined) !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(5);
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if ((undefined) !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          )

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(5);

	function emptyFunction() {}

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  /**
	   * Hide all tooltip
	   * @trigger ReactTooltip.hide()
	   */
	  target.hide = function (target) {
	    dispatchGlobalEvent(_constant2.default.GLOBAL.HIDE, { target: target });
	  };

	  /**
	   * Rebuild all tooltip
	   * @trigger ReactTooltip.rebuild()
	   */
	  target.rebuild = function () {
	    dispatchGlobalEvent(_constant2.default.GLOBAL.REBUILD);
	  };

	  /**
	   * Show specific tooltip
	   * @trigger ReactTooltip.show()
	   */
	  target.show = function (target) {
	    dispatchGlobalEvent(_constant2.default.GLOBAL.SHOW, { target: target });
	  };

	  target.prototype.globalRebuild = function () {
	    if (this.mount) {
	      this.unbindListener();
	      this.bindListener();
	    }
	  };

	  target.prototype.globalShow = function (event) {
	    if (this.mount) {
	      // Create a fake event, specific show will limit the type to `solid`
	      // only `float` type cares e.clientX e.clientY
	      var e = { currentTarget: event.detail.target };
	      this.showTooltip(e, true);
	    }
	  };

	  target.prototype.globalHide = function (event) {
	    if (this.mount) {
	      var hasTarget = event && event.detail && event.detail.target && true || false;
	      this.hideTooltip({ currentTarget: hasTarget && event.detail.target }, hasTarget);
	    }
	  };
	};

	var _constant = __webpack_require__(11);

	var _constant2 = _interopRequireDefault(_constant);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var dispatchGlobalEvent = function dispatchGlobalEvent(eventName, opts) {
	  // Compatibale with IE
	  // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
	  var event = void 0;

	  if (typeof window.CustomEvent === 'function') {
	    event = new window.CustomEvent(eventName, { detail: opts });
	  } else {
	    event = document.createEvent('Event');
	    event.initEvent(eventName, false, true);
	    event.detail = opts;
	  }

	  window.dispatchEvent(event);
	}; /**
	    * Static methods for react-tooltip
	    */

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  GLOBAL: {
	    HIDE: '__react_tooltip_hide_event',
	    REBUILD: '__react_tooltip_rebuild_event',
	    SHOW: '__react_tooltip_show_event'
	  }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  target.prototype.bindWindowEvents = function (resizeHide) {
	    // ReactTooltip.hide
	    window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
	    window.addEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide, false);

	    // ReactTooltip.rebuild
	    window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
	    window.addEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild, false);

	    // ReactTooltip.show
	    window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
	    window.addEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow, false);

	    // Resize
	    if (resizeHide) {
	      window.removeEventListener('resize', this.onWindowResize);
	      window.addEventListener('resize', this.onWindowResize, false);
	    }
	  };

	  target.prototype.unbindWindowEvents = function () {
	    window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
	    window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
	    window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
	    window.removeEventListener('resize', this.onWindowResize);
	  };

	  /**
	   * invoked by resize event of window
	   */
	  target.prototype.onWindowResize = function () {
	    if (!this.mount) return;
	    this.hideTooltip();
	  };
	};

	var _constant = __webpack_require__(11);

	var _constant2 = _interopRequireDefault(_constant);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  target.prototype.isCustomEvent = function (ele) {
	    var event = this.state.event;

	    return event || !!ele.getAttribute('data-event');
	  };

	  /* Bind listener for custom event */
	  target.prototype.customBindListener = function (ele) {
	    var _this = this;

	    var _state = this.state,
	        event = _state.event,
	        eventOff = _state.eventOff;

	    var dataEvent = ele.getAttribute('data-event') || event;
	    var dataEventOff = ele.getAttribute('data-event-off') || eventOff;

	    dataEvent.split(' ').forEach(function (event) {
	      ele.removeEventListener(event, customListeners.get(ele, event));
	      var customListener = checkStatus.bind(_this, dataEventOff);
	      customListeners.set(ele, event, customListener);
          ele.addEventListener(event, customListener, false);
          ele.addEventListener(event, function(event){event.stopPropagation()}, false);
	    });
	    if (dataEventOff) {
	      dataEventOff.split(' ').forEach(function (event) {
	        ele.removeEventListener(event, _this.hideTooltip);
	        ele.addEventListener(event, _this.hideTooltip, false);
	      });
	    }
	  };

	  /* Unbind listener for custom event */
	  target.prototype.customUnbindListener = function (ele) {
	    var _state2 = this.state,
	        event = _state2.event,
	        eventOff = _state2.eventOff;

	    var dataEvent = event || ele.getAttribute('data-event');
	    var dataEventOff = eventOff || ele.getAttribute('data-event-off');

	    ele.removeEventListener(dataEvent, customListeners.get(ele, event));
	    if (dataEventOff) ele.removeEventListener(dataEventOff, this.hideTooltip);
	  };
	};

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	/**
	 * Custom events to control showing and hiding of tooltip
	 *
	 * @attributes
	 * - `event` {String}
	 * - `eventOff` {String}
	 */

	var checkStatus = function checkStatus(dataEventOff, e) {
	  var show = this.state.show;
	  var id = this.props.id;

	  var dataIsCapture = e.currentTarget.getAttribute('data-iscapture');
	  var isCapture = dataIsCapture && dataIsCapture === 'true' || this.props.isCapture;
	  var currentItem = e.currentTarget.getAttribute('currentItem');

	  if (!isCapture) e.stopPropagation();
	  if (show && currentItem === 'true') {
	    if (!dataEventOff) this.hideTooltip(e);
	  } else {
	    e.currentTarget.setAttribute('currentItem', 'true');
	    setUntargetItems(e.currentTarget, this.getTargetArray(id));
	    this.showTooltip(e);
	  }
	};

	var setUntargetItems = function setUntargetItems(currentTarget, targetArray) {
	  for (var i = 0; i < targetArray.length; i++) {
	    if (currentTarget !== targetArray[i]) {
	      targetArray[i].setAttribute('currentItem', 'false');
	    } else {
	      targetArray[i].setAttribute('currentItem', 'true');
	    }
	  }
	};

	var customListeners = {
	  id: '9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf',
	  set: function set(target, event, listener) {
	    if (this.id in target) {
	      var map = target[this.id];
	      map[event] = listener;
	    } else {
	      // this is workaround for WeakMap, which is not supported in older browsers, such as IE
	      Object.defineProperty(target, this.id, {
	        configurable: true,
	        value: _defineProperty({}, event, listener)
	      });
	    }
	  },
	  get: function get(target, event) {
	    var map = target[this.id];
	    if (map !== undefined) {
	      return map[event];
	    }
	  }
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  target.prototype.isCapture = function (currentTarget) {
	    return currentTarget && currentTarget.getAttribute('data-iscapture') === 'true' || this.props.isCapture || false;
	  };
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  target.prototype.getEffect = function (currentTarget) {
	    var dataEffect = currentTarget.getAttribute('data-effect');
	    return dataEffect || this.props.effect || 'float';
	  };
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  target.prototype.bindRemovalTracker = function () {
	    var _this = this;

	    var MutationObserver = getMutationObserverClass();
	    if (MutationObserver == null) return;

	    var observer = new MutationObserver(function (mutations) {
	      for (var m1 = 0; m1 < mutations.length; m1++) {
	        var mutation = mutations[m1];
	        for (var m2 = 0; m2 < mutation.removedNodes.length; m2++) {
	          var element = mutation.removedNodes[m2];
	          if (element === _this.state.currentTarget) {
	            _this.hideTooltip();
	            return;
	          }
	        }
	      }
	    });

	    observer.observe(window.document, { childList: true, subtree: true });

	    this.removalTracker = observer;
	  };

	  target.prototype.unbindRemovalTracker = function () {
	    if (this.removalTracker) {
	      this.removalTracker.disconnect();
	      this.removalTracker = null;
	    }
	  };
	};

	/**
	 * Tracking target removing from DOM.
	 * It's nessesary to hide tooltip when it's target disappears.
	 * Otherwise, the tooltip would be shown forever until another target
	 * is triggered.
	 *
	 * If MutationObserver is not available, this feature just doesn't work.
	 */

	// https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
	var getMutationObserverClass = function getMutationObserverClass() {
	  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (e, target, node, place, desiredPlace, effect, offset) {
	  var _getDimensions = getDimensions(node),
	      tipWidth = _getDimensions.width,
	      tipHeight = _getDimensions.height;

	  var _getDimensions2 = getDimensions(target),
	      targetWidth = _getDimensions2.width,
	      targetHeight = _getDimensions2.height;

	  var _getCurrentOffset = getCurrentOffset(e, target, effect),
	      mouseX = _getCurrentOffset.mouseX,
	      mouseY = _getCurrentOffset.mouseY;

	  var defaultOffset = getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight);

	  var _calculateOffset = calculateOffset(offset),
	      extraOffset_X = _calculateOffset.extraOffset_X,
	      extraOffset_Y = _calculateOffset.extraOffset_Y;

	  var windowWidth = window.innerWidth;
	  var windowHeight = window.innerHeight;

	  var _getParent = getParent(node),
	      parentTop = _getParent.parentTop,
	      parentLeft = _getParent.parentLeft;

	  // Get the edge offset of the tooltip


	  var getTipOffsetLeft = function getTipOffsetLeft(place) {
	    var offset_X = defaultOffset[place].l;
	    return mouseX + offset_X + extraOffset_X;
	  };
	  var getTipOffsetRight = function getTipOffsetRight(place) {
	    var offset_X = defaultOffset[place].r;
	    return mouseX + offset_X + extraOffset_X;
	  };
	  var getTipOffsetTop = function getTipOffsetTop(place) {
	    var offset_Y = defaultOffset[place].t;
	    return mouseY + offset_Y + extraOffset_Y;
	  };
	  var getTipOffsetBottom = function getTipOffsetBottom(place) {
	    var offset_Y = defaultOffset[place].b;
	    return mouseY + offset_Y + extraOffset_Y;
	  };

	  //
	  // Functions to test whether the tooltip's sides are inside
	  // the client window for a given orientation p
	  //
	  //  _____________
	  // |             | <-- Right side
	  // | p = 'left'  |\
	  // |             |/  |\
	  // |_____________|   |_\  <-- Mouse
	  //      / \           |
	  //       |
	  //       |
	  //  Bottom side
	  //
	  var outsideLeft = function outsideLeft(p) {
	    return getTipOffsetLeft(p) < 0;
	  };
	  var outsideRight = function outsideRight(p) {
	    return getTipOffsetRight(p) > windowWidth;
	  };
	  var outsideTop = function outsideTop(p) {
	    return getTipOffsetTop(p) < 0;
	  };
	  var outsideBottom = function outsideBottom(p) {
	    return getTipOffsetBottom(p) > windowHeight;
	  };

	  // Check whether the tooltip with orientation p is completely inside the client window
	  var outside = function outside(p) {
	    return outsideLeft(p) || outsideRight(p) || outsideTop(p) || outsideBottom(p);
	  };
	  var inside = function inside(p) {
	    return !outside(p);
	  };

	  var placesList = ['top', 'bottom', 'left', 'right'];
	  var insideList = [];
	  for (var i = 0; i < 4; i++) {
	    var p = placesList[i];
	    if (inside(p)) {
	      insideList.push(p);
	    }
	  }

	  var isNewState = false;
	  var newPlace = void 0;
	  if (inside(desiredPlace) && desiredPlace !== place) {
	    isNewState = true;
	    newPlace = desiredPlace;
	  } else if (insideList.length > 0 && outside(desiredPlace) && outside(place)) {
	    isNewState = true;
	    newPlace = insideList[0];
	  }

	  if (isNewState) {
	    return {
	      isNewState: true,
	      newState: { place: newPlace }
	    };
	  }

	  return {
	    isNewState: false,
	    position: {
	      left: parseInt(getTipOffsetLeft(place) - parentLeft, 10),
	      top: parseInt(getTipOffsetTop(place) - parentTop, 10)
	    }
	  };
	};

	var getDimensions = function getDimensions(node) {
	  var _node$getBoundingClie = node.getBoundingClientRect(),
	      height = _node$getBoundingClie.height,
	      width = _node$getBoundingClie.width;

	  return {
	    height: parseInt(height, 10),
	    width: parseInt(width, 10)
	  };
	};

	// Get current mouse offset
	/**
	 * Calculate the position of tooltip
	 *
	 * @params
	 * - `e` {Event} the event of current mouse
	 * - `target` {Element} the currentTarget of the event
	 * - `node` {DOM} the react-tooltip object
	 * - `place` {String} top / right / bottom / left
	 * - `effect` {String} float / solid
	 * - `offset` {Object} the offset to default position
	 *
	 * @return {Object}
	 * - `isNewState` {Bool} required
	 * - `newState` {Object}
	 * - `position` {Object} {left: {Number}, top: {Number}}
	 */
	var getCurrentOffset = function getCurrentOffset(e, currentTarget, effect) {
	  var boundingClientRect = currentTarget.getBoundingClientRect();
	  var targetTop = boundingClientRect.top;
	  var targetLeft = boundingClientRect.left;

	  var _getDimensions3 = getDimensions(currentTarget),
	      targetWidth = _getDimensions3.width,
	      targetHeight = _getDimensions3.height;

	  if (effect === 'float') {
	    return {
	      mouseX: e.clientX,
	      mouseY: e.clientY
	    };
	  }
	  return {
	    mouseX: targetLeft + targetWidth / 2,
	    mouseY: targetTop + targetHeight / 2
	  };
	};

	// List all possibility of tooltip final offset
	// This is useful in judging if it is necessary for tooltip to switch position when out of window
	var getDefaultPosition = function getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight) {
	  var top = void 0;
	  var right = void 0;
	  var bottom = void 0;
	  var left = void 0;
	  var disToMouse = 3;
	  var triangleHeight = 2;
	  var cursorHeight = 12; // Optimize for float bottom only, cause the cursor will hide the tooltip

	  if (effect === 'float') {
	    top = {
	      l: -(tipWidth / 2),
	      r: tipWidth / 2,
	      t: -(tipHeight + disToMouse + triangleHeight),
	      b: -disToMouse
	    };
	    bottom = {
	      l: -(tipWidth / 2),
	      r: tipWidth / 2,
	      t: disToMouse + cursorHeight,
	      b: tipHeight + disToMouse + triangleHeight + cursorHeight
	    };
	    left = {
	      l: -(tipWidth + disToMouse + triangleHeight),
	      r: -disToMouse,
	      t: -(tipHeight / 2),
	      b: tipHeight / 2
	    };
	    right = {
	      l: disToMouse,
	      r: tipWidth + disToMouse + triangleHeight,
	      t: -(tipHeight / 2),
	      b: tipHeight / 2
	    };
	  } else if (effect === 'solid') {
	    top = {
	      l: -(tipWidth / 2),
	      r: tipWidth / 2,
	      t: -(targetHeight / 2 + tipHeight + triangleHeight),
	      b: -(targetHeight / 2)
	    };
	    bottom = {
	      l: -(tipWidth / 2),
	      r: tipWidth / 2,
	      t: targetHeight / 2,
	      b: targetHeight / 2 + tipHeight + triangleHeight
	    };
	    left = {
	      l: -(tipWidth + targetWidth / 2 + triangleHeight),
	      r: -(targetWidth / 2),
	      t: -(tipHeight / 2),
	      b: tipHeight / 2
	    };
	    right = {
	      l: targetWidth / 2,
	      r: tipWidth + targetWidth / 2 + triangleHeight,
	      t: -(tipHeight / 2),
	      b: tipHeight / 2
	    };
	  }

	  return { top: top, bottom: bottom, left: left, right: right };
	};

	// Consider additional offset into position calculation
	var calculateOffset = function calculateOffset(offset) {
	  var extraOffset_X = 0;
	  var extraOffset_Y = 0;

	  if (Object.prototype.toString.apply(offset) === '[object String]') {
	    offset = JSON.parse(offset.toString().replace(/\'/g, '\"'));
	  }
	  for (var key in offset) {
	    if (key === 'top') {
	      extraOffset_Y -= parseInt(offset[key], 10);
	    } else if (key === 'bottom') {
	      extraOffset_Y += parseInt(offset[key], 10);
	    } else if (key === 'left') {
	      extraOffset_X -= parseInt(offset[key], 10);
	    } else if (key === 'right') {
	      extraOffset_X += parseInt(offset[key], 10);
	    }
	  }

	  return { extraOffset_X: extraOffset_X, extraOffset_Y: extraOffset_Y };
	};

	// Get the offset of the parent elements
	var getParent = function getParent(currentTarget) {
	  var currentParent = currentTarget;
	  while (currentParent) {
	    if (window.getComputedStyle(currentParent).getPropertyValue('transform') !== 'none') break;
	    currentParent = currentParent.parentElement;
	  }

	  var parentTop = currentParent && currentParent.getBoundingClientRect().top || 0;
	  var parentLeft = currentParent && currentParent.getBoundingClientRect().left || 0;

	  return { parentTop: parentTop, parentLeft: parentLeft };
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (tip, children, getContent, multiline) {
	  if (children) return children;
	  if (getContent !== undefined && getContent !== null) return getContent; // getContent can be 0, '', etc.
	  if (getContent === null) return null; // Tip not exist and childern is null or undefined

	  var regexp = /<br\s*\/?>/;
	  if (!multiline || multiline === 'false' || !regexp.test(tip)) {
	    // No trim(), so that user can keep their input
	    return tip;
	  }

	  // Multiline tooltip content
	  return tip.split(regexp).map(function (d, i) {
	    return _react2.default.createElement('span', { key: i, className: 'multi-line' }, d);
	  });
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseAria = parseAria;
	/**
	 * Support aria- and role in ReactTooltip
	 *
	 * @params props {Object}
	 * @return {Object}
	 */
	function parseAria(props) {
	  var ariaObj = {};
	  Object.keys(props).filter(function (prop) {
	    // aria-xxx and role is acceptable
	    return (/(^aria-\w+$|^role$)/.test(prop)
	    );
	  }).forEach(function (prop) {
	    ariaObj[prop] = props[prop];
	  });

	  return ariaObj;
	}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (nodeList) {
	  var length = nodeList.length;
	  if (nodeList.hasOwnProperty) {
	    return Array.prototype.slice.call(nodeList);
	  }
	  return new Array(length).fill().map(function (index) {
	    return nodeList[index];
	  });
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = '.__react_component_tooltip{border-radius:3px;display:inline-block;font-size:13px;left:-999em;opacity:0;padding:8px 21px;position:fixed;pointer-events:none;transition:opacity 0.3s ease-out;top:-999em;visibility:hidden;z-index:999}.__react_component_tooltip.allow_hover{pointer-events:auto}.__react_component_tooltip:before,.__react_component_tooltip:after{content:"";width:0;height:0;position:absolute}.__react_component_tooltip.show{opacity:0.9;margin-top:0px;margin-left:0px;visibility:visible}.__react_component_tooltip.type-dark{color:#fff;background-color:#222}.__react_component_tooltip.type-dark.place-top:after{border-top-color:#222;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-dark.place-bottom:after{border-bottom-color:#222;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-dark.place-left:after{border-left-color:#222;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-dark.place-right:after{border-right-color:#222;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-dark.border{border:1px solid #fff}.__react_component_tooltip.type-dark.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-dark.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-dark.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-dark.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-success{color:#fff;background-color:#8DC572}.__react_component_tooltip.type-success.place-top:after{border-top-color:#8DC572;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-success.place-bottom:after{border-bottom-color:#8DC572;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-success.place-left:after{border-left-color:#8DC572;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-success.place-right:after{border-right-color:#8DC572;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-success.border{border:1px solid #fff}.__react_component_tooltip.type-success.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-success.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-success.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-success.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-warning{color:#fff;background-color:#F0AD4E}.__react_component_tooltip.type-warning.place-top:after{border-top-color:#F0AD4E;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-warning.place-bottom:after{border-bottom-color:#F0AD4E;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-warning.place-left:after{border-left-color:#F0AD4E;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-warning.place-right:after{border-right-color:#F0AD4E;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-warning.border{border:1px solid #fff}.__react_component_tooltip.type-warning.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-warning.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-warning.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-warning.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-error{color:#fff;background-color:#BE6464}.__react_component_tooltip.type-error.place-top:after{border-top-color:#BE6464;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-error.place-bottom:after{border-bottom-color:#BE6464;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-error.place-left:after{border-left-color:#BE6464;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-error.place-right:after{border-right-color:#BE6464;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-error.border{border:1px solid #fff}.__react_component_tooltip.type-error.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-error.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-error.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-error.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-info{color:#fff;background-color:#337AB7}.__react_component_tooltip.type-info.place-top:after{border-top-color:#337AB7;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-info.place-bottom:after{border-bottom-color:#337AB7;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-info.place-left:after{border-left-color:#337AB7;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-info.place-right:after{border-right-color:#337AB7;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-info.border{border:1px solid #fff}.__react_component_tooltip.type-info.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-info.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-info.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-info.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-light{color:#222;background-color:#fff}.__react_component_tooltip.type-light.place-top:after{border-top-color:#fff;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-light.place-bottom:after{border-bottom-color:#fff;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-light.place-left:after{border-left-color:#fff;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-light.place-right:after{border-right-color:#fff;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-light.border{border:1px solid #222}.__react_component_tooltip.type-light.border.place-top:before{border-top:8px solid #222}.__react_component_tooltip.type-light.border.place-bottom:before{border-bottom:8px solid #222}.__react_component_tooltip.type-light.border.place-left:before{border-left:8px solid #222}.__react_component_tooltip.type-light.border.place-right:before{border-right:8px solid #222}.__react_component_tooltip.place-top{margin-top:-10px}.__react_component_tooltip.place-top:before{border-left:10px solid transparent;border-right:10px solid transparent;bottom:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-top:after{border-left:8px solid transparent;border-right:8px solid transparent;bottom:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-bottom{margin-top:10px}.__react_component_tooltip.place-bottom:before{border-left:10px solid transparent;border-right:10px solid transparent;top:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-bottom:after{border-left:8px solid transparent;border-right:8px solid transparent;top:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-left{margin-left:-10px}.__react_component_tooltip.place-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;right:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-left:after{border-top:5px solid transparent;border-bottom:5px solid transparent;right:-6px;top:50%;margin-top:-4px}.__react_component_tooltip.place-right{margin-left:10px}.__react_component_tooltip.place-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;left:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-right:after{border-top:5px solid transparent;border-bottom:5px solid transparent;left:-6px;top:50%;margin-top:-4px}.__react_component_tooltip .multi-line{display:block;padding:2px 0px;text-align:center}';

/***/ })
/******/ ])
});
;