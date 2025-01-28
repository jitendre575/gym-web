import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa";
import logo from "../../asstes/img/logo-1-light.png";
function Header () {
  return<>
      <header class="site-header header-style-3 mobile-sider-drawer-menu">
            
            <div class="top-bar">
                <div class="container">

                        <div class="d-flex justify-content-between">

                            <div class="wt-topbar-left d-flex flex-wrap align-content-center">
                                <div class="wt-topbar-left-info">
                                    <span>Follow Us -</span>
                                    <ul class="social-icons">
                                        <li><a href="javascript:void(0);" ><FaFacebookF /></a></li>
                                        <li><a href="javascript:void(0);" ><FaTwitter /></a></li>
                                        <li><a href="javascript:void(0);"   ><FaLinkedinIn /></a></li>
                                        <li><a href="javascript:void(0);" ><FaPinterest /></a></li>
                                    </ul>
                                </div> 
                            </div>

                            <div class="wt-topbar-right d-flex flex-wrap align-content-start">
                                <ul class="wt-topbar-right-info">
                                    <li><span>Our Times </span> - Mon - Sat : 9am to 7pm</li>
                                </ul>
                            </div>

                        </div>
                       

                </div>
            </div>   
                    

            <div class="sticky-header main-bar-wraper  navbar-expand-lg">
                <div class="main-bar">  
                                    
                    <div class="container clearfix"> 
                
                        <div class="logo-header">
                            <div class="logo-header-inner logo-header-one">
                                <a href="index.html">
                                <img src={logo} alt=""/>
                                </a>
                            </div>
                        </div>  
                        
               
                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggler collapsed">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar icon-bar-first"></span>
                            <span class="icon-bar icon-bar-two"></span>
                            <span class="icon-bar icon-bar-three"></span>
                        </button> 

                 
                        <div class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                        
                            <ul class=" nav navbar-nav">
                                <li class="active has-child"><a href="javascript:;">Home</a><div class="fa fa-angle-right submenu-toogle"></div> 
                                                                                                  
                                </li>
                                
                                <li class="has-child"><a href="javascript:;">About</a><div class="fa fa-angle-right submenu-toogle"></div>
                                                                  
                                </li>                                    
                                <li class="has-child"><a href="javascript:;">Gallery</a><div class="fa fa-angle-right submenu-toogle"></div>
                                                             
                                </li>
                                <li class="has-child"><a href="javascript:;">Classes</a><div class="fa fa-angle-right submenu-toogle"></div>
                                                                  
                                </li>
                                                           
                            
                                <li class="has-child"><a href="javascript:;">Blog</a><div class="fa fa-angle-right submenu-toogle"></div>
                                                          
                                </li>                                                                

                        
                            </ul>

                        </div>
                        
       
                        <div class="extra-nav header-3-nav">
                            <div class="extra-cell">
                                <form action="https://thewebmax.org/search" method="get" class="header3-search">
                                    <div class="input-group">
                                        <input class="form-control" value="" name="q" type="search" placeholder="Search..."/>
                                        <span class="input-group-append"><button type="button" class="search-btn"><i class="fa fa-search"></i></button></span>
                                    </div>   
                                </form>                                
                            </div>                                
                        </div>                             
                    
                                                        
                        
                    </div>    
                
                
                </div>
            </div>

            
        </header></>
}
export default Header;