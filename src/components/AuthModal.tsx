'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const AuthModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const signup = async (data: any) => {
    await axios.post('/api/auth/signup', data)
    reset()
    alert('Signed up successfully')
  }

  return (
    <div className="fixed top-0 left-0 bg-[#00000090]  w-screen h-screen flex justify-center items-center">
      <div className="w-[500px] h-[500px]">
        <div className="flex flex-col">
          <h2 className="mb-[20px]">Log in to twitter</h2>

          <input
            {...register('name')}
            className="mb-[20px]"
            type="text"
            placeholder="Name"
          />
          <input
            {...register('email')}
            className="mb-[20px]"
            type="text"
            placeholder="Email"
          />
          <input
            {...register('password')}
            className="mb-[20px]"
            type="password"
            placeholder="......"
          />

          <button className="bg-red-600" onClick={handleSubmit(signup)}>
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
