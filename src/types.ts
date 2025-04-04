interface Technology {
  name: string;
  icon: string;
}

interface Client {
  name: string;
  description: string;
  country: string;
}

export interface ProjectDetails {
  id: number;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  images: string[];
  technologies: Technology[];
  client?: Client;
  link?: string;
}
