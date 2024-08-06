export type StudiesType = {
title: string,
academy: string,
year: number
}

export type Tag = {
    name: string;
    class: string;
    icon: any;
  };
  
  export type Project = {
    title: string;
    description: string;
    link: string;
    github: string;
    gitlab: string;
    image: string;
    confidencial: boolean;
    tags: Tag[];
  };
  