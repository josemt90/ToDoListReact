import React from "react";

//include images into your bundle
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const saveTask = (e) => {
		setTask(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			addTask();
		}
	};

	const addTask = () => {
		setList([...list, task]);
		setTask("");
	};

	const deleteToDo = (index) => {
		setList(list.filter((list, i) => i !== index));
	};

	return (
		<div className="myDiv text-center">
			<h1>To Do List </h1>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Add To Do"
					onChange={saveTask}
					onKeyDown={handleKeyDown}
					value={task}
				/>
				<button
					className="input-group-text btn btn-success"
					id="basic-addon2"
					onClick={addTask}>
					Add
				</button>
			</div>

			<ul>
				{list.map((value, index) => {
					return (
						<li
							className="d-flex justify-content-between"
							key={index}>
							{value}
							<FontAwesomeIcon
								className=" icon text-danger"
								icon={faX}
								onClick={() => {
									deleteToDo(index);
								}}
							/>
						</li>
					);
				})}
			</ul>
			<div className=" divCount text-center bg-white rounded-1">
				{list.length === 0 ? (
					<p className=" text-secondary d-flex justify-content-start mx-1">
						No tasks, add a task
					</p>
				) : (
					<p className=" text-secondary d-flex justify-content-start mx-1">
						{list.length} item left
					</p>
				)}
			</div>
		</div>
	);
};

export default Home;
