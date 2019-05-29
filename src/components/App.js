import React from 'react';
import Header from './banners/Header';
import Footer from './banners/Footer';
import AllThumbnails from '../containers/AllThumbnails';
import CreateThumbnail from '../containers/CreateThumbnail';


export default function App() {
  return (
    <>
    <Header />
      <CreateThumbnail />
      <AllThumbnails />
    <Footer />
    </>
  );
}
