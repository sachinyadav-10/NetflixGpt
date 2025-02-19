import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/browse',
            element: <Browse />,
        },
    ]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName ,photoURL} = user;
                dispatch(addUser({ 
                    uid:uid, 
                    email:email, 
                    displayName : displayName, 
                    photoURL: photoURL 
                }));
            } else {
                dispatch(removeUser());
            }
        });

        // Cleanup function to unsubscribe from the listener
        return () => unsubscribe();
    }, [dispatch]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;