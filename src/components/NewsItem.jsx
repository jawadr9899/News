import { LazyLoadImage } from "react-lazy-load-image-component";

export default function NewsItem({ styles, title, content, img, src, url }) {
  return (
    <>
      <div className="card shadow mb-4" style={styles}>
        <LazyLoadImage
          alt={"/src/placeholder.avif"}
          effect="blur"
          src={img} 
          className="card-image-top img-fluid img rounded w-full"
        />
        <div className="card-body">
          <h5 className="card-title fw-bolder border-center  pb-2">{title}</h5>
          <div className="card-text">
            {content.substring(0, 200) + "..."}
            <br />
            <h6 className="border border-primary p-2 mt-2 rounded">
              Source: <b>{src.name}</b>
            </h6>
          </div>
          <a
            className="btn shadow-sm  btn-primary btn-sm"
            target="_blank"
            href={url}
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
