import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { Card, CardTitle, CardContent, CardDescription, CardImage } from '../Card/Card';

const charactersListItem = ({ character }) => (
  <Card>
    <CardTitle>{character.name}</CardTitle>
    <CardContent>
      <CardImage image={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      <CardDescription>{character.description}</CardDescription>
      <Link to="/details">
        <Button background="#b52fb5" color="black">
          Detalhes
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default charactersListItem;
