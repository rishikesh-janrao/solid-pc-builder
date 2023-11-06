import { useContext } from "solid-js";
import { A } from "solid-start";
import { TranslationContext } from "~/contexts/ConfigContext";
export default function NotFound() {
  const { page_not_found } = useContext(TranslationContext);

  const _404_classes = {
    0: "flex justify-end align-middle portrait:p-8 landscape:py-16 landscape:pt-60 text-secondary text-9xl w-2/5",
    1: "flex justify-center align-middle portrait:p-8 landscape:py-16 landscape:pt-60 text-9xl w-1/6 text-slate-100",
    2: "flex justify-start align-middle portrait:p-8 landscape:py-16 landscape:pt-60 text-9xl w-2/5 text-secondary",
  };

  return (
    <main class="flex flex-col text-center portrait:items-center portrait:justify-center portrait:h-screen">
      <div class="flex justify-center w-full text-gray-100">
        <h1 class={_404_classes[0]}>4</h1>
        <h1 class={_404_classes[1]}>0</h1>
        <h1 class={_404_classes[2]}>4</h1>
      </div>
      <div class="p-10">
        <h1 class="text-4xl">{page_not_found}</h1>
        <p class="my-4">
          <A href="/" class="text-sky-600 hover:underline">
            Home
          </A>
        </p>
      </div>
    </main>
  );
}
