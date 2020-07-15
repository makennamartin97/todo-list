import React from 'react';

const Task = props => {
    const alltasks = props.tasks;
    //{task, status ,list, setlist} = props;
    const handleCheck = (i) => {
        props.onCheck(i);
    }

    //const onClick = () => {
    //    setlist(() => {
    //        list.filter(task => list.indexOf(task) !== index)
    //    });
        
    //};
    //const onChange = () => {
    //    list[index].isComplete = !list.isComplete;
    //    setlist([...list]);

    //}

    return (
        <>
        <div className="row">
            <div className="col-md-12 text-center">
                <h2 className="text-dark">My Tasks:</h2>
                <div >
                {
                    alltasks.map((task, i) =>
                    <div className="mt-3 text-center text-danger">
                        <li key={i} style= { task[1] === true ? {textDecoration: 'line-through' } : null}> 
                        
                            {task[0]}
                            <input type="checkbox" className="form-check-input ml-3 " checked={task[1]} onClick={ () => handleCheck(i)}/>

                       
                        </li> 
                    </div>
                
                )}
                </div>
            </div>
            
        </div>
        </>
    )
}















export default Task;