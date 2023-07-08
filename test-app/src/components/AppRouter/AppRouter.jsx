import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import UsersPage from "../../pages/UsersPage/UsersPage";
import UserDetailPage from "../../pages/UserDetailPage/UserDetailPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HelloPage from "../../pages/HelloPage/HelloPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />}/>
            <Route path={'/hello'} element={<HelloPage />}/>
            <Route path={'/about'} element={<AboutPage />}/>
            <Route path={'/users'} element={<UsersPage />}/>
            <Route path={'/users/:id'} element={<UserDetailPage />}/>
            <Route path={'/*'} element={<ErrorPage />}/>
        </Routes>
    );
};

export default AppRouter;