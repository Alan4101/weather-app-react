import { FC } from "react"
import classes from "./index.module.scss"

export const Loader: FC = () => {
  return (
    <div className={classes.ldsRipple}>
      <div></div>
      <div></div>
    </div>
  )
}
