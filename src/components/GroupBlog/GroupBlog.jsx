import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './GroupBlog.css'


function GroupBlog() {
  return (
    <div className="paddings innerWidth bl-container">
      <h1 className='blog-title'>Mitsuito<span>'s Blog</span></h1>
    <CardGroup className='card-group'>
      <Card className="custom-card">
        <Card.Img variant="top" src="./chefs.png" />
        <Card.Body>
          <Card.Title className='card-title'>Meet the ramen artists</Card.Title>
          <Card.Text>
            The fantastic four of ramen tell us about themselves, their origins, their passion for ramen in an entertaining interview done by the New York Times.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className='button-section'><Button className='button'>Read more!</Button></div>
          <small style={{ color: "var(--secondary)" }}>Last updated 3 weeks ago</small>
        </Card.Footer>
      </Card>
      <Card className="custom-card">
        <Card.Img variant="top" src="./recipebanner.png" />
        <Card.Body>
          <Card.Title className='card-title'>Chasing the Michelin star!</Card.Title>
          <Card.Text>
          "Michelin stars are all a good restaurant needs." Chef Ji-Yeon tells us about the hard work that goes into the path to culinary success.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div className='button-section'><Button className='button'>Read more!</Button></div>
          <small style={{ color: "var(--secondary)" }}>Last updated 2 weeks ago</small>
        </Card.Footer>
      </Card>
      <Card className="custom-card">
        <Card.Img variant="top" src="./barman.png" />
        <Card.Body>
          <Card.Title className='card-title'>Hideaki Tsuji, the bar sensei</Card.Title>
          <Card.Text>
          Behind the bar, between tricks with bottles of intricate mixtures, Hideaki Sensei, the master of drinks, greets us.
          "Not everything in life is ramen" he comments before laughing.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div className='button-section'><Button className='button'>Read more!</Button></div>
          <small style={{ color: "var(--secondary)" }}>Last updated 1 week ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupBlog;