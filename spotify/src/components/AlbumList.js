import React, { useState } from 'react';
import data from '../data';
import Album from './Album';

const AlbumList = () => {
  const [albums, setAlbums] = useState(data.albums.items);
  return (
    <div>
      {albums.map(album => (
        <Album key={album.id} data={album} />
      ))}
    </div>
  );
};

export default AlbumList;
