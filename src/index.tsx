import * as React from 'react';
import { withResponsiveness } from 'react-responsiveness';
export { ResponsivenessProvider } from 'react-responsiveness';

export const withResponsiveProps = (p: string[], C: any): React.ReactNode => {
    return withResponsiveness(function ResponsiveProps(props: any): React.ReactNode {
        const bp = Math.min(...props.responsive.breakpoints);
        const newProps = {...props};
        p.forEach(prop => {
            if (Array.isArray(props[prop])) {
                let newVal = props[prop].reduce((a: any, c: any, i: number) => i <= bp && c || a, null);
                newProps[prop] = newVal;
            }
        })
        return <C {...newProps} />;
    });
};
