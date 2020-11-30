import React from "react";

import { Card } from "react-bootstrap";

const ListMovies = (props) => {
  return (
    <div className="listMovies">
      {props.movies.map((el) => {
        return (
          <div className="movie">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={el.image} />
              <Card.Body>
                <Card.Title> {el.name} </Card.Title>
                <Card.Text>{el.year}</Card.Text>
                <Card.Text> {el.rating} </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ListMovies;
