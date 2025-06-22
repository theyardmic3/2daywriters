"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Writing Feedback",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    const mailToLink = `mailto:info@todaywriting.com?subject=${subject}&body=Hello, I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;
    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container w-[100%] py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-3">
        {/* Contact Info */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">Contact</h2>
            <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Have a question about feedback, resources, or your writing journey? We’re here to help you thrive as a writer.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Phone className="text-primary" />
              <p className="font-medium">+254 718 600 266</p>
            </div>

            <div className="flex gap-2 items-center">
              <Mail className="text-primary" />
              <p className="font-medium">info@todaywriting.com</p>
            </div>

            <div className="flex gap-2 items-center">
              <Building2 className="text-primary" />
              <p className="font-medium">Todaywriting HQ – P.O. Box 342, Westlands, Kenya.</p>
            </div>

            <div className="flex gap-2 items-center">
              <Clock className="text-primary" />
              <p className="font-medium">Office Hours</p>
              <p className="text-muted-foreground pl-6">Monday to Friday, 8:00am – 5:00pm EAT</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader className="px-6 pt-6 pb-0">
            <h2 className="text-xl font-bold tracking-wider text-primary">Send a Message</h2>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Writing Feedback">Writing Feedback</SelectItem>
                          <SelectItem value="Platform Features">Platform Features</SelectItem>
                          <SelectItem value="Partnerships">Partnerships</SelectItem>
                          <SelectItem value="Community Events">Community Events</SelectItem>
                          <SelectItem value="Support">Support</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
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
                        <Textarea placeholder="Type your message here..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter />
        </Card>
      </section>
    </section>
  );
};
