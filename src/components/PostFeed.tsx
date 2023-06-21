export default function PostFeed(posts: any) {
  return (
    <main className="container mx-auto">
      {posts.map((user: any) => (
        <p key={user.id}>{user.title}</p>
      ))}
    </main>
  );
}
