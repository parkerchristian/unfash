import React from 'react';
import Header from './banners/Header';
import Footer from './banners/Footer';
import Thumbnails from './thumbnails/Thumbnails';
import FashForm from './thumbnails/ThumbnailForm';


export default function App() {
  const thumbnailList = [
    {
      imgUrl: 'https://images.unsplash.com/photo-1556229174-5e42a09e45af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80',
      title: 'One dog'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1559032534-1a20db37cdd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      title: 'Two Dogs.'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
      title: 'and a third'
    }
  ];

  return (
    <>
    <Header />
      <FashForm />
      <Thumbnails thumbnails={thumbnailList} />
    <Footer />
    </>
  );
}
