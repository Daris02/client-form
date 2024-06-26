"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/utils/types/clientData";
import { useRouter } from "next/navigation";

export default function ClientForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    router.push("/client")
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
                <Input {...field} />
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
                    <Input {...field} />
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
                    <Input {...field} />
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
                    <Input {...field} />
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
