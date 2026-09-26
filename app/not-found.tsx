import Link from "next/link";

export default function NotFound() {
  return (
    <div
    className="text-center p-12.5 h-screen flex justify-center items-center"
    // style={{ textAlign: "center", padding: "50px" }}
    >
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
