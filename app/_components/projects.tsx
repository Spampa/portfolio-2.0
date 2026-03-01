'use client'

import { Container } from "@/components/ui/container";
import { ProjectCard } from "./projectCard";
import Image from "next/image"

export const Projects = () => {
    return (
        <Container className="bg-foreground text-secondary flex flex-col items-center" id="projects">
            <h2 className="text-center font-bold text-3xl relative bottom-10">My Projects</h2>
            <div className="flex flex-col md:flex-row gap-1 items-center place-content-center w-min">
                <ProjectCard
                    title="MySagra"
                    description="Open-source fair-code solution for managing and organizing community festivals. Fast to install, simple to use, designed for food stands and vendors."
                    repoLink="https://github.com/MySagra/mysagra"
                    link="https://mysagra.com"
                    isOnline={true}
                    image={<Image
                        src="https://mysagra.com/favicon.png"
                        alt="Picture of Green Hortus"
                        width={40}
                        height={40}
                    />}
                />
            </div>
        </Container>
    );
}