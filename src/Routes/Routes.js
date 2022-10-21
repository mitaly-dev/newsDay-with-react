import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Profile from "../Others/Profile/Profile";
import Category from "../Pages/Category/Category";
import News from "../Pages/Category/News/News";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/SignIn&SignUp/Login/Login";
import Register from "../Pages/SignIn&SignUp/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
        path:'/',
        loader:()=>fetch('http://localhost:5000/news'),
        element:<Category></Category>,
        },
        {
        path:"/category/:id",
        loader:async({params})=>fetch(`http://localhost:5000/category/${params.id}`),
        element:<Category></Category>
        },
        {
        path:'/news/:id',
        loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`),
        element:<PrivateRoute><News></News></PrivateRoute>
        },
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/profile',element:<PrivateRoute><Profile></Profile></PrivateRoute>}
       
    ]
}
])
export default router