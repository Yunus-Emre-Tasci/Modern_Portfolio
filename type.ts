import { IconType } from "react-icons";
export interface IService {
  Icon: IconType;
  title: string;
  about: string;
}

export interface ISkill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
  id: number | null;
}

export type Category = "react" | "typescript" | "firebase" | "django";

export interface ICertificates {
  name: string;
  image_path: string;
  url: string;
  id: number | null;
}
