import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Homecrud = () => {
  return (
    <section id={style.nav}>
        <Link to={"/createuser"}>CREATE USER</Link>
        <Link to={"/user"}>USER</Link>

    </section>
  )
}

export default Homecrud














