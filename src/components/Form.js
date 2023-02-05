import React, {useState} from 'react'

const initialState = {
    title: ''
}

const Form = () => {
    const [formData, setFormData] = useState(initialState)

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const postData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = event => {
        event.preventDefault()
        postData()
        setFormData(initialState)
    }

  return (
    <div>
        
        <h5>Post New Photo</h5>
        <form onSubmit={onSubmit}>
        <div>
                <input 
                    type="text"
                    placeholder='Enter Album ID'
                    name='albumId'
                    value={formData.albumId} 
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
            <span><input 
                    type="text"
                    placeholder='Enter Title'
                    name='title'
                    value={formData.title} 
                    onChange={onChange}
                /></span>
            </div>

            <br></br>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Form