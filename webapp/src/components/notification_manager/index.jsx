import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMessages } from "../../redux/selectors/appState";
import "./style";

const NotificationManager = () => {
  const messages = useSelector(getMessages);
  const [lastMessageCount, setLastMessageCount] = useState(0);
  const [lastMessages, setLastMessages] = useState([]);

  useEffect(() => {
    if (messages.length == 0) return;
    console.log(messages);
    let _lastMessages = [];
    for (var i = lastMessageCount; i < messages.length; i++) {
      _lastMessages.push(messages[i]);
    }
    setLastMessages(_lastMessages);
    setLastMessageCount(messages.length);
  }, [messages]);

  return (
    <div className="wbs-notification-manager">
      {messages.map((e, i) => (
        <div
          key={i}
          className={`wbs-notification-manager__notification wbs-notification-manager__notification--${e.level}`}
        >
          <div className="wbs-notification-manager__notification__message">
            {e.message}
          </div>
          <div className="wbs-notification-manager__notification__timestamp">
            {new Date(e.id).toTimeString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationManager;
