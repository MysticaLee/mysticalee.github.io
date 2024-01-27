import { useState } from 'react';

import {
    IconBrandGithub, IconBrandLinkedin, IconCopy, IconCopyCheck, IconMailFilled
} from '@tabler/icons-react';

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const EMAIL = "jasminelxy94@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(!copied);

    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      setCopied(false);
    }, 5000);

    setTimeoutId(newTimeoutId);
  };

  const contacts = [
    {
      id: "GitHub",
      url: "https://github.com/MysticaLee",
      icon: <IconBrandGithub size={32} />,
    },
    {
      id: "LinkedIn",
      url: "https://www.linkedin.com/in/lxyj/",
      icon: <IconBrandLinkedin size={32} />,
    },
  ];

  return (
    <section id="contact" className="min-h-[calc(100vh-64px)] scroll-m-16">
      <div className="flex items-center justify-center space-x-6">
        <h1 className="my-4 text-4xl font-extrabold leading-none tracking-tight text-custom-white md:text-5xl lg:text-6xl">
          Contact
        </h1>
        <hr className="h-0.5 flex-grow rounded border-0 bg-custom-white/60" />
      </div>

      <div className="my-4 space-y-10">
        <div className="relative flex items-center justify-center space-x-2 overflow-hidden rounded-xl py-8 shadow-t-md shadow-custom-white">
          <IconMailFilled />
          <button
            className="flex text-xl font-bold hover:text-custom-secondary"
            onClick={handleCopy}
          >
            <span className="mr-2">{EMAIL}</span>
            {copied ? <IconCopyCheck color="green" /> : <IconCopy />}
          </button>
        </div>
        <div className="overflow-hidden rounded-xl py-12 shadow-t-md shadow-custom-white">
          <span className="text-xl font-bold">Connect with me at</span>
          <ul className="mt-2 flex items-center justify-center space-x-2">
            {contacts.map((contact) => (
              <li key={contact.id} className="has-tooltip">
                <a
                  href={contact.url}
                  target="_blank"
                  className="hover:text-custom-secondary"
                >
                  {contact.icon}
                </a>
                <span className="tooltip -bottom-10 -left-[60%] px-3 py-2">
                  {contact.id}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
