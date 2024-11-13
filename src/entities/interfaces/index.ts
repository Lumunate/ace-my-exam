import { PastPaperResourceType } from "../enums";

export interface IContent {
  id: number;
  parent_id: number;
  name: string;
  type: string;
  level: number;
  description?: string;
}

export interface IResource {
  id: number;
  url: string;
  type: string;
}

export interface IPastPaper {
  id: number;
  title: string;
  year: number;
}

export interface IPastPaperResource {
  id: number;
  past_paper_id: number;
  resource_id: number;
  resource_type: PastPaperResourceType;
}

export interface ITopicalQuestion {
  id: number;
  content_id: number;
  title: string;
}

export interface IRevisionNote {
  id: number;
  content_id: number;
  title: string;
}
