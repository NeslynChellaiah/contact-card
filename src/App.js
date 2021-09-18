import * as React from "react";
import ContactList from "./components/contactList";
import PictureCard from "./components/pictureCard";

import './styles/app.css'


const App = () => {
  return (
    <div style={{height: "100vh", overflow: "hidden"}}>
      <div className="picture-container">
        <PictureCard />
      </div>
      <div className="contactList">
        <div className="contactList-container">
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
