"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email(),
  number: z.number(),
  message: z.string()
})

export default function ClientForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />

        <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                <Input placeholder="email" {...field} />
                </FormControl>
            </FormItem>
            )}
        />

        <FormField 
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                    <Input placeholder="number" {...field} />
                </FormControl>
            </FormItem>
            )}
        />

        <FormField 
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                    <Input placeholder="message" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
