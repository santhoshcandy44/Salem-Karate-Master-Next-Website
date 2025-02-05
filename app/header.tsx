'use client'
import React, { useEffect, useState } from 'react';
import styles from "./header.module.css"
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const Header = (props:any) => {



  const reLoad=(path:string) =>window.location.href=path

  const location=usePathname();

if(props.isHeader){
 
  var [navClassName,setNavClassName]=useState(styles.h_sticky_navbar_sticky);

}else{
  var [navClassName,setNavClassName]=useState(styles.h_sticky_navbar);
 
}





  if(location=="/" || location=="/sangam-of-traditional-arts/"){

    useEffect(() => {
      if(window.scrollY>600){
         
        setNavClassName(styles.h_sticky_navbar_sticky);
  
      }
  

      const handleScroll = () => {
        if(window.scrollY>600){
         
          
          setNavClassName(styles.h_sticky_navbar_sticky);
  
    
        }else{
         
          setNavClassName(styles.h_sticky_navbar);

        }
  
    
      };
  
      window.addEventListener('scroll', handleScroll);
    
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
  }

 



 

  return (




    <header
    
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,

    }}
  >

    <div>
      <nav  className={navClassName}>
        <div  className={`${styles.navbar_container} ${styles.nav_container}`}>
          <input type="checkbox" name="" id="" />
          <div className={styles.hamburger_lines}>
            <span className={`${styles.line} ${styles.line1}`}></span>
            <span className={`${styles.line} ${styles.line2}`}></span>
            <span className={`${styles.line} ${styles.line3}`}></span>
          </div>
          <ul className={styles.menu_items}>
          
            {((location === "/") || (location === "/about/") || (location === "/contact/") 
|| (location === "/register/") || (location === "/records/")  )&& (
              <>
  <li>
              <Link onClick={e=>reLoad("/")}
              href="/"
                className={(location==="/" ? styles.active : '')}
                passHref
               
              >
                Home
              </Link>
            </li>


              <li>
              <Link onClick={e=>reLoad("/sangam-of-traditional-arts/")}
               
                href="/sangam-of-traditional-arts/"
                passHref
              >
               Sangam Of Traditional Arts
              </Link>
            </li>

     
            <li>
              <Link onClick={e=>reLoad("/register/")}
               
                href="/register/"
                className={(location==="/register/" ?  styles.active : '')}
                passHref
              >
               Register
              </Link>
            </li>

  
          <li>
              <Link onClick={e=>reLoad("/records/")}
               
                href="/records/"
                className={(location==="/records/" ?  styles.active : '')}
                passHref
              >
                Records
              </Link>
            </li>

            <li>
              <Link onClick={e=>reLoad("/about/")}
                href="/about/"
                className={(location==="/about/" ?  styles.active : '')}
                passHref
              >
                About
              </Link>
            </li>
            <li>
              <Link onClick={e=>reLoad("/contact/")}
                href="/contact/"
                className={(location==="/contact/" ?  styles.active : '')}
                passHref
              >
                Contact
              </Link>
            </li>
              </>
            )}


{((location === "/sangam-of-traditional-arts/") || 
   (location === "/sangam-of-traditional-arts/contact/") || 
   (location === "/sangam-of-traditional-arts/register/") || 
   (location === "/sangam-of-traditional-arts/about/")) && (
  <>

    <li>
      <Link onClick={e=>reLoad("/sangam-of-traditional-arts/")}
        href="/sangam-of-traditional-arts/"
        passHref
        className={(location === "/sangam-of-traditional-arts/" ? styles.active : '')}

      >
        Home
      </Link>
    </li>

    <li>
      <Link onClick={e=>reLoad("/")}
        href="/"
        passHref
      >
        World Super Talents Book Of Records
      </Link>
    </li>

    <li>
      <Link onClick={e=>reLoad("/sangam-of-traditional-arts/register/")}
        href="/sangam-of-traditional-arts/register/"
        className={(location === "/sangam-of-traditional-arts/register/" ? styles.active : '')}
        passHref
      >
        Register
      </Link>
    </li>

    <li>
      <Link onClick={e=>reLoad("/sangam-of-traditional-arts/about/")}
        href="/sangam-of-traditional-arts/about/"
        className={(location === "/sangam-of-traditional-arts/about/" ? styles.active : '')}
        passHref
      >
        About
      </Link>
    </li>

    <li>
      <Link onClick={e=>reLoad("/sangam-of-traditional-arts/contact/")}
        href="/sangam-of-traditional-arts/contact/"
        className={(location === "/sangam-of-traditional-arts/contact/" ? styles.active : '')}
        passHref
      >
        Contact
      </Link>
    </li>

  </>
)}





        
          </ul>
       
          <a href="/"  className={styles.logo_wrapper}>
          <span className={styles.logo}>
            {props.isWST &&(
             "WST"
            )}
             {props.isSOT &&(
             "SOTA"
            )}
       
          </span>
          </a>

        </div>
      </nav>
    </div>
  </header>
  
  );
};



export default Header;
