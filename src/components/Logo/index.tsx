import React, { useEffect } from 'react'
import { SvgLogo } from './style'
import viewBg from '../../assets/img/viewBg.jpg'
interface PropType {
  background?: string
  path?: string
}

export const LogoContent: React.FC<PropType> = () => {
  useEffect(() => {
    // gsap.from('#tylogo', {
    //   drawSVG: 0,
    //   duration: 20,
    // })
    // console.log('svg', props)
  }, [])
  return (
    <SvgLogo
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      id="tylogo"
      viewBox="0 0 900 900"
    >
      <defs>
        <pattern
          id="img1"
          viewBox="0,0,650,650"
          patternTransform="translate(0,-300) scale(1,-1)"
          width="100%"
          height="100%"
        >
          <image href={viewBg} x="-300" y="0" />
        </pattern>
      </defs>
      {/* transform="translate(-200,900) scale(0.1,-0.1)" */}
      {/* <polygon
        fill={props.background ? props.background : '#00000'}
        stroke-width="0"
        points="0,10 20,10 10,0"
      /> */}
      <g
        transform="translate(-150,1050) scale(0.1,-0.1)"
        fill="url(#img1)"
        stroke="none"
      >
        {/* <animate
          id="fillIn"
          attributeName="fill-opacity"
          from="0"
          to="1"
          dur="0.5s"
          fill="freeze"
          repeatCount="1"
        /> */}
        <path
          d="M1365 9008 c-86 -394 -301 -1435 -298 -1440 2 -5 429 -8 949 -8 716
   0 944 -3 944 -12 0 -9 -968 -4520 -987 -4596 l-5 -22 950 0 c683 0 953 3 958
   11 3 6 230 1047 504 2313 l497 2301 69 3 69 2 553 -1134 554 -1134 -251 -1172
   c-138 -644 -251 -1178 -251 -1186 0 -12 133 -14 954 -14 901 0 955 1 960 18 3
   9 114 530 246 1156 133 627 244 1144 247 1150 4 6 665 863 1470 1904 805 1041
   1467 1900 1470 1907 4 13 -136 15 -1081 15 l-1085 0 -793 -1134 c-441 -630
   -796 -1129 -799 -1122 -4 6 -79 186 -168 399 l-161 389 150 720 c82 396 150
   728 150 739 0 19 -49 19 -2899 19 l-2900 0 -16 -72z"
        ></path>
      </g>
    </SvgLogo>
  )
}
