import type { JSX } from "solid-js";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <main class="w-full space-y-2.5">
      <div class="flex flex-row items-center gap-1">
        <a
          href="https://github.com/mstfmedeni/code-updater"
          target="_blank"
          class="text-2xl font-light"
          rel="noreferrer"
        >
          Code Updater Console
        </a>
      </div>
      {children}
    </main>
  );
}
