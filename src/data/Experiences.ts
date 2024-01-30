export default function getExperiences() {
  return [
    {
      id: 1,
      company: "ST Engineering",
      title: "Striker Cockpit Application Development",
      duration: "May 2021 - Jul 2021",
      description: [
        "Improved efficiency through the use of Robotic Process Automation (RPA) to automate the process of extracting data from forms",
        "Built dashboards for better visualisation of data",
      ],
      skills: [],
    },
    {
      id: 2,
      company: "AMD",
      title: "Co-Op/Intern",
      duration: "Jan 2022 - Jul 2022",
      description: [
        "Assisted with High Temperature Operating Life (HTOL) daily operations such as logistics, Final Test (FT) and debugging",
        "Improved efficiency of debugging by 95% through automation with script development",
        "Built test programs using Test Program Generation Framework (TPGF) for IPs for upcoming products",
      ],
      skills: ["Python", "Linux", "Ruby"],
    },
  ].reverse();
}
