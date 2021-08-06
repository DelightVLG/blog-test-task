export interface PostInterface {
  id?: string,
  createdAt: string,
  title: string,
  preview: string,
  image: string,
  description: string
}

export interface BlogsListProps {
  loading?: boolean,
  posts?: PostInterface[]
}
