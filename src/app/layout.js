'use client'
import './globals.css'
import { useState, useEffect } from 'react'
import CustomSelect from './components/CustomSelect'
import Footer from './components/Footer'
import Image from 'next/image';
import MobileFooter from './components/MobileFooter'

export default function RootLayout({ children }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');
  const [isMobile, setIsMobile] = useState(false);

  const accordionData = [
    { title: "Ideal For", options: ["MEN", "WOMEN", "BABY & KIDS"] },
    { title: "Occasion", options: ["CASUAL", "FORMAL", "PARTY", "SPORTS"] },
    { title: "Work", options: ["PRINTED", "EMBROIDERED", "SOLID", "WOVEN DESIGN"] },
    { title: "Fabric", options: ["COTTON", "POLYESTER", "SILK", "WOOL", "LINEN"] },
    { title: "Segment", options: ["LUXURY", "PREMIUM", "MAINSTREAM", "ECONOMY"] },
    { title: "Suitable For", options: ["SUMMER", "WINTER", "ALL SEASON"] },
    { title: "Raw Materials", options: ["ORGANIC", "SYNTHETIC", "NATURAL BLEND"] },
    { title: "Patterns", options: ["STRIPED", "CHECKED", "SOLID", "PRINTED"] }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <div className="page-container">
          <header className="main-header">
            <div className="top-bar">
              <div className="top-bar-content">
                <div className="top-bar-item">
                  <Image src="/element.svg" alt="Element" width={16} height={16} />
                  <span>Lorem ipsum dolor</span>
                </div>
                <div className="top-bar-item">
                  <Image src="/element.svg" alt="Element" width={16} height={16} />
                  <span>Lorem ipsum dolor</span>
                </div>
                <div className="top-bar-item">
                  <Image src="/element.svg" alt="Element" width={16} height={16} />
                  <span>Lorem ipsum dolor</span>
                </div>
              </div>
            </div>
            <div className="header-content">
              <nav className="main-nav">
                <div className="logo-container">
                  <div className="logo">
                    <img src="/logo.svg" alt="Logo" />
                  </div>
                  <span className="logo-text">LOGO</span>
                </div>
                <div className="icon-group">
                  <Image src="/search.svg" alt="Search" width={24} height={24} />
                  <Image src="/heart.svg" alt="Wishlist" width={24} height={24} />
                  <Image src="/bag.svg" alt="Shopping Bag" width={24} height={24} />
                  <Image src="/profile.svg" alt="Profile" width={24} height={24} />
                  <select className="language-select" defaultValue="ENG">
                    <option value="ENG">ENG</option>
                    <option value="HND">HND</option>
                  </select>
                </div>
              </nav>
              <nav className="sub-nav">
                <ul>
                  <li>SHOP</li>
                  <li>SKILLS</li>
                  <li>STORIES</li>
                  <li>ABOUT</li>
                  <li>CONTACT US</li>
                </ul>
              </nav>
            </div>
          </header>
          <section className="red-section">
            <h1 className="discover-text">DISCOVER OUR PRODUCTS</h1>
            <p className="discover-subtext">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </section>
          <section className="filter-section">
            <div className="filter-controls">
              <span className="items-count">3425 Items</span>
              <button 
                className="sidebar-toggle"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <span className="toggle-icon">{'>'}</span>
                <span className="toggle-text">
                  {isMobile ? 'FILTER' : isSidebarOpen ? 'HIDE FILTER' : 'SHOW FILTER'}
                </span>
              </button>
            </div>
            <CustomSelect 
              value={sortBy}
              onChange={(value) => setSortBy(value)}
            />
          </section>
          <div className="content-wrapper">
            <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
              <div className="checkbox-wrapper">
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkbox-text">Customizable</span>
                </label>
              </div>
              
              <div className="accordion-container">
                {accordionData.map((section, index) => (
                  <div key={index} className="accordion-item">
                    <button 
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="accordion-title-group">
                        <span className="accordion-title">{section.title}</span>
                        <span className="accordion-all">ALL</span>
                      </div>
                      <span className={`accordion-icon ${openAccordion === index ? 'open' : ''}`}>
                        {'>'}
                      </span>
                    </button>
                    
                    <div className={`accordion-content ${openAccordion === index ? 'open' : ''}`}>
                      <div className="unselect-all">Unselect All</div>
                      {section.options.map((option, optIndex) => (
                        <label key={optIndex} className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkbox-text">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
            <main className="products-section">
              {children}
            </main>
          </div>
          <Footer />
          <MobileFooter />
        </div>
      </body>
    </html>
  );
}

