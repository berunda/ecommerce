async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;
  console.log("query", query);
  return <div>SearchPage for {query}</div>;
}

export default SearchPage;
