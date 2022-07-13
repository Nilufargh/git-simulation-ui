import React from 'react'
import repoStyler from "../styles/RepoList.module.css"

function ReposItem({repo}) {
  return (
    <div className={repoStyler.card}>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
  </div>
  )
}

export default ReposItem