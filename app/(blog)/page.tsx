import { getPosts } from "@/lib/data/read/getPosts"
import CardPost from "@/components/CardPost"
export default async function HomePage({
  searchParams,
  params,
}: {
  params: { slug: string }
  searchParams?: {
    query?: string;
    page?: string;
  },
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const posts = await getPosts(query)
  return (
     <ul className="container mx-auto flex flex-col-reverse">
        {posts.map((el) => {
          return (
            <li key={el.id}>
              <CardPost post={el}/>
            </li>
          )
        })}
     </ul>
  )
}
