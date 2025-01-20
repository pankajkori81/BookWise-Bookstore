import { Route, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../component/Authentication/Login";
import Register from "../component/Authentication/Register";
import Createbook from "../component/Bookstore/Createbook";
import Allbook from "../component/Bookstore/Allbook";
import Updatebook from "../component/Bookstore/Updatebook";
import Deletebook from "../component/Bookstore/Deletebook";
import Shop from "../pages/Shop";
import Singlebook from "../component/Bookstore/Singlebook";
import Booklist from "../component/Bookstore/Booklist";
import Protectroutes from "../ProtectRouter/Protectroutes";



const router=createBrowserRouter([

    {
        path:"/",
        element:<App/>,

        children:[

            {
                path:"/",
                element:<Home/>,
            },
            {

                path:"/about",
                element:<About/>
            },
            {

                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/createbook",
                element:<Createbook/>

            },
            {
                path:"/allbook",
                element:<Allbook/>

            },
            {

                path:"/singlebook/:id",
                element:<Singlebook/>

            },
            {

                path:"/updatebook/:id",
                element:<Updatebook/>

            },
            {


                path:"/deletebook/:id",
                element:<Deletebook/>
            },
            {
             
                path:"/booklist",
                element:<Booklist/>
                
            },

            
            {
                path:"/register",
                element:<Register/>
            },
            {

                path:"/login",
                element:<Login/>
            }
         

        ]
    }
])


export default router;