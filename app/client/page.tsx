"use client";

import ClientList from "@/components/ClientList";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Client() {
  const [clients, setClients] = useState([
    {
      name: "John Doe",
      email: "john@gmail.com",
      number: "0330010010",
      message: "test example",
    },
  ]);

  return (
    <>
      <h1>Client</h1>
      <Button type="submit">
        <a href="/client/contact">Contact Form</a>
      </Button>
      <div>
        <h2>All Client contact</h2>
        <ClientList clients={clients} />
      </div>
    </>
  );
}
