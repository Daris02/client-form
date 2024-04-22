export default function ClientList({ clients }) {
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