export default function Footer() {
  const curr = new Date();

  return (
    <footer className="fixed bottom-0 w-full bg-custom-black p-4 shadow-t-sm shadow-custom-white">
      <span className="text-md text-custom-white">
        © {curr.getFullYear()} Jasmine Lee. All Rights Reserved.
      </span>
    </footer>
  );
}
