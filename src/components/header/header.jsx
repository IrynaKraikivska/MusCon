import React from 'react';
import "./header.css";

const Header = () => {
    return(
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      {/* <a href="file:///C:/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
         <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
      </a> 
       <a href="file:///C:/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
         <img src="./Headers · Bootstrap v5.1_files/mdo.png" alt="mdo" width="40" height="32" class="rounded-circle"/>
         </a> */}

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="file:///C:/Users/iryna/AppData/Local/Temp/Temp1_bootstrap-5.1.3-examples%20(1).zip/bootstrap-5.1.3-examples/headers/index.html#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="file:///C:/Users/iryna/AppData/Local/Temp/Temp1_bootstrap-5.1.3-examples%20(1).zip/bootstrap-5.1.3-examples/headers/index.html#" class="nav-link px-2 link-dark">Features</a></li>
        <li><a href="file:///C:/Users/iryna/AppData/Local/Temp/Temp1_bootstrap-5.1.3-examples%20(1).zip/bootstrap-5.1.3-examples/headers/index.html#" class="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="file:///C:/Users/iryna/AppData/Local/Temp/Temp1_bootstrap-5.1.3-examples%20(1).zip/bootstrap-5.1.3-examples/headers/index.html#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="file:///C:/Users/iryna/AppData/Local/Temp/Temp1_bootstrap-5.1.3-examples%20(1).zip/bootstrap-5.1.3-examples/headers/index.html#" class="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
    );
};
export default Header;