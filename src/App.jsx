import BasicAnimation from "./Examples/BasicAnimation";
import FirstAnimation from "./Examples/FirstAnimation";
import HoverTapAnimation from "./Examples/HoverTapAnimation";
import ScrollAnimation from "./Examples/ScrollAnimation";
import LayoutAnimation from "./Examples/LayoutAnimation"
import ExitAnimation from "./Examples/ExitAnimation";

function App() {
  return (
    <div className="bg-slate-900 p-12 text-white">

      <h1 className="mb-16 text-center text-4xl font-bold">
        Motion Practice
      </h1>

      <section className="mb-24">
        <h2 className="mb-8 text-2xl font-bold">
          01. Basic Animation
        </h2>
        <BasicAnimation />
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-2xl font-bold">
          02. Rotation Animation
        </h2>
        <FirstAnimation />
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-2xl font-bold">
          03. Hover & Tap Animation
        </h2>
        <HoverTapAnimation />
      </section>

      <section className="mb-24">
  <h2 className="mb-8 text-2xl font-bold">
    04. Scroll Animation
  </h2>
  <ScrollAnimation />
</section>

<section className="mb-24">
  <h2 className="mb-8 text-2xl font-bold">
    05. Layout Animation
  </h2>
  <LayoutAnimation />
</section>
 <section className="mb-24">
  <h2 className="mb-8 text-2xl font-bold">
    08. Exit Animation
  </h2>

  <ExitAnimation />
</section>
    </div>
  );
}

export default App;