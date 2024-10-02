import { Container } from "@/components/ui/container"

export const School = () => {
    return (
        <Container className="bg-card text-primary flex items-center">
            <div className="flex flex-col" id="school">
                <h2 className="font-semibold text-xl relative right-3">💻 My Computer Science Path</h2>
                <div className="border-l-4 relative py-2 flex flex-col gap-6">
                    <div className="relative right-2 flex flex-row items-baseline gap-2">
                        <div className="h-3 w-3 bg-primary rounded-full"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-medium">🏫 I.T.I.S. P. Paleocapa <span className=" font-normal">2019 - 2024</span></h3>
                            <p>Hello World</p>
                        </div>
                    </div>
                    <div className="relative right-2 flex flex-row items-baseline gap-2">
                        <div className="h-3 w-3 bg-primary rounded-full"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-medium">🏫 UNIBG Ingegneria Informatica <span className=" font-normal">2024 - in progress</span></h3>
                            <p>Hello World</p>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}