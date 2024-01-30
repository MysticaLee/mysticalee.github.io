import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export default function getContacts() {
  return [
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
}

export function getEmail() {
  return "jasminelxy94@gmail.com";
}
