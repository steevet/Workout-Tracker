//Fetch dome data using our backend API
//Trying to fetch all the workouts and list them on the home page
//useEffect is a 'hook'
import {useEffect, useState} from 'react' 

//Components
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    //To begin with, the state is going to be null
    const [workouts, setWorkouts] = useState(null)

    // The useEffect hook fires a function when the when the component is rendered 
    // And we only want to fire it once when it is first rendered not multiple times everytime the component is rendered
    // To do that, we do a comma and add a second argument to the useEffect hook, an empty erray. 
    // This is the dependency array and with it being empty it will only ever fire once.
    useEffect(() => {

        //Fetch the workouts function
        //All the fetch logics
        const fetchWorkouts = async () => {
            //localhost4000 is the backend server
            //This is going to fetch the data and store it insode 'response'

            // Used to be like this fetch('https://localhost:4000/api/workouts')
            //Changed to this because before we specified port 4000 for the server, but react is running on port 3000, to diff server
            //2 options, either we install a package called CORS or we add a proxy field to the frontend package.json file
            // Address of the node server
            //"proxy": "'https://localhost:4000"
            //This property tells our react dev server to proxy any requests that it does not recognize to our api server at this address
            const response = await fetch('api/workouts')

            //Want to pass the json from this response object into something we can work with
            //This is an array of workout objects
            const json = await response.json()

            //Checking if the response is ok, by using an ok property
            //And if it is ok, we will be updating 'workouts' with 'setWorkouts', and the values will be what is in 'json'. the array of datas (workouts)
            //inside 'workoutController' where we get all thhe workouts, we get them all and store them inside 'workouts' and send them back as json, an array of documents
            if (response.ok) {
                setWorkouts(json)
            }
        }
        //Call the function
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            {/* Cycling through the workouts */}
            {/* But we only want to cycle though when we have them */}
            <div className='workouts'>
                {/* Only If 'workouts' if true (have a value) we can map through them. If null this code what is inside will not run */}
                {/* 'workout' we have access to each individal workouts */}
                {workouts && workouts.map((workout) => (
                    // Paragraph tag needs a unique key in react and i am passing in the workout ids since they are all unique
                    //And just output the title
                    // <p key={workout._id}>{workout.title} - {workout.reps}</p>

                    //We are also passing on the actual workout as a prop
                    <WorkoutDetails key={workout._id} workout={workout}/>

                ))}
            </div>
        </div>
    )
}

export default Home