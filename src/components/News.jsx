import NewsItem from "./NewsItem";

export default function News({ news, loading }) {
  if (loading) {
    return (
      <div className="spinner-border border-2 text-primary" role="status"></div>
    );
  }
  return (
    <>
      <div className={`container h-full news-comp p-0 d-flex gap-2  flex-wrap`}>
      {news &&
          news.map(({ title, content, urlToImage, source, url }) => (
            <NewsItem
              title={title}
              content={content}
              img={urlToImage}
              src={source}
              url={url}
              key={crypto.randomUUID()}
              styles={{ maxWidth: "19rem",height:"fit-content" }}
            />
          ))}
      </div>

    </>
  );
}
