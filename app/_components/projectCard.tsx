import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { GitHubLogoIcon, ArrowTopRightIcon, Cross2Icon } from "@radix-ui/react-icons";

interface CardProps {
    title: string,
    description: string,
    repoLink: string,
    isOnline: boolean
    link?: string
    image?: React.ReactNode
}

export function ProjectCard({ title, description, isOnline, repoLink, link, image }: CardProps) {
    return (
        <Card className="text-center text-balance">
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-3 place-content-center">
                    {image}
                    <p className="text-2xl font-semibold">{title}</p>
                </CardTitle>
            </CardHeader>
            <CardContent className="h-[120px]">
                <p>{description}</p>
            </CardContent>
            <CardFooter className="place-content-center">
                <div className="flex flex-row gap-1">
                    {
                        isOnline ?
                            <Button onClick={() => window.open(link, '_blank')} className="flex flex-row gap-3">
                                Service Online
                                <ArrowTopRightIcon className="size-4" />
                            </Button>
                            :
                            <Button disabled variant="outline" className="flex flex-row gap-1 items-center">
                                Service Offline
                                <Cross2Icon className="size-6" />
                            </Button>
                    }

                    <Button variant={"outline"} onClick={() => window.open(repoLink, '_blank')} className="flex flex-row gap-3 item">
                        Github Repo
                        <GitHubLogoIcon className="size-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}