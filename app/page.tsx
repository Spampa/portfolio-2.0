import { School } from "./_components/school"
import { Hero } from "./_components/hero";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <School />
      <Skills />
    </main>
  );
}
