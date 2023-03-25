export interface IPostPhoto {
  pk: string;
  file: string;
  description: string;
}

export interface IPostList extends ICategory, IPostDetail {
  title: string;
  pk: number;
  name: string;
  category: number;
  is_owner: boolean;
  p_like: number;
  p_dislike: number;
  photos: IPostPhoto[];
}

export interface IPostOwner {
  avatar: string;
  username: string;
}

export interface ICategory {
  cpk: number;
  cname: string;
}

export interface IPostDetail extends IPostList {
  id: number;
  created_at: string;
  updated_at: string;
  description: string;
  is_owner: boolean;
  category: ICategory;
  owner: IPostOwner;
  p_like: number;
  p_dislike: number;
  photos: IPostPhoto[];
}

export interface IComment {
  payload: string;
  user: IPostOwner;
  c_like: number;
  c_dislike: number;
}

export interface IUser {
  last_login: string;
  username: string;
  email: string;
  date_joined: string;
  avatar: string;
  name: string;
  gender: string;
  is_owner: boolean;
}
