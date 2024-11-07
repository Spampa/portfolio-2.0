import { ReactNode } from "react"

interface PathProps {
    children: ReactNode
    title: string

}

interface PathTitleProps {
    title: string
}

interface PathItemProps{
    title: string
    description: string
    years: string
}

export const Path = ({children, title}:PathProps) => {
    return (
        <div className="flex flex-col" >
            <TitlePath title={title}></TitlePath>
            <div className="border-l-4 relative py-2 flex flex-col gap-6">
                {children}
            </div>
        </div>
    )
}

export const TitlePath = ({ title }: PathTitleProps) => {
    return (
        <h2 className="font-semibold text-xl relative right-3">{title}</h2>
    )
}

export const PathItem = ({ title, years, description }: PathItemProps) => {
    return (
        <div className="relative right-2 flex flex-row items-baseline gap-2">
            <div className="h-3 w-3 bg-primary rounded-full"></div>
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className=" font-medium">{years}</p>
                <p className="max-w-md">{description}</p>
            </div>
        </div>
    )
}