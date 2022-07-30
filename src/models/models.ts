export interface INote {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface IProject {
  id: number;
  company: string;
  title: string;
  categoryID: number;
  industriesID: number;
  img: string;
  link: string;
  position?: string;
  notes: INote[] | [];
}
