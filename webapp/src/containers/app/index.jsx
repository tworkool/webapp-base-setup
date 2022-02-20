import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageManager from "../../components/page_manager";
import { setMessages } from "../../redux/actions/app_state";
import { getMessages } from "../../redux/selectors/appState";
import "./style";

const App = () => {
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  const handleBtnClick = useCallback(() => {
    dispatch(
      setMessages({ messages: [...messages, new Date().toISOString()] })
    );
  }, [dispatch, messages]);

  useEffect(() => {
    if (messages.length == 0) return;
    console.log(messages);
    alert(messages.toString());
  }, [messages]);

  return (
    <div className="wsb-app-container">
      <button onClick={handleBtnClick}>Send Message</button>
      <Router>
        <div className="wsb-page-wrapper">
          <Header
            links={[
              { to: "/", label: "Startseite" },
              { to: "/datenschutz", label: "Datenschutz" },
            ]}
          />
          <PageManager />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
