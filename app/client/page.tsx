"use client"

import ClientList from "@/components/ClientList";
import { Button } from "@/components/ui/button";
import { Router } from "next/navigation";

export default function Client() {

  return (
    <>
        <h1>Client</h1>
        <Button type="submit" onSubmit={ContactForm()} >Submit</Button>
        <div>
            <h2>All Client contact</h2>
            <ClientList />
        </div>
    </>
  )
}

function ContactForm() {
  const route = Router;
  return route.push('/client/contact');
}