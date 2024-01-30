import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ToastContainer} from 'react-toastify';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*//     <Provider store={store}>*/}
        <App/>
        {/*<ToastContainer*/}
        {/*    autoClose={4000}*/}
        {/*    newestOnTop={true}*/}
        {/*    closeOnClick={true}*/}
        {/*    draggable={true}*/}
        {/*    pauseOnHover={false}*/}
        {/*    style={{paddingTop: "80px"}}*/}
        {/*/>*/}
        <ToastContainer
            autoClose={2000}
            newestOnTop={true}
            closeOnClick={true}
            draggable={true}
            pauseOnHover={false}
            style={{paddingTop: "20px"}}
        />
    </React.StrictMode>
)
//   {/*</Provider>*/}
// );




