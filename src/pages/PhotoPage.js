import React from 'react';
import PhotosList from '../components/PhotosList';
import NotFoundPage from './NotFoundPage';
import photoContent from './photo-content';

const PhotoPage = ({ match }) => {
    const name = match.params.name;
    const photo = photoContent.find(photo => photo.name === name);

    if (!photo) return <NotFoundPage />

    const otherPhotos = photoContent.filter(photo => photo.name !== name);

    return (
    <>
    <h1>{photo.title}</h1>
    {photo.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
    ))}
    <h3>Other Photos:</h3>
    <PhotosList photos={otherPhotos} />
    </> 
    );
}

export default PhotoPage;