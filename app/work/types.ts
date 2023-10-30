export type Project = {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  imageAlt: string;
  repositoryURL: string;
  isPrivate: boolean;
  liveUrl: string;
  technologiesUsed: string[];
  technicalSpecifications: string[];
};
