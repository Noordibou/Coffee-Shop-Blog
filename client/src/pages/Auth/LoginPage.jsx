import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://coffee-shop-blog-server.vercel.app/auth/login", {
                email,
                password,
            }, { withCredentials: true });

            if (response.status === 200) {
                console.log("Login successful!");
                setUser(response.data)
                navigate('/');
            } else {
                setError("Wrong credentials!");
            }
        } catch (err) {
            setError("An error occurred while logging in.");
            console.error("Error:", err);
        }
    };

    return (
        <main className="bg-gray-100 flex justify-center pt-44 h-screen">
            <div className="w-96">
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-bodyColor text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <p className="text-center text-gray-600">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500">
                        Sign up
                    </a>
                </p>
            </div>
        </main>
    );
}
