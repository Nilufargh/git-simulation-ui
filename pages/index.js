import Router from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    const endpoint = `https://api.github.com/users/${event.target.username.value}`

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'GET',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    
    Router.push(`/profile/${event.target.username.value}`)
      
  }

  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />
      <button type="submit">Submit</button>
    </form>
  )
}
