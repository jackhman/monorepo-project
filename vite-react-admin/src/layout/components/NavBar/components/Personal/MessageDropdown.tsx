import imgUrl from "@shared/assets/images/funny.png"
const MessageDropdown = () => {
  return (
    <div className="message-dropdown-box">
      <ul className="message-dropdown-list">
        {[1, 2, 3].map(item => {
          return (
            <li key={item} className="message-dropdown-list-item">
              <img className="message-dropdown-list-item-avatar" src={imgUrl} />
              <span className="message-dropdown-list-item-center">
                <span className="message-dropdown-list-item-center-name">小火车况且况且</span>
                <span className="message-dropdown-list-item-center-title">
                  学习使人快乐
                </span>
                <span className="message-dropdown-list-item-center-time">
                  一天前
                </span>
              </span>
              <img
                className="message-dropdown-list-item-slt"
                src={imgUrl}
                
                alt=""
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MessageDropdown
