import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default async function Home() {
  return (
    <HydrateClient>
      <header className="">
        <h1 className="text-2xl">Diablo Description Generator v3</h1>
      </header>
      <main className="px-4 py-8">
        <h2 className="sr-only">Categories</h2>
        <ul className="mx-auto grid grid-cols-2 gap-4 lg:w-3/4 lg:grid-cols-3 2xl:grid-cols-4">
          <li className="block">
            <Link href="/electric-guitar" className="underline">
              Electric Guitar
            </Link>
          </li>
          <li className="block">
            <Link href="/amplifier" className="underline">
              Amplifier
            </Link>
          </li>
        </ul>
      </main>
    </HydrateClient>
  );
}
