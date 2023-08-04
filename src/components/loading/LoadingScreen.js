import "./LoadingScreen.css";
import Spinner from "../spinner/Spinner";

export default function LoadingScreen() {
  const componentContainerClass = "loading";
  const componentTextClass = `${componentContainerClass}__text`;
  const componentText = "Loading";

  return (
    <section className={componentContainerClass}>
      <Spinner />
      <p className={componentTextClass}>{componentText}</p>
    </section>
  );
}
