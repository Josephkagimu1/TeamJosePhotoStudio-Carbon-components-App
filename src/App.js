import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './img/logo.png';
// import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Otherproucts from './pages/Other-products';
import Samplephotos from './pages/Sample-photos';

import {
  Header,
  HeaderName,
  HeaderMenuButton,
  HeaderContainer,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  Content,
  HeaderMenu
} from 'carbon-components-react';

const App = () => <HeaderContainer render={({
  isSideNavExpanded,
  onClickSideNavExpand
}) => <>

    <Router>
      <Header aria-label="IBM Platform Name">

        <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
        <HeaderName prefix="">
          <img src={logo} alt='logo' width='100' ></img>
        </HeaderName>

        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem as={Link} to="/home">Home</HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/about">About</HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/services">Gallery</HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/contact">Contact</HeaderMenuItem>

          <HeaderMenu menuLinkName="more" >
            <HeaderMenuItem as={Link} to="/Otherproucts">Other Products</HeaderMenuItem>
            <HeaderMenuItem as={Link} to="/Samplephotos">wallpapers - free to use</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>

      </Header>

      {/* This is side Nav */}
      <SideNav
        expanded={isSideNavExpanded}
        isPersistent={false}   // IMPORTANT for mobile
        aria-label="Side navigation"
      >

        <SideNavItems className='text'>
          <SideNavLink to="/Home" as={Link} >
            Home
          </SideNavLink>
          <SideNavLink to="/About" as={Link} >
            About
          </SideNavLink>
          <SideNavLink to="/Services" as={Link} >
            Gallery
          </SideNavLink>
          <SideNavLink to="/Contact" as={Link} >
            Contact
          </SideNavLink>

          <SideNavMenu title="more">
            <SideNavMenuItem to="/Otherproucts" as={Link}>
              Other proucts
            </SideNavMenuItem>
            <SideNavMenuItem to="/Samplephotos" as={Link}>
              wallpapers - free to use
            </SideNavMenuItem>
          </SideNavMenu>

        </SideNavItems>
      </SideNav>

      <Content id="main-content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Side Nav links */}
          <Route path="/Otherproucts" element={<Otherproucts />} />
          <Route path="/Samplephotos" element={<Samplephotos />} />

        </Routes>
      </Content>

    </Router>

  </>
} />

export default App;
