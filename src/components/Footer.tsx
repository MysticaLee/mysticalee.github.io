export default function Footer() {
  const curr = new Date();

  return (
    <footer className="w-full bg-custom-white p-4 shadow-t-sm shadow-custom-black dark:bg-custom-black dark:shadow-custom-white">
      <span className="text-md">
        © {curr.getFullYear()} Jasmine Lee. All Rights Reserved.
      </span>
    </footer>
  );
}
