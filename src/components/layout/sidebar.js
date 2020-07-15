import React from 'react';
import NuevoAnime from '../animes/NuevoAnime';
import ListadoAnimes from '../animes/ListadoAnimes';

const Sidebar = () => {
    return (
        <aside className="col-md-2">
            <div className="sidebar-admin">
                <div align="center">
                    <h1>MERN<span>Series</span></h1>
                    <br />
                    <NuevoAnime />
                    <h5>Tus Animes</h5>
                </div>
                <ListadoAnimes />
            </div>
        </aside>
    );
}

export default Sidebar;