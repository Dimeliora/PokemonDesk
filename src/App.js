import React from 'react';
import cn from 'classnames';
import s from './App.modules.scss';
import './custom.css';

const App = () => {
    return (
        <div>
            <h1 className={cn(s.title, 'underline')}>First Component!</h1>
        </div>
    )
}

export default App;