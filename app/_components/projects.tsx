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
                    title="Green Hortus"
                    description="Manage your grennhouse with this web application based on React, Node JS and Maria DB."
                    repoLink="https://github.com/Gi0Vaa/GreenHortus"
                    isOnline={false}
                    image={<Image
                        src="/GH.png"
                        alt="Picture of Green Hortus"
                        width={40}
                        height={40}
                    />}
                />
                <ProjectCard
                    title="UNIBG Calendar Tool"
                    description="Automatizza la gestione del tuo orario scolastico UNIBG sincronizzandolo con Google Calendar! 🚀 "
                    repoLink="https://github.com/Spampa/calendar-unibg-tool"
                    isOnline={true}
                    link="https://www.unibgcalendar.it/"
                    image={<Image
                        src="/unibgCalendar.png"
                        alt="Picture of Green Hortus"
                        width={40}
                        height={40}
                    />}
                />
            </div>
        </Container>
    );
}