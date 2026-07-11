import type { Metadata } from "next";
import Image from "next/image";

const title = "Headless Stripe Card Reader Entry at Zippin";
const description =
  "Adapted Stripe's Verifone P400 JavaScript SDK for headless use so shoppers could tap or insert a card to enter Zippin checkout-free stores, before Amazon or other competitors shipped the same feature.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/zippin-card-reader",
    type: "website",
    siteName: "Johns Gresham",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@SirJohnsGresham",
    creator: "@SirJohnsGresham",
  },
};

function Photo({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="flex flex-col gap-2 max-w-md">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 28rem) 100vw, 28rem"
        className="w-full h-auto rounded-lg border"
      />
      <figcaption className="text-sm text-gray-400">{caption}</figcaption>
    </figure>
  );
}

export default function ZippinCardReader() {
  return (
    <div className="min-h-screen p-0 sm:p-10 gap-2 flex flex-col max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">
        Headless Stripe Card Reader Entry at Zippin
      </h1>
      <a
        className="hover:underline hover:underline-offset-4 text-lg text-blue-600"
        href="https://www.getzippin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        getzippin.com
      </a>
      <p className="text-gray-400 text-sm">
        Full Stack Software Engineer / Team Lead, Zippin, August 2019
      </p>

      <p>
        Zippin builds checkout-free store technology. Overhead cameras and
        shelf sensors track what shoppers pick up, so they can leave without
        a traditional checkout. Entry still needed a way to identify the
        shopper and confirm they had a payment method on file.
      </p>
      <p>
        At the time, the usual way into Zippin stores, and into other
        checkout-free retailers, was the app. Customers had to download it,
        create an account, and add a credit card before they could walk in.
        That is a lot of friction for a quick stop. App entry stayed
        available after we shipped card entry, but tapping a card was a much
        easier path and became by far how most people chose to enter.
      </p>
      <p>
        In August 2019 I shipped card-reader entry for Zippin&apos;s San
        Francisco demo store using a Stripe Terminal Verifone P400 in
        headless mode. There was no iPad or cashier display. The reader
        stayed ready for a customer to tap or insert their card, without
        going through app onboarding.
      </p>

      <h2 className="text-2xl font-bold mt-6">The constraint</h2>
      <p>
        Stripe&apos;s Terminal JavaScript SDK was built around a staffed
        checkout flow, with a browser UI on an iPad or POS display where
        someone initiates the payment. That does not fit an unattended store
        entrance that needs to keep requesting a card on its own.
      </p>
      <p>
        Stripe did not support running the Verifone P400 that way. The
        bundled front-end code assumed a browser-only environment.
      </p>

      <Photo
        src="/zippin-card-reader/verifone-p400.jpg"
        alt="Stripe Terminal Verifone P400 card reader at Zippin's SF demo store entry"
        caption="Verifone P400 at Zippin's SF demo store."
        width={1942}
        height={2590}
      />

      <h2 className="text-2xl font-bold mt-6">The approach</h2>
      <p>
        I worked through Stripe&apos;s bundled JavaScript for Terminal and
        P400 control, and removed browser-only dependencies so the card
        reader command logic could run without a display UI. That let us run
        a headless service that kept the reader in a continuous collect-card
        state for store entry.
      </p>
      <p>
        When a shopper tapped or inserted a card, we pre-authorized about
        $50 so we knew they could cover a reasonable amount of product, then
        opened the doors. Final charges still came from Zippin&apos;s normal
        post-shop reconciliation using the camera and sensor system.
      </p>

      <figure className="flex flex-col gap-2 max-w-md mt-2">
        <video
          className="w-full h-auto rounded-lg border bg-black"
          controls
          playsInline
          preload="metadata"
          poster="/zippin-card-reader/card-entry-demo-poster.jpg"
          width={720}
          height={1280}
        >
          <source
            src="/zippin-card-reader/card-entry-demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <figcaption className="text-sm text-gray-400">
          Card entry demo at Zippin&apos;s SF demo store.
        </figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-6">Risk I flagged to management</h2>
      <p>
        This depended on Stripe&apos;s bundled client code and backend
        behavior outside their documented, supported product path. I made
        that clear to management.
      </p>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          Stripe could update their backend or bundled front-end code and
          break how we used it.
        </li>
        <li>
          I might be able to apply a similar fix to the new code, but only
          if the surface area still allowed it.
        </li>
      </ul>
      <p>
        Management accepted that risk so we could ship the feature.
      </p>

      <h2 className="text-2xl font-bold mt-6">SF first, then Golden 1 Center</h2>
      <p>
        I implemented Verifone P400 entry for Zippin&apos;s SF store before
        any other checkout-free company had this kind of card reader entry,
        including Amazon.
      </p>
      <p>
        In January 2020 we put a card reader in Zippin&apos;s new store at
        Sacramento&apos;s Golden 1 Center, home of the Sacramento Kings,
        where customers used it in a high-volume environment. Golden 1
        Center announced it as the world&apos;s first in-arena checkout-free
        convenience store.{" "}
        <a
          className="hover:underline hover:underline-offset-4 text-blue-600"
          href="https://www.golden1center.com/news/detail/golden-1-center-partners-with-zippin-to-open-worlds-first-in-arena-checkout-free-convenience-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Golden 1 Center partners with Zippin
        </a>
        .
      </p>

      <Photo
        src="/zippin-card-reader/golden-center-sacramento-zippin-store.jpg"
        alt="Zippin checkout-free store at Golden 1 Center in Sacramento"
        caption="Zippin store at Golden 1 Center (Sacramento Kings), January 2020."
        width={1942}
        height={2590}
      />

      <h2 className="text-2xl font-bold mt-6">What I did</h2>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          Adapted Stripe Terminal&apos;s bundled JavaScript so Verifone P400
          control could run headless, without an iPad or cashier UI.
        </li>
        <li>
          Added card entry alongside the existing app path. Shoppers could
          tap or insert a card, get a ~$50 pre-auth, and enter the store.
          That was a much lower barrier than app onboarding and became by
          far the preferred way in.
        </li>
        <li>
          Shipped the feature for Zippin&apos;s San Francisco demo store
          (August 2019) before competitors, including Amazon.
        </li>
        <li>
          Flagged the Stripe upgrade-breakage risk to management before we
          shipped.
        </li>
        <li>
          Deployed the same card-reader entry model to Golden 1 Center in
          Sacramento (January 2020).
        </li>
      </ul>
      <p className="text-sm text-gray-400 mt-4">
        Part of a broader Full Stack Software Engineer / Team Lead role at
        Zippin (Apr 2019 – Jun 2021), building customer-facing systems, store
        hardware integrations, and the software that made walk-in, walk-out
        retail work in production.
      </p>
    </div>
  );
}
