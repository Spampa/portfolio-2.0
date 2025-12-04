import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu"

import Link from 'next/link'
import { Button } from "../ui/button"

export const Navbar = () => {

    return (
        <div className="text-foreground fixed top-0 z-50 w-full grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:place-content-between xl:items-center p-3 bg-secondary">
            <h1 className="hidden md:block text-xl font-semibold text-start">Nicolò Spampatti</h1>
            <div className="flex flex-wrap gap-3 place-content-center xl:col-span-2 md:place-content-end xl:place-content-center">
                <Button className="w-24">
                    <Link href="#about" passHref>
                        About
                    </Link>
                </Button>

                <Button className="w-24">
                    <Link href="#skills" passHref>
                        Skills
                    </Link>
                </Button>

                <Button className="w-24">
                    <Link href="#projects" passHref>
                        Projects
                    </Link>
                </Button>

                <Button className="w-24">
                    <Link href="#contact" passHref>
                        Contact
                    </Link>
                </Button>
            </div>
        </div >
    )
}