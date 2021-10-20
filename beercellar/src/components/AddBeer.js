import React from 'react'
import {useState} from 'react'

function AddBeer({onAdd}) {
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [detail, setDetail] = useState('')
    const [focus, setFocus] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please give the beer a name')
            return
        }

        onAdd({ name, year, detail, focus })

        setName('')
        setYear('')
        setDetail('')
        setFocus(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Beer</label>
                <input type='text' placeholder='Add beer' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Year</label>
                <input type='text' placeholder='Add beer year' value={year} onChange={(e) => setYear(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Describtion</label>
                <input type='text' placeholder='Add beer describtion' value={detail} onChange={(e) => setDetail(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set focus</label>
                <input type='checkbox' checked={focus} value={focus} onChange={(e) => setFocus(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save beer" className="btn btn-block" />
        </form>
    )
}

export default AddBeer
