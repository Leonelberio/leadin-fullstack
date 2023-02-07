import Image from "next/image";

import logo from '../../../public/assets/Images/logoBlanc.webp';

import { ArrowDropDown } from "@mui/icons-material";
import Button from "../Button/Button";

import Link from "next/link";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LoginButtonContainer, NavContainer, NavWrapper } from "./Header.style";

import { IoMdNotifications } from "react-icons/io";
import { H5 } from "../H5/H5.style";
import Searchbar from "../Searchbar/Searchbar";

// import { Notifications } from "@mui/icons-material";

export default function Header() {
  const router = useRouter();
  const { isAuthenticated ,userInfo} = useSelector((state) => state.auth);



  const handleLogout = async () => {
    localStorage.clear();
    router.reload();
  };

  return <>
    <NavContainer>
      <NavWrapper>
        <div className="col1">

        <Link href="/">
          
            <Image
              src={logo}
              alt="Logo of LeadIn"
              width={100}
              height={50}
              priority={true}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          
        </Link>

        <H5>
          <Link href="/browse/category">Nos cours</Link>
        </H5>
        </div>
     


        <Searchbar />

       
        <div className="col1">

        {!isAuthenticated && (
          <LoginButtonContainer>
            
            <Button
              onClick={() => {
                router.push("/login");
              }}
              width={150}

            >
              Se connecter
            </Button>
          </LoginButtonContainer>
        )}
        {isAuthenticated && (
          <LoginButtonContainer>
            <div className="right">
            <p>Salut {userInfo.lastName} </p>
              <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgn&dpr=2&w=500"
                alt="Profile"
              />
              
              <div className="profile">
                <ArrowDropDown className="icon" />
                <div className="options">
                  {/* <span>Parametres</span>
                  <span>Espace Enseignants</span> */}

                  <span onClick={handleLogout}>Déconnection</span>
                </div>
              </div>
              <IoMdNotifications className="icon" />

            </div>
          </LoginButtonContainer>
        )}
        </div>
      </NavWrapper>
    </NavContainer>

    {/* <Link href="/">Home</Link>
      <Link href="/courses">Courses</Link>
      <Link href="notfound">Not Found</Link>
      <Link href="profile">Profile Page</Link> */}

    {/* <Button buttonLabel="Se connecter" primary/> */}

    {/* <Pattern /> */}
  </>;
}
