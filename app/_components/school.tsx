import { Container } from "@/components/ui/container"

import { Path, PathItem } from "@/components/ui/path"

export const School = () => {
    return (
        <Container className="bg-card text-primary flex items-center">
            <Path title="💻 My Computer Science Path">
                <PathItem
                    title="🏫 I.T.I.S. P. Paleocapa"
                    years="2019 - 2024"
                    description="Hello World"
                />
                <PathItem
                    title="🏫 UNIBG Ingegneria Informatica"
                    years="2024 - 2024"
                    description="Hello World"
                />
            </Path>
        </Container>
    )
}