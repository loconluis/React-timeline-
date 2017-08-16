import React from 'react';
import {
    Match,
    Miss,
    Link,
}   from 'react-router';

import Headers from '../../shared/components/Headers.jsx';

//Importacion de componentes
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import Post from './Post.jsx';
import Error404 from './Error404.jsx';

function Pages(){
    return (
        <main role="application">
            <Headers />
            {/*Lista de articulos*/}
            <Match
                pattern="/"
                exactly
                component={Home}
            />
            {/*Detalle de articulo*/}
            <Match
                pattern= "/post/:id"
                exactly
                component={Post}
            />
            {/*Perfil de usuario*/}
            <Match
                pattern= "/user/:id"
                exactly
                component={Profile}
            />
            {/*Error 404*/}
            <Miss component={Error404} />
        </main>
    );
}

export default Pages;