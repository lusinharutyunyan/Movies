import React, { useState } from "react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  return (
    <div className='h-screen bg-gray-900 flex flex-col space-y-10 justify-center items-center'>
      <div className='bg-white w-96 shadow-xl rounded p-5'>
        <h1 className='text-3xl font-medium'>Welcome</h1>
        <p className='text-sm'>Log In to watch movies and waste your time</p>

        <form className='space-y-5 mt-5'>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            className='w-full h-12 border border-gray-800 rounded px-3'
            placeholder='Username'
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='w-full h-12 border border-gray-800 rounded px-3'
            placeholder='Password'
          />

          <button
            className='text-center w-full bg-gray-900 rounded-md text-white py-3 font-medium'
            onClick={() => history.push("/films")}
            disabled={!(username && password)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
