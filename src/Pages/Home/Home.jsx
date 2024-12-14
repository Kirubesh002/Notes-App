import { useState, useEffect } from "react";
import NoteCard from "../../components/NoteCardDetails/NoteCard";


const Home = () => {
  const [storedUserName, setStoredUserName] = useState("");
  const [greeting, setGreeting] = useState(""); // State for dynamic greeting

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        const { storedName } = parsedUserData;
        setStoredUserName(storedName);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }

    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <><div className="rout">
      <p >Home Page /  <span>Your Notes</span></p> 
    </div>
    
    <div className="note">
        <h3 className="model-title greeting">
          {greeting}, {storedUserName}!
        </h3>
        <NoteCard />
      </div></>
  );
};

export default Home;
