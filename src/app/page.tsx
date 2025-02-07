import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="px-4 py-8">
        <h2 className="text-xl">Categories</h2>
        <ul>
          <li className="">
            <Link href="/electric-guitar" className="underline">
              Electric Guitar
            </Link>
          </li>
          <li className="">
            <Link href="/amplifier" className="underline">
              Amplifier
            </Link>
          </li>
        </ul>
      </main>
    </HydrateClient>
  );
}
