import { Container } from "@/components/ui/container"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { SiGnubash, SiMariadb, SiMongodb, SiArduino } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { FaStar, FaJava, FaLinux, FaTerminal, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaRaspberryPi, FaServer} from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";
import { RiJavascriptFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { FiCpu } from "react-icons/fi";

export const Skills = () => {
    return (
        <Container id="skills">
            <div className="grid grid-cols-1 xl:grid-cols-3 p-3 rounded-md bg-card">
                <Card className="rounded-none border-none shadow-none border-r-2">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex flex-col gap-3 items-center">
                                <SiGnubash className="size-12 text-primary" />
                                <h3 className=" text-lg font-semibold">Programming Languages</h3>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead></TableHead>
                                    <TableHead>Language</TableHead>
                                    <TableHead>Level</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell><PiFileCpp className=" size-6" /></TableCell>
                                    <TableCell className="font-medium">C++</TableCell>
                                    <TableCell>4/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaJava className=" size-6" /></TableCell>
                                    <TableCell className="font-medium">Java</TableCell>
                                    <TableCell>4/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaTerminal className=" size-4" /></TableCell>
                                    <TableCell className="font-medium">Bash</TableCell>
                                    <TableCell>3/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><RiJavascriptFill className="size-6" /></TableCell>
                                    <TableCell className="font-medium">Javascript</TableCell>
                                    <TableCell>5/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaPython className="size-6" /></TableCell>
                                    <TableCell className="font-medium">Python</TableCell>
                                    <TableCell>2/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaPhp className="size-6" /></TableCell>
                                    <TableCell className="font-medium">PHP</TableCell>
                                    <TableCell>3/5</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className="rounded-none shadow-none border-y-2 border-x-0 xl:border-y-0 xl:border-x-2">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex flex-col gap-3 items-center">
                                <BsStack className="size-12 text-primary" />
                                <h3 className=" text-lg font-semibold">Full-Stack</h3>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead></TableHead>
                                    <TableHead>Language</TableHead>
                                    <TableHead>Stack</TableHead>
                                    <TableHead>Level</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell><FaHtml5 className=" size-6" /></TableCell>
                                    <TableCell className="font-medium">HTML</TableCell>
                                    <TableCell>Front-End</TableCell>
                                    <TableCell>5/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaCss3Alt className=" size-6" /></TableCell>
                                    <TableCell className="font-medium">CSS</TableCell>
                                    <TableCell>Front-End</TableCell>
                                    <TableCell>5/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><RiTailwindCssFill className=" size-6" /></TableCell>
                                    <TableCell className="font-medium">Tailwind Css</TableCell>
                                    <TableCell>Front-End</TableCell>
                                    <TableCell>5/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaReact className="size-6" /></TableCell>
                                    <TableCell className="font-medium">React</TableCell>
                                    <TableCell>Front-End</TableCell>
                                    <TableCell>5/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><RiNextjsFill className="size-6" /></TableCell>
                                    <TableCell className="font-medium">NextJS</TableCell>
                                    <TableCell>Front-End</TableCell>
                                    <TableCell>4/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaNodeJs className="size-6" /></TableCell>
                                    <TableCell className="font-medium">Node JS</TableCell>
                                    <TableCell>Back-End</TableCell>
                                    <TableCell>5/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><DiMysql className="size-6" /></TableCell>
                                    <TableCell className="font-medium">MySQL</TableCell>
                                    <TableCell>Back-End</TableCell>
                                    <TableCell>4/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><SiMariadb className="size-6" /></TableCell>
                                    <TableCell className="font-medium">MariaDB</TableCell>
                                    <TableCell>Back-End</TableCell>
                                    <TableCell>5/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><SiMongodb className="size-6" /></TableCell>
                                    <TableCell className="font-medium">MongoDB</TableCell>
                                    <TableCell>Back-End</TableCell>
                                    <TableCell>2/5</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className="rounded-none shadow-none border-none">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex flex-col gap-3 items-center">
                                <FaStar className="size-12 text-primary" />
                                <h3 className=" text-lg font-semibold">Other Tech Skills</h3>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead></TableHead>
                                    <TableHead>Skill</TableHead>
                                    <TableHead>Level</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell><SiArduino className=" size-6" /></TableCell>
                                    <TableCell className="font-medium">Arduino</TableCell>
                                    <TableCell>3/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaLinux className=" size-6" /></TableCell>
                                    <TableCell className="font-medium">Linux</TableCell>
                                    <TableCell>4/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaDocker className=" size-6" /></TableCell>
                                    <TableCell className="font-medium">Docker</TableCell>
                                    <TableCell>4/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaGitAlt className="size-6" /></TableCell>
                                    <TableCell className="font-medium">Git</TableCell>
                                    <TableCell>3/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaRaspberryPi className="size-6" /></TableCell>
                                    <TableCell className="font-medium">Raspbery Pi</TableCell>
                                    <TableCell>4/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FaServer className="size-6" /></TableCell>
                                    <TableCell className="font-medium">Manage Server</TableCell>
                                    <TableCell>3/5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><FiCpu className="size-6" /></TableCell>
                                    <TableCell className="font-medium">Build PC</TableCell>
                                    <TableCell>4/5</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </Container >
    )
}