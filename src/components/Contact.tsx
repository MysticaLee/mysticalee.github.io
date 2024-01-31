import { useState } from 'react';

import { IconCopy, IconCopyCheck, IconMailFilled } from '@tabler/icons-react';

import getContacts, { getEmail } from '../data/Contact';

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const EMAIL = getEmail();
  const contacts = getContacts();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        setCopied(false);
      });

    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      setCopied(false);
    }, 5000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <section id="contact" className="min-h-[calc(100vh-64px-56px)] scroll-m-16">
      <div className="flex items-center justify-center space-x-6">
        <h1 className="my-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-6xl">
          Contact
        </h1>
        <hr className="h-0.5 flex-grow rounded border-0 bg-custom-black/60 dark:bg-custom-white/60" />
      </div>

      <div className="my-4 space-y-10">
        <div className="flex flex-wrap items-center justify-center space-x-2 rounded-xl py-6 shadow-t-md shadow-custom-black dark:shadow-custom-white">
          <IconMailFilled className="hidden md:inline-block" />
          <div className="has-tooltip">
            <button
              className="hover:text-custom-hover flex flex-wrap items-center justify-center"
              onClick={handleCopy}
            >
              <span className="text-md mr-2 truncate font-bold md:text-xl">
                {EMAIL}
              </span>
              {copied ? <IconCopyCheck color="green" /> : <IconCopy />}
            </button>
            <span className="tooltip">
              {copied ? "Copied" : "Click to copy"}
            </span>
          </div>
        </div>
        <div className="rounded-xl py-8 shadow-t-md shadow-custom-black dark:shadow-custom-white">
          <span className="text-md font-bold md:text-xl">
            Connect with me at
          </span>
          <ul className="mt-2 flex items-center justify-center space-x-2">
            {contacts.map((contact) => (
              <li key={contact.id} className="has-tooltip">
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-custom-hover"
                >
                  {contact.icon}
                </a>
                <span className="tooltip">{contact.id}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
