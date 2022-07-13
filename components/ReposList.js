import { useState } from 'react'
import useSWR from 'swr'
import ReposItem from './ReposItem'
import repoStyler from "../styles/RepoList.module.css"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function compare( a, b ) {
    const aDate = new Date(Date.parse(a.updated_at))
    const bDate = new Date(Date.parse(b.updated_at))
    if ( aDate > bDate ){
      return -1;
    }
    if ( aDate < bDate ){
      return 1;
    }
    return 0;
}


const Repos = ({repoAddr}) => {

    const [pageNumber, setPageNumber] = useState(0)

    const { data, error } = useSWR(`${repoAddr}?per_page=100`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    const paginatedData = data.sort( compare ).slice((pageNumber) * 6, (pageNumber+1) * 6)

    const pageHandler = (event) => {
      setPageNumber((pageNumber) => pageNumber  + event)
    }

    if (data.length  == 0) return <div className={repoStyler.noRepo}><h1>No Repo</h1></div>

    return (
      <div className={repoStyler.repoContainer}>
        <div className={repoStyler.grid}>
          {paginatedData.map(repo => 
              <ReposItem repo={repo} key={repo.id}/>
            )}
        </div>
        <div className={repoStyler.paginationContainer}>
            {pageNumber > 0 ? (<button className={repoStyler.button} onClick={() => pageHandler(-1)}>{"<<"}</button>) : ""}
            <span className={repoStyler.pageNumberShow}>currentPage: {pageNumber + 1}</span>
            {(pageNumber+1) * 6 < data.length ? (<button className={repoStyler.button} onClick={() => pageHandler(1)}>{">>"}</button>) : ""}
        </div>    
      </div>

    )
}

export default Repos