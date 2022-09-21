import { FC } from "react"

export const Sunny: FC = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <radialGradient
            id="gradYellow"
            cx="50%"
            cy="50%"
            r="80%"
            fx="90%"
            fy="80%"
          >
            <stop offset="0%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "orange", stopOpacity: 1 }}
            />
          </radialGradient>
          <radialGradient
            id="gradDarkGray"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: "gray", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "dimgray", stopOpacity: 1 }}
            />
          </radialGradient>
          <radialGradient
            id="gradGray"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "darkgray", stopOpacity: 1 }}
            />
          </radialGradient>
          <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "darkgray", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <svg className="icon" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="20" fill="url(#gradYellow)" />
        <line x1="50" y1="27" x2="50" y2="2" className="longRay" />
        <line x1="50" y1="73" x2="50" y2="98" className="longRay" />
        <line x1="27" y1="50" x2="2" y2="50" className="longRay" />
        <line x1="73" y1="50" x2="98" y2="50" className="longRay" />
        <line x1="34" y1="34" x2="16" y2="16" className="longRay" />
        <line x1="66" y1="66" x2="84" y2="84" className="longRay" />
        <line x1="34" y1="66" x2="16" y2="84" className="longRay" />
        <line x1="66" y1="34" x2="84" y2="16" className="longRay" />

        <line x1="59" y1="29" x2="66" y2="13" className="shortRay" />
        <line x1="71" y1="42" x2="87" y2="35" className="shortRay" />
        <line x1="71" y1="58.5" x2="87" y2="65" className="shortRay" />
        <line x1="59" y1="71" x2="66" y2="87" className="shortRay" />
        <line x1="41" y1="71" x2="34" y2="87" className="shortRay" />
        <line x1="29.5" y1="58.5" x2="13" y2="66" className="shortRay" />
        <line x1="29" y1="42" x2="13" y2="35" className="shortRay" />
        <line x1="41" y1="29" x2="35" y2="13" className="shortRay" />
      </svg>
    </>
  )
}

export const FewClouds: FC = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <radialGradient
            id="gradGray"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "darkgray", stopOpacity: 1 }}
            />
          </radialGradient>
          <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "darkgray", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <svg className="icon" viewBox="0 0 100 100">
        <path
          className="small-cloud"
          d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z"
          fill="url(#gradGray)"
        />
        <path
          fill="url(#gradWhite)"
          x="7"
          d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z"
        />
      </svg>
    </>
  )
}
export const Rain:FC =() => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <radialGradient
            id="gradYellow"
            cx="50%"
            cy="50%"
            r="80%"
            fx="90%"
            fy="80%"
          >
            <stop offset="0%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "orange", stopOpacity: 1 }}
            />
          </radialGradient>
          <radialGradient
            id="gradDarkGray"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: "gray", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "dimgray", stopOpacity: 1 }}
            />
          </radialGradient>
          <radialGradient
            id="gradGray"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "darkgray", stopOpacity: 1 }}
            />
          </radialGradient>
          <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "darkgray", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <svg className="icon" viewBox="0 0 100 100">
     <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" x="25" y="10" className="reverse-small-cloud" fill="url(#gradDarkGray)"/>
     <path id="drop4" fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z"  x="15" y="65"/>
     <path id="drop1" fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z"  x="25" y="65"/>
     <path id="drop2" fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z"  x="37" y="65"/>
     <path id="drop3" fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z"  x="50" y="65"/>
     <path fill="url(#gradWhite)" x="5" y="-7" d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
    </svg>
     
    </>
  )
}
// https://codepen.io/Hsuching/pen/PrRxNW