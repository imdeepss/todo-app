"use client";

import React, { FormEvent, useState } from 'react'

const AddTodo = () => {
    const [todo, setTodo] = useState("");


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(todo)
    }

    return (
        <section className="text-center">
            <form onSubmit={handleSubmit}>
                <label className="flex justify-center items-center">
                    <input
                        className="w-full px-2 py-2 md:px-4 md:py-3 text-lg font-semibold text-coffee-brown bg-gray-100 rounded-l-full outline-none"
                        type="text"
                        placeholder="Add your task..."
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTodo(e.target.value) }}
                    />
                    <button
                        type="submit"
                        className="px-5 py-3 text-lg font-bold text-coffee-brown bg-pale-gold rounded-r-full outline-none"
                    >
                        Add
                    </button>
                </label>
            </form>
            {/* Adding Date and time */}
        </section>
    )
}

export default AddTodo