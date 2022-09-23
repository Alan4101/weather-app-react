import { FC } from "react"
import { Header } from "../Header"
import { Routes, Route } from "react-router-dom"
import { Cities, ErrorPage404, Home } from "../../pages"

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </>
  )
}
