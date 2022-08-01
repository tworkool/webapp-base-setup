import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import NotificationManager from "../../components/notification_manager";
import PageManager from "../../components/page_manager";
import "./style.scss";

const App = () => {
  return (
    <div className="wsb-app-container">
      <NotificationManager />
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
