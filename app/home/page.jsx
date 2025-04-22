"use client"; // Needed for Client Components

import { useState, useEffect } from "react"

export default function Home() {
    const [status, setStatus] = useState("Checking...");

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch("http://localhost:3000/api/check");
            const data = await res.json();
            setStatus(data.NextResponse);
        };
        fetchProduct();
    }, []);
    return (
        <div className="w-full pt-40">
            <h2>MongoDB Connection Status: {status}</h2>
        </div>
    );
}
