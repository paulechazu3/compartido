import Link from "next/link";
export default function Nav() {
  return (
    <h1 className="title">
      Read <Link href="/posts">this page!</Link>
    </h1>
  );
}
