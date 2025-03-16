import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoads] = useState('')
    const [reps, setReps] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}
    }

    return(
        // onSubmit so that when they fill in the form, which will call the function handleSubmit
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Workout</h3>

            <label>Exercise Tile:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load(lb):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps:</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Submit</button>
        </form>
    )
}