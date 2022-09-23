import { FC } from "react"
import { useNavigate } from "react-router-dom"
import classes from "./index.module.scss"

export const ErrorPage404: FC = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate('/')
  }
  return (
    <div id="error-page" className={classes.errorWrapper}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className={classes.errorText}>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
      <button onClick={handleGoBack} className={classes.goBackBtn}>
        <p className={classes.title}>Go back</p>
        </button>
    </div>
  )
}
