import { useEffect, useState } from "react";
import Header from "./Header";
import News from "./News";

export default function NewsContainer() {
  const [state, updateState] = useState([]);
  const [data, updateData] = useState([]);
  const [resultSize, updateResultSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const url = `${import.meta.env.VITE_API_URL}${
    import.meta.env.VITE_API_KEY
  }&pageSize=${resultSize}`;
  const controller = new AbortController();

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(url, { signal: controller.signal });
        const data = await resp.json();
        setLoading(false);
        updateState(() => data);
        updateData(() => data?.articles);
      } catch (error) {
        controller.abort();
        setLoading(false);
        updateState(() => []);
      }
    })();
  }, [resultSize]);

  function searchNews(query) {
    if (state.length === 0) return;
    const filtered = state?.articles.filter(({ title }) => {
      return title.toLowerCase().includes(query.toLowerCase());
    });
    updateData(() => filtered);
  }
  function onNext() {
    if (resultSize === 100) {
      return;
    }
    setLoading(true);
    updateResultSize(resultSize + 10);
  }

  function onPrevious() {
    if (resultSize == 10) {
      return;
    }
    setLoading(true);
    updateResultSize(resultSize - 10);
  }
  return (
    <div className="main  container">
      <Header
        results={resultSize}
        onNext={onNext}
        onPrevious={onPrevious}
        onSearch={searchNews}
      />
      <div className="mt-2 text-center rounded-3">
        {!data && <h1>👀</h1>}
        <News
          news={data?.length > 10 ? data?.slice(resultSize - 10) : data}
          loading={loading}
        />
      </div>
    </div>
  );
}
