'use client'

import Image from "next/image"

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { IoMdAlert } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    return (
        <Container className="bg-secondary-foreground text-secondary flex flex-col items-center" id="projects">
            <h2 className="text-center font-bold text-3xl relative bottom-10">My Projects</h2>
            <div className="flex flex-row gap-1 items-center place-content-center w-min">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="flex flex-row items-center gap-3 place-content-center">
                            <Image
                                src="/GH.png"
                                alt="Picture of Green Hortus"
                                width={40}
                                height={40}
                            />
                            <p className="text-2xl font-semibold">Green Hortus</p>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Manage your grennhouse with this web application based on React, Node JS and Maria DB.</p>
                    </CardContent>
                    <CardFooter className="place-content-center">
                        <div className="flex flex-row gap-1">
                            <Button variant={'outline'} className="flex flex-row gap-1">
                                <IoMdAlert className="size-6" />
                                Service Down
                            </Button>
                            <Button onClick={() => window.open('https://github.com/Gi0Vaa/GreenHortus', '_blank')} className="flex flex-row gap-1">
                                <FaGithub className="size-6" />
                                Github Repo
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </Container>
    );
}