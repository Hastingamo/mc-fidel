"use client";

import { Form } from "lucide-react";
import { useState } from "react";

function Page() {
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
    }
  return (
    <div>
      <h1>login page</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 p-2 rounded-lg mb-4" 
        />
        <input
          type="password"
          placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </Form>
    </div>
  )
}

export default Page
