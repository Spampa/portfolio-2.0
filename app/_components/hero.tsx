'use client'

import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

import { FaGithub } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";

export const Hero = () => {
    return (
        <Container className="bg-card-foreground" id="about">
            <div className="grid xl:grid-cols-2 gap-4 items-center">

                <div className="flex flex-col gap-4 order-2 xl:order-1">

                    <h1 className="hidden xl:block font-bold text-3xl">👋 Hello I'm <span className=" font-bold">Nicolò Spampatti</span></h1>

                    <h2 className="font-semibold text-xl md:text-2xl">I am a passionate Fullstack Developer with a deep love for computer science.</h2>
                    <h3 className="text-base md:text-xl text-justify border-l-2 p-3">In this space, you can explore the projects I've worked on, the skills I've developed, and the experiences that have shaped my career over the years.</h3>

                    <div className="flex flex-row gap-2">
                        <Button onClick={() => window.open('https://github.com/Spampa', '_blank')} className="flex flex-row gap-2 items-center">
                            <FaGithub className=" size-5"/>
                            <p className="text-lg">Github</p>
                        </Button>
                        <Button className="flex flex-row gap-2 items-center">
                            <PiReadCvLogo className="size-5"/>
                            <p className="text-lg">Resume</p>
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 place-content-end md:place-content-center items-center order-1">
                    <Image
                        src="/me.jpg"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                    <div className="block xl:hidden border-b-2 p-2">
                        <h1 className="font-bold text-2xl md:text-3xl">Nicolò Spampatti</h1>
                    </div>
                </div>

            </div>
        </Container>
    )
}