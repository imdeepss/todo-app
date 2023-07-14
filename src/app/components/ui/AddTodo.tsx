"use client";

import React, { FormEvent, useState, useEffect } from 'react';
import { useTodos } from '@/store/todos';
import { format } from 'date-fns';

const AddTodo = () => {
    const [task, setTask] = useState('');
    const [dateTime, setDateTime] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));

    const { handleAddTodo } = useTodos();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!task) {
            return;
        }
        handleAddTodo(task);
        setTask('');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    return (
        <section className="text-center">
            <form onSubmit={handleSubmit}>
                <label className="flex justify-center items-center">
                    <input
                        className="w-full px-2 py-2 md:px-4 md:py-3 text-lg font-semibold text-coffee-brown bg-gray-100 rounded-l-full outline-none"
                        type="text"
                        placeholder="Add your task..."
                        value={task}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="px-5 py-3 text-lg font-bold text-coffee-brown bg-pale-gold rounded-r-full outline-none"
                    >
                        Add
                    </button>
                </label>
            </form>
            <p className="text-sm text-pale-gold mt-2">Date and Time: {dateTime}</p>
        </section>
    );
};

export default AddTodo;
