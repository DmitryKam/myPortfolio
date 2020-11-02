import React from 'react';
import './App.css';
import Header from './header/Header';
import Mains from './main/Mains';
import Skills from './skills/Skills';
import MyWork from './myWork/MyWork';
import RemoteWork from './remoteWork/RemoteWork';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Mains/>
            <Skills/>
            <MyWork/>
            <RemoteWork/>
            <Contacts/>
            <Footer />
        </div>
    );
}

export default App;
