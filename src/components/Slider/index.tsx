import { FC, ReactNode } from "react";
import classes from "./index.module.scss"

export const Slider:FC<{content: ReactNode[]}> = ({content}) => {
  return(
    <div className={classes.sliderContainer}>
      <div className={classes.leftArrow}></div>
      <div className={classes.rightArrow}></div>
      <div className={classes.sliderWrapper}>
        {
          content.map(i=>(
            <div className={classes.sliderItem}>
              {i}
            </div>
          ))
        }
      </div>
    </div>
  )
}