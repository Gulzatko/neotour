import {Outlet, Link} from 'react-router-dom';


export const Layout =()=>{
   
        return (
            <>
              <main>
               <Link to="/"></Link>
               <Link to="/id"></Link>
             </main>
             <Outlet/>
            </>
        )
    }
