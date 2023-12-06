import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Contact() {
  return (
    <div className="mt-16 text-custom-white">
      <h2>Contact Me</h2>
      <ul className="flex space-x-2">
        <li>
          <a href="" className="flex">
            <IconBrandGithub />
          </a>
        </li>
        <li>
          <a href="" className="flex">
            <IconBrandLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
