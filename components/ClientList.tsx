import { useState } from "react"

export default function ClientList() {
    const [clients, setClients] = useState([
        {
            name: "John Doe",
            email: "john@gmail.com",
            number: "0330010010",
            message: "test example"
        }
    ]);

    return (
        <>
            <ul>
                {
                    clients.map((client) => (
                        <li key={client.name}>
                            <p>Name: {client.name}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}