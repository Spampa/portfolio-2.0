import { Container } from "@/components/ui/container"

import { Path, PathItem } from "@/components/ui/path"

export const School = () => {
    return (
        <Container className="bg-card text-foreground flex items-center">
            <Path icon="💻" title="My Computer Science Path">
                <PathItem
                    title="🏫 I.T.I.S. P. Paleocapa (BG)"
                    years="2019 - 2024"
                    description="I graduated from high school in Italy with a focus on computer science, achieving a final grade of 100/100."
                />
                <PathItem
                    title="🏫 UNIBG Ingegneria Informatica"
                    years="2024 - In Progress"
                    description="I began my studies in computer engineering after graduating from high school."
                />
            </Path>
        </Container>
    )
}