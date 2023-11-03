import { useContext } from "solid-js";
import { TranslationContext } from "~/contexts/ConfigContext";

export default function Home() {
  const { lets_build_a_pc_for_you, get_started } =
    useContext(TranslationContext);
  return (
    <main class="mx-auto text-gray-300">
      <div className="hero min-h-100 bg-banner">
        <div className="hero-content">
          <div className="max-w-full flex flex-col space-y-8 pt-10">
            <h1 className="w-2/3 text-7xl font-bold">
              {lets_build_a_pc_for_you}
            </h1>
            <button className="w-40 btn btn-primary hover:bg-accent hover:text-primary">{get_started}</button>
          </div>
        </div>
      </div>
    </main>
  );
}
