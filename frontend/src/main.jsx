import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalContextProvider } from './Context/GlobalContext.jsx'
import store from './redux/app/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalContextProvider>
)
