import React, {useState} from 'react';

const Input = (props) => {
    const [task, settask ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.thetask(task);
        settask("");
    }
    //let task = {
    //    name: "",
    //    isComplete: false
    //}
    //const addTask = e => {
    //    e.preventDefault();
    //    const newTask = {task};
    //    setlist([...list, newTask]);
     //   e.target.value = "";
    //}

    //const onChange = e => {
    //    task.name = e.target.value;
    //};
    //const onClick = e => {
    //    setlist([...list, task]);
    //    e.target.value = "";
     //   task = "";
    //};

    return(
        <>
    
            <div className="row">
                <div className="col-md-7 ml-5">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="col-10"  onChange={(e) => settask(e.target.value)} value={task} />
                        <div className="ml-5 mt-3">
                            <input className="btn btn-primary" type="submit" value="Create Task" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}








export default Input;