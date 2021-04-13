import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StoreProvider } from './Store/store';
import 'antd/dist/antd.css'

import "./App.css"

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<Router>
				<App />
			</Router>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
