'use client'
import { FormEvent } from "react"

import { Container } from "@/components/ui/container"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

//icons
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formObject: { [key: string]: any } = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObject)
        });

        const data = await response.json();

        console.log(data);
    }

    return (
        <Container className="bg-secondary text-primary flex flex-col gap-2 items-center" id="contact">
            <Card className="w-full md:w-1/2 xl:w-1/3">
                <CardHeader>
                    <CardTitle>Contact Me!</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="subject">Name</Label>
                                <Input name="subject" required={true} placeholder="Full Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="from">Email</Label>
                                <Input name="from" type="email" required={true} placeholder="Email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea name="message" className="resize-none" required={true} placeholder="Type your message here." />
                            </div>
                            <Button type="submit">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="flex flex-row gap-1">
                <Button onClick={() => window.location.href = 'https://www.instagram.com/nico.spampa'} variant={"outline"} size={"icon"}>
                    <FaInstagram className="size-6" />
                </Button>
                <Button onClick={() => window.location.href = 'mailto:nicolo.spampa@gmail.com'} variant={"outline"} size={"icon"}>
                    <SiGmail className="size-6" />
                </Button>
                <Button onClick={() => window.location.href = 'https://www.linkedin.com/in/nicol%C3%B2-spampatti-b7833931b/'} variant={"outline"} size={"icon"}>
                    <FaLinkedin className="size-6" />
                </Button>
                <Button onClick={() => window.location.href = 'https://github.com/Spampa'} variant={"outline"} size={"icon"}>
                    <FaGithub className="size-6" />
                </Button>
            </div>
        </Container>
    )
}