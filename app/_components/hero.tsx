'use client'

import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

import { FaGithub } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";

export const Hero = () => {
    return (
        <Container className="bg-secondary text-foreground p-0 md:p-0" id="about">
            <div className="grid xl:grid-cols-2 gap-14 xl:gap-4 items-center">
                <div className="flex flex-col gap-2 place-content-end md:place-content-center items-center order-1 pt-24 xl:pt-0 ">
                    <div className="h-[300px] w-[300px] xl:h-full xl:w-full rounded-full xl:rounded-none bg-primary">
                        <Image
                            src="/me.png"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                        <div className="block xl:hidden border-b-2 p-2 text-center">
                            <h1 className="font-bold text-2xl md:text-3xl">Nicolò Spampatti</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 order-2 xl:order-1 p-6 md:p-24">

                    <h1 className="hidden xl:block font-bold text-6xl text-balance">Hello I&apos;m <span className=" font-bold">Nicolò Spampatti</span></h1>

                    <h2 className="font-semibold text-xl md:text-2xl">I am a passionate Fullstack Developer with a deep love for computer science.</h2>
                    <h3 className="text-base md:text-xl border-l-2 p-3 text-balance">In this space, you can explore the projects I&apos;ve worked on, the skills I&apos;ve developed, and the experiences that have shaped my career over the years.</h3>

                    <div className="flex flex-row gap-2">
                        <Button onClick={() => window.open('https://github.com/Spampa', '_blank')} className="flex flex-row gap-2 items-center">
                            <FaGithub className=" size-5" />
                            <p className="text-lg">Github</p>
                        </Button>
                        <Button className="flex flex-row gap-2 items-center">
                            <PiReadCvLogo className="size-5" />
                            <p className="text-lg">Resume</p>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}