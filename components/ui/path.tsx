import { ReactNode } from "react"

interface PathProps {
    children: ReactNode
    title: string
    icon: string
}

interface PathTitleProps {
    icon: string
    title: string
}

interface PathItemProps {
    title: string
    description: string
    years: string
}

export const Path = ({ children, title, icon }: PathProps) => {
    return (
        <div className="flex flex-col" >
            <TitlePath icon={icon} title={title}></TitlePath>
            <div className="border-l-4 relative py-2 flex flex-col gap-6">
                {children}
            </div>
        </div>
    )
}

export const TitlePath = ({ title, icon }: PathTitleProps) => {
    return (
        <div className="flex flex-row gap-1 items-center relative">
            <p className="relative text-base right-2 xl:right-3 xl:text-xl">
                {icon}
            </p>
            <h2 className="font-semibold text-xl">{title}</h2>
        </div>

    )
}

export const PathItem = ({ title, years, description }: PathItemProps) => {
    return (
        <div className="relative flex flex-col items-baseline gap-2">
            <div className="right-2 flex flex-row gap-1 items-baseline z-20 relative">
                <div className="h-3 w-3 bg-primary rounded-full "></div>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="relative left-2 flex flex-col gap-1">
                <p className=" font-medium">{years}</p>
                <p className="max-w-md">{description}</p>
            </div>
        </div>
    )
}