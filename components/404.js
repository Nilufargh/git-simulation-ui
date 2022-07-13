import style from "../styles/Home.module.css"

const PageNotFound = () => {
    return (
        <div className={style.wrapper}>
            <img src="/404.jpg" />
            <div id="info">
                <h3>This user could not be found</h3>
            </div>
        </div >
    )
}

export default PageNotFound