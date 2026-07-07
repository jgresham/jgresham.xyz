import type { Metadata } from "next";
import Image from "next/image";

const title = "Zippin's 2nd Checkout-Free Store — São Paulo, Brazil";
const description =
  "Led the on-site launch of Zippin's 2nd checkout-free customer store in São Paulo: edge device setup, camera and weight sensor testing, and a successful on-schedule opening.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/zippin-brazil", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

function Photo({
  src,
  alt,
  caption,
  width,
  height,
  native = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  native?: boolean;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={
          native ? "rounded-lg border" : "w-full h-auto rounded-lg border"
        }
      />
      <figcaption className="text-sm text-gray-400">{caption}</figcaption>
    </figure>
  );
}

export default function ZippinBrazil() {
  return (
    <div className="min-h-screen p-0 sm:p-10 gap-2 flex flex-col">
      <h1 className="text-4xl font-bold mb-8">
        Zippin&apos;s 2nd Checkout-Free Store — São Paulo, Brazil
      </h1>
      <a
        className="hover:underline hover:underline-offset-4 text-lg text-blue-600"
        href="https://www.getzippin.com/"
        target="_blank"
      >
        getzippin.com
      </a>
      <p className="text-gray-400 text-sm">
        Full Stack Software Engineer / Team Lead, Zippin — November 2019
      </p>
      <p>
        Zippin builds checkout-free store technology: overhead cameras and
        shelf weight sensors identify what a shopper picks up, so they can
        walk in, grab what they want, and walk out with no scanning or line.
        This store was Zippin&apos;s second customer deployment, built into a
        large residential building in São Paulo.
      </p>
      <p>
        I led the store opening from the Zippin side, spending two weeks
        on-site in Brazil installing and testing the in-store hardware. The
        store opened successfully, on schedule.
      </p>

      <h2 className="text-2xl font-bold mt-4">Packing</h2>
      <Photo
        src="/zippin-brazil/packing.jpg"
        alt="Boxes of NVIDIA Jetson Nano developer kits and SanDisk SD cards packed for shipment"
        caption="Jetson Nanos, Raspberry Pis, and SD cards packed up for the trip."
        width={1454}
        height={1938}
      />
      <p>
        Before the trip, I coordinated with the customer&apos;s import team
        on shipping, customs, and the bill of materials for all the hardware
        headed into Brazil.
      </p>

      <h2 className="text-2xl font-bold mt-4">Setup</h2>
      <p>
        On-site, my work consisted of flashing and configuring the edge
        devices that run the store, testing, validating, and calibrating the
        shelf weight sensors, and validating the camera setup.
      </p>
      <Photo
        src="/zippin-brazil/store-construction.jpg"
        alt="Store under construction with shelving and camera mounts being installed"
        caption="The store mid-construction — shelving and overhead camera mounts going in."
        width={2584}
        height={1938}
      />
      <Photo
        src="/zippin-brazil/flashing-raspi-hotel-room.jpg"
        alt="Raspberry Pis connected to a travel router in a hotel room for overnight flashing"
        caption="Hotel room downtime: flashing multiple Raspberry Pis at once over a local network, since I only had so many laptop ports."
        width={163}
        height={217}
        native
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Photo
          src="/zippin-brazil/raspi-config.jpg"
          alt="Raspberry Pis and a Jetson Nano being configured and boot-tested on a workbench"
          caption="Configuring and boot-testing edge devices on-site, syncing with engineers back in California across time zones."
          width={2584}
          height={1938}
        />
        <Photo
          src="/zippin-brazil/behind-refrigerator.jpg"
          alt="Wiring for shelf weight sensors behind a refrigerated display unit"
          caption="Weight sensor wiring behind the shelving — taring and reliability were the tricky parts to get right on every unit."
          width={1454}
          height={1938}
        />
      </div>
      <Photo
        src="/zippin-brazil/lux-measurements.jpg"
        alt="Taking a lux (light level) measurement in the store with a handheld light meter"
        caption="Measuring ambient light levels to validate lighting conditions for the overhead cameras."
        width={1454}
        height={1938}
      />

      <h2 className="text-2xl font-bold mt-4">Store Opening</h2>
      <Photo
        src="/zippin-brazil/store-opening-crowd.jpg"
        alt="Crowd of attendees at the store opening event, browsing shelves and taking photos"
        caption="Opening night — the store went live as planned after two weeks of setup and testing."
        width={2584}
        height={1938}
      />

      <h2 className="text-2xl font-bold mt-4">Shoppers</h2>
      <Photo
        src="/zippin-brazil/store-3-ppl.jpg"
        alt="Shoppers picking items from the refrigerated shelves while being filmed for a demo"
        caption="Walking through the finished shopping experience — cameras and sensors tracking every pick, no checkout line."
        width={2584}
        height={1938}
      />

      <h2 className="text-2xl font-bold mt-4">What I did</h2>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          Flashed and configured edge IoT devices — Raspberry Pis and NVIDIA
          Jetson Nanos — for the store&apos;s cameras and shelf sensors.
        </li>
        <li>
          Communicated with the customer&apos;s import team on shipping,
          customs, and the bill of materials for the hardware shipment.
        </li>
        <li>
          Used hotel room downtime and the room&apos;s router to set up a
          local network and flash multiple Raspberry Pis in parallel,
          working around limited laptop ports.
        </li>
        <li>
          Coordinated setup progress and troubleshooting with engineers back
          in California across time zones.
        </li>
        <li>
          Tested and calibrated the weight sensors on every shelf, including
          taring and working around sensor reliability issues.
        </li>
        <li>
          Tested the camera setup and camera map/navigation configuration
          used to track shoppers and items through the store.
        </li>
        <li>
          Measured ambient light levels (lux) around the store to validate
          conditions for the computer vision system.
        </li>
        <li>Led the store opening on the Zippin side, on schedule.</li>
      </ul>
      <p className="text-sm text-gray-400">
        Part of a broader Full Stack Software Engineer / Team Lead role at
        Zippin (Apr 2019 – Jun 2021), building customer-facing dashboards,
        APIs, and internal video review/labeling tools for checkout-free
        stores with React, WebSockets, Node.js, SQL, and Redis.
      </p>
    </div>
  );
}
