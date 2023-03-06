export interface IPostPhoto {
  pk: string;
  file: string;
  description: string;
}

export interface IPostList {
  title: string;
  pk: number;
  title: string;
  name: string;
  is_owner: boolean;
  p_like: number;
  p_dislike: number;
  photos: IRoomPhoto[];
  category: string;
}

export interface IPostOwner {
  avatar: string;
  username: string;
}

export interface ICategory {
  pk: number;
  name: string;
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
