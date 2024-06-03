export interface Education {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  year: string;
  type: "edu" | "work";
}

export interface Work extends Education {
  icon: string;
  alt: string;
}
