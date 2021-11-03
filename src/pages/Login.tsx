import React, { useState } from "react"
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'


export const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()

        fetch('http://localhost:8080/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": userName,
                "password": password
            })
        })
        .then(res => res.text())
        .then(texto => setMessage(texto))
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <br />
                <InputText 
                    type="text" 
                    id="username"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                     />
                <br />

                <label htmlFor="password">Password</label>
                <br />
                <InputText 
                    type="text" 
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                     />
                <br />

                <Button type="submit" label="Submeter" />
            </form>

            <h1>{message}</h1>
        </div>
    )
}
