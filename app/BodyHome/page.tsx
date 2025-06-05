import Image from "next/image";
export default function BodyHome() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {" "}
      {/* container responsive + padding */}
      <Image
        src="/image/buds.jpg"
        width={900}
        height={390}
        alt="Picture of the author"
        className="rounded-lg shadow-md" // bonus: rounded corners + shadow
      />
    </div>
  );
}
