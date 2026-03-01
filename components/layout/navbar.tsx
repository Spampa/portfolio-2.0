import Link from 'next/link'
import { Button } from "../ui/button"

export const Navbar = () => {

    return (
        <header className="text-foreground fixed top-0 z-50 w-full p-3 bg-secondary flex flex-row place-content-center md:place-content-between items-center">
            <h1 className="hidden md:block text-xl font-semibold text-start">Nicolò Spampatti</h1>
            <div className="flex flex-wrap gap-1 xl:gap-3 place-content-center md:text-sm xl:text-base">
                <Button asChild>
                    <Link href="#about" passHref>
                        About
                    </Link>
                </Button>

                <Button asChild>
                    <Link href="#skills" passHref>
                        Skills
                    </Link>
                </Button>

                <Button asChild>
                    <Link href="#projects" passHref>
                        Projects
                    </Link>
                </Button>

                <Button asChild>
                    <Link href="#contact" passHref>
                        Contact
                    </Link>
                </Button>
            </div>
        </header >
    )
}