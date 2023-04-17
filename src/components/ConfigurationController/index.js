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

          <div className="list-container">
            <div className="list-item">
              <input
                type="checkbox"
                id="content"
                defaultChecked
                onChange={onChangeContent}
              />

              <label htmlFor="left">Content</label>
            </div>
            <div className="list-item">
              <input
                type="checkbox"
                id="left"
                defaultChecked
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="right">Left Navbar</label>
            </div>

            <div className="list-item">
              <input
                type="checkbox"
                id="right"
                defaultChecked
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="content">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
