import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ArticlePage from './ArticlePage'; 
import articleData from './articleData'; 
import './Blog.css'


function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="paddings innerWidth bl-container">
      <h1 className='blog-title'>Mitsuito<span>'s Blog</span></h1>
      {selectedArticle ? (
        <div className="overlay">
          <div className="article-modal">
            <Button className="close-button" onClick={closeArticle}>
              [X]
            </Button>
            <ArticlePage
              title={selectedArticle.title}
              content={selectedArticle.content}
              updated={selectedArticle.updated}
            />
          </div>
        </div>
      ) : null}
      <CardGroup className='card-group'>
        {articleData.map((article) => (
          <Card key={article.id} className="custom-card">
            <Card.Img variant="top" src={article.image} />
            <Card.Body>
              <Card.Title className='card-title'>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className='button-section'>
                <Button
                  className='button'
                  onClick={() => openArticle(article)}
                >
                  Read more!
                </Button>
              </div>
              <small style={{ color: "var(--secondary)" }}>
                Last updated {article.updated}
              </small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default Blog;