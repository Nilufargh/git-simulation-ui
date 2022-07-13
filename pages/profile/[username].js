import Profile from "../../components/Profile";
import Repos from "../../components/ReposList";
import homeStyler from "../../styles/Home.module.css"

const profile = ({data}) => {
    const {userData, status} = data
    const page = 1
    if(status === 200){
        const result = {
            name : userData.name,
            username: userData.login,
            location: userData.location,
            blog: userData.blog,
            following: userData.following,
            followers: userData.followers,
            bio: userData.bio,
            avatar: userData.avatar_url
        }

        return (
            <div className={homeStyler.container}>
              <Profile profileData={result}/>
              <Repos repoAddr={userData.repos_url} page={page}/>
            </div>
        )

    }else{
        return(
            <div> Not Found</div>
        )
    }
}

export async function getServerSideProps(context) {

    const endpoint = `https://api.github.com/users/${context.params.username}`

    const res = await fetch(endpoint)
    const data = await res.json()
    console.log(data);

    return {
      props: {
          data :{
              userData: data,
              status: res.status
          }
      }, // will be passed to the page component as props
    }
  }


export default profile