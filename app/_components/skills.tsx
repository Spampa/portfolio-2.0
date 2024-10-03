import { Container } from "@/components/ui/container"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Bash } from "@/components/icons"


export const Skills = () => {
    return (
        <Container>
            <h2 className="font-semibold text-xl">My Developer Skills</h2>
            <div className="grid grid-cols-3 gap-1">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex flex-col gap-1 items-center">
                                <Bash className=" size-12 p-1 bg-primary text-primary-foreground rounded-md" />
                                <h3 className=" text-lg font-semibold">Programming Languages</h3>
                            </div>
                        </CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </Container >
    )
}