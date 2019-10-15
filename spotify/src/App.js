import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AlbumList from './components/AlbumList';

function App () {
	return (
		<div className='App'>
			<Navbar />
			<AlbumList />
		</div>
	);
}

export default App;
