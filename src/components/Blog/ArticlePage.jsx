import React from 'react';

function ArticlePage(props) {
  return (
    <div>
      <h1 className="article-title">{props.title}</h1>
      <p className="article-content">{props.content}</p>
      <p className="article-update">Last updated {props.updated}</p>
    </div>
  );
}

export default ArticlePage;