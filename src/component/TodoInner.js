import React from 'react'

const TodoInner = (props) => {

    const handleCheckboxChange = () => {
        props.onCheck(props.taskBody)
    }

    return (
        <div>
            <ul className={`list-group`}>
                <li className="list-group-item">
                    <input className="form-check-input me-4 rounded-3xl" type="checkbox" value="" id="firstCheckbox" onChange={handleCheckboxChange} />
                    <label className="form-check-label rounded-xl" htmlFor="firstCheckbox">{props.taskBody}</label>
                </li>
            </ul>
        </div>
    )
}

export default TodoInner
