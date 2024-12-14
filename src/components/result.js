import React from "react";

export default function Result({articles})
{
    console.log(articles);
    return(
        <>
        <div className="container my-5">
            <div className="row">
                {articles && articles.length > 0 ? (
                    articles.map((article, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src={article.image}
                                    className="card-img-top"
                                    alt={article.title || "News Image"}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">
                                        {article.description.length > 100
                                            ? `${article.description.substring(0, 100)}...`
                                            : article.description}
                                    </p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No news available to display.</p>
                )}
            </div>
        </div>
        </>
    );
}