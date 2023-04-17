import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h1 className="nav-head">Left Navbar Menu</h1>
              <ul className="left-nav-items">
                <li className="nav-list-item">Item 1</li>
                <li className="nav-list-item">Item 2</li>
                <li className="nav-list-item">Item 3</li>
                <li className="nav-list-item">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content-container">
              <h1 className="nav-head">Content</h1>
              <p className="text">
                Lorem ipsum dolor sitament, consectetur, adipising, elid, sed do
                elusmod tempor incididunt ut labore et dolare magna aliqua, Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-navbar">
              <h1 className="nav-head">Right Navbar </h1>
              <div className="left-nav-items">
                <div className="right-list-item">Ad 1</div>
                <div className="right-list-item">Ad 2</div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
