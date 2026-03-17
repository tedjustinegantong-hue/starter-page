import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl"></h2>
          <p className="mt-4"></p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/6/69/Mobile_Legends_Bang_Bang_logo.png"
                  alt="Mobile Legends"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Mobile Legends</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                “Destroy the enemy’s base (Nexus/Crystal) while protecting your
                own.”
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg"
                  alt="GTA San Andreas"
                  width={40}
                  height={40}
                  className="object-contain rounded"
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">GTA: San Andreas</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Complete missions to progress the story of Carl “CJ” Johnson
                while regaining control of your gang (Grove Street Families) and
                rising in power across Los Santos, San Fierro, and Las Venturas.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg"
                  alt="Counter Strike"
                  width={40}
                  height={40}
                  className="object-contain rounded"
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Counter-Strike</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Complete the mission assigned to your team (Terrorists or
                Counter-Terrorists) to win each round. to win.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
