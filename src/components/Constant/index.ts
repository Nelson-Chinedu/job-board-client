type Props = {
  value: string;
  label: string;
};

export const roleType: Array<Props> = [
  { value: "", label: "Select One..." },
  { value: "Software Development", label: "Software Development" },
  { value: "Marketting & Communication", label: "Marketting & Communication" },
  { value: "Product Management", label: "Product Management" },
  { value: "Technical Support", label: "Technical Support" },
  { value: "Multimedia Production", label: "Multimedia Production" },
];

export const positionType: Array<Props> = [
  { value: "", label: "Select One..." },
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Contract", label: "Contract" },
];

export const location: Array<Props> = [
  { value: "", label: "Select One..." },
  { value: "Africa", label: "Africa" },
  { value: "Canada", label: "Canada" },
  { value: "Asia", label: "Asia" },
  { value: "USA", label: "USA" },
  { value: "America", label: "America" },
  { value: "Europe", label: "Europe" },
];

export const companies: Array<Props> = [
  { value: "", label: "Select One..." },
  { value: "Amazon", label: "Amazon" },
  { value: "Google", label: "Google" },
  { value: "Iterative", label: "Iterative" },
  { value: "Toggl", label: "Toggl" },
  { value: "Zagomail", label: "Zagomail" },
  { value: "Upkey", label: "Upkey" },
]