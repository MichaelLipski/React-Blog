import React from 'react';
import photoContent from './photo-content';
import PhotosList from '../components/PhotosList';

const PhotosListPage = () => (
    <>
    <h1 className="photos-list-banner">Photos</h1>
    <PhotosList photos={photoContent} />
    </> 
);

export default PhotosListPage;