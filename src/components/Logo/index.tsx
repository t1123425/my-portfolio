import React from 'react'
interface PropType {
  background: string
}
export const LogoContent: React.FC<PropType> = (props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="1200.000000pt"
      viewBox="0 0 1200.000000 1200.000000"
      preserveAspectRatio="xMidYMid meet"
      className="logo"
    >
      <g
        transform="translate(-200,900) scale(0.100000,-0.100000)"
        fill={props.background ? props.background : '#00000'}
        stroke="none"
      >
        <path
          d="M1365 9008 c-86 -394 -301 -1435 -298 -1440 2 -5 429 -8 949 -8 716
   0 944 -3 944 -12 0 -9 -968 -4520 -987 -4596 l-5 -22 950 0 c683 0 953 3 958
   11 3 6 230 1047 504 2313 l497 2301 69 3 69 2 553 -1134 554 -1134 -251 -1172
   c-138 -644 -251 -1178 -251 -1186 0 -12 133 -14 954 -14 901 0 955 1 960 18 3
   9 114 530 246 1156 133 627 244 1144 247 1150 4 6 665 863 1470 1904 805 1041
   1467 1900 1470 1907 4 13 -136 15 -1081 15 l-1085 0 -793 -1134 c-441 -630
   -796 -1129 -799 -1122 -4 6 -79 186 -168 399 l-161 389 150 720 c82 396 150
   728 150 739 0 19 -49 19 -2899 19 l-2900 0 -16 -72z"
        />
      </g>
    </svg>
  )
}
