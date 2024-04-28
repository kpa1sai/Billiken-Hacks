import React, { useState, useEffect } from 'react';

function Blog() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "ltwiUKTMg0p3uGmYSQl6QLdE9GFpxRQM");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/financelayer/news?limit=10", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          setError(data.errors);
        } else {
          setNews(data.responses || []);
        }
      })
      .catch(error => {
        setError(error);
        console.log('error', error);
      });
  }, []);

  return (
    <div>
      {error && <p>Something went wrong!</p>}
      {news.map((item, index) => (
        <div key={index} className="news-item">
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;