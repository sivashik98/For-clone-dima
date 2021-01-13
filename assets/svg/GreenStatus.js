import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GreenStatus(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M29.516 15C29.516 6.983 23.017.484 15 .484S.484 6.983.484 15 6.984 29.516 15 29.516c8.017 0 14.516-6.5 14.516-14.516z"
        fill="#00C288"
      />
      <Path
        d="M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15C29.99 6.72 23.28.01 15 0zm0 29.032C7.25 29.032.968 22.75.968 15S7.25.968 15 .968 29.032 7.25 29.032 15C29.024 22.746 22.746 29.024 15 29.032z"
        fill="#fff"
      />
    </Svg>
  );
}

export default GreenStatus;
