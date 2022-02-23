import React from 'react';
import photoContent from './photo-content';
import PhotosList from '../components/PhotosList';

const PhotosListPage = () => (
    <>
    <h1 className="photos-list-banner">Photos</h1>
    <div className="photos-list-container"><PhotosList photos={photoContent} /></div>
    </> 
);

export default PhotosListPage;