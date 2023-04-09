import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      return (
        <div className="config-container">
          <h1 className="heading">Layout</h1>
          <ul className="list-container">
            <li className="list-item">
              <input
                type="checkbox"
                id="content"
                defaultChecked
                onChange={onChangeContent}
              />

              <label htmlFor="left">Content</label>
            </li>
            <li className="list-item">
              <input
                type="checkbox"
                id="left"
                defaultChecked
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="right">Left Navbar</label>
            </li>

            <li className="list-item">
              <input
                type="checkbox"
                id="right"
                defaultChecked
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="content">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
