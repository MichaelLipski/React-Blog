import React from 'react';
import { Link } from 'react-router-dom';

const PhotosList = ({ photos }) => (
    <>
    {photos.map((photo, key) => (
        <Link className="photo-list-item" key={key} to={`/photo/${photo.name}`}>
            <h3>{photo.title}</h3>
            <p>{photo.content[0].substring(0, 150)}...</p>
            <div>{photo.image}</div>
        </Link>
    ))}
    </>
);

export default PhotosList;