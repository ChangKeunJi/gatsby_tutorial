import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
// Layout 컴포넌트가 유일하게 모든 곳에 적용되는 컴포넌트이니 css를 여기다 포함시킨다.

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 </p>
      </footer>
    </div>
  )
}
