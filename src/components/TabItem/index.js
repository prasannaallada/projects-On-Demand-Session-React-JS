import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updatedActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
