"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_responsiveness_1 = require("react-responsiveness");
var react_responsiveness_2 = require("react-responsiveness");
exports.ResponsivenessProvider = react_responsiveness_2.ResponsivenessProvider;
exports.withResponsiveProps = (p, C) => {
    return react_responsiveness_1.withResponsiveness(function ResponsiveProps(props) {
        const bp = Math.min(...props.responsive.breakpoints);
        const newProps = Object.assign({}, props);
        p.forEach(prop => {
            if (Array.isArray(props[prop])) {
                let newVal = props[prop].reduce((a, c, i) => i <= bp && c || a, null);
                newProps[prop] = newVal;
            }
        });
        return React.createElement(C, Object.assign({}, newProps));
    });
};
//# sourceMappingURL=index.js.map