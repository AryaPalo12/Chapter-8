import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import article from './ArticleList';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App2 article={article}/>
    </React.StrictMode>
);
