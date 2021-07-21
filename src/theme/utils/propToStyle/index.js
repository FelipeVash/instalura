import { breakpointsMedia } from '../breakpointsMedia';

export default function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];
    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }
    if (typeof propValue === 'object') {
      const propValueKeys = Object.keys(propValue);
      const breakpointsMediaInput = {};

      propValueKeys.forEach((breakpoint) => {
        breakpointsMediaInput[breakpoint] = { [propName]: propValue[breakpoint] };
      });

      return breakpointsMedia(breakpointsMediaInput);
    }
    return undefined;
  };
}
