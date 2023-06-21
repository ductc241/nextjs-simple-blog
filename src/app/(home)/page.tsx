import PostCard from "@/components/PostCard";

async function getUsersData() {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_expand=user&_page=1&_limit=5",
    {
      cache: "no-store",
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getUsersData();

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-12 gap-5">
        {data.map((post: any) => (
          <div className="col-span-6" key={post.id}>
            <PostCard />
          </div>
        ))}
      </div>
    </main>
  );
}
