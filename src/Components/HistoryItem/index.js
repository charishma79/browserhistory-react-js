import './index.css'

const HistoryItem = props => {
  const {historyDetails, onClickDelete} = props
  const {timeAccessed, logoUrl, domainUrl, title, id} = historyDetails

  const deleteItem = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-item">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
        <div className="site-details">
          <img src={logoUrl} alt={domainUrl} className="site-logo" />
          <div className="site-container">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <button
          type="button"
          className="del-btn"
          data-testid="delete"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
