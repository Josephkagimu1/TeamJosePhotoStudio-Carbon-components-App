import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './img/logo.png';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
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
  Content
} from 'carbon-components-react';

const App = () => <HeaderContainer render={({
  isSideNavExpanded,
  onClickSideNavExpand
}) => <>

    <Router>
      <Header aria-label="IBM Platform Name">

        <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
        <HeaderName as={Link} to="/" prefix="">
          <img src={logo} alt='logo' width='100' ></img>
        </HeaderName>

        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem as={Link} to="/home">Home</HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/about">About</HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/services">Services</HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/contact">Contact</HeaderMenuItem>
        </HeaderNavigation>

      </Header>

      {/* This is side Nav */}
      <SideNav className='SideNav' isFixedNav expanded={true} i ChildOfHeader={false} aria-label="Side navigation">
        <SideNavItems className='text'>

          <SideNavLink to="/Otherproucts" as={Link} >
            Other Products
          </SideNavLink>
          <SideNavLink to="Samplephotos" as={Link} >
            Sample Photos
          </SideNavLink>

          <SideNavMenu title="More">
            <SideNavMenuItem href="#">
              Tasks
            </SideNavMenuItem>
            <SideNavMenuItem href="#">
              Events
            </SideNavMenuItem>
          </SideNavMenu>

        </SideNavItems>
      </SideNav>

    <Content>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
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
