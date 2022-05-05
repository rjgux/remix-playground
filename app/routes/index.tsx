import type { LoaderFunction, HeadersFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import fetchSomeData from "~/lib/queries";
import classNames from "classnames/bind";

export const loader: LoaderFunction = async () => {
  const data = await fetchSomeData();
  return json(data, {
    headers: {
      "Cache-Control": "max-age=300, s-maxage=300, stale-while-revalidate",
    },
  });
};

let styles = {
  primary:
    "font-brand text-3xl lg:text-5xl uppercase font-medium text-center lg:leading-tight",
  secondary:
    "font-brand text-2xl uppercase font-medium text-center lg:leading-tight",
  baz: "xyz",
};

let cx = classNames.bind(styles);

const Heading = function ({ preset }: { preset: keyof typeof styles }) {
  return (
    <h2 className={cx(preset)}>
      We have one vision, a world free of corruption
    </h2>
  );
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* Subheading */}
      <Heading preset="primary" />
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nisi
        molestiae repudiandae, aliquid ratione praesentium, minus facilis soluta
        ullam culpa dolorum est. Libero quis animi, laudantium exercitationem
        soluta dolor quisquam.
      </p>
      <img
        alt="testing"
        width="1680"
        height="672"
        loading="lazy"
        src="https://images.transparencycdn.org/images/MicrosoftTeams-image-19_2022-04-19-131611_ynwm.png?auto=compress&fit=crop&&w=3330"
      />
    </div>
  );
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    "Cache-Control":
      loaderHeaders.get("Cache-Control") ||
      "ss-maxage=300, stale-while-revalidate",
  };
};
