import React, {useState} from 'react'
//Making user the the forms are empty
const initialState = {
    id: '',
    title: ''
    
}

const UpdateForm = () => {

    const [formData, setFormData] = useState(initialState)

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const updateData = async () => {
        const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${formData.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })

        const data =  await res.json()
        ///Checking to see if my data is updating
        console.log(data)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        updateData()
        setFormData(initialState)
    }

  return (
    //////This is for my form where I want to update the Album ID, Title and Url
    <div>
        <h5>Update Posted Photos</h5>
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    type="text"
                    placeholder='Enter ID'
                    name='id'
                    value={formData.id} 
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='Enter Album ID'
                    name='albumId'
                    value={formData.albumId} 
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='Enter Title'
                    name='title'
                    value={formData.title} 
                    onChange={onChange}
                />
            </div>

            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default UpdateForm