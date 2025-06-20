'use client';
import { useState } from 'react';

export default () => {

const [task, setTask] = useState('');
const [tasks, setTasks] = useState(['leqciaa dasamatebeli', 'algoritmia dasamatebeli']);


const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
};

const onAdd = () => {
    setTasks([...tasks, task]);
    setTask('');
}; 

return (
    <>
    <input
        type="text"
        value={task}
        onChange={onChange}
    />
    <button onClick={onAdd}>damateba</button>
    <ul>
        {
            tasks.map(task => <li>{task}</li>)
        }
    </ul>  
    </>
    );
};