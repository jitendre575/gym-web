import React from "react";

import Header from "../components/common/Header";
import Gellery from "../components/common/Gellery";
import Pricing from "../components/common/Pricing";
import Trener from "../components/common/Trener";
import Footer from "../components/common/Footer";
import Banner from "../components/common/Banner";
function Home(){
    return<>
<Header/>
<Banner/>
<Gellery/>
<Pricing/>
<Trener/>
<Footer/>
    </>
}

export default Home;