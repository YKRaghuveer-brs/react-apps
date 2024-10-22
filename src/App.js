import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Navbar';
import Clock from "./Clock";
import Rocket from "./RocketLaunch";
import RockPaperScissor from "./RockPaperScissor";
import TicTacToe from "./TicTacToe";
import Meditation from "./Meditation";
import ShoppingCart from "./Ecommerce";
import IssueTracker from "./IssueTracker";
import FirstComponent2 from "./FirstComponent2";
import FirstComponent from "./FirstComponent";
const App = () => {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  // Function to handle tab changes
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  // Render the component based on the active tab
  const renderComponent = () => {
    switch (activeTab) {
      case 0:
        return <Clock />;
      case 1:
        return <IssueTracker/>; // Placeholder for Issues Tracker component
      case 2:
        return <Rocket />;
      case 3:
        return <TicTacToe/>; // Placeholder for Tic Tac Toe component
      case 4:
        return <RockPaperScissor/>; // Placeholder for Rock Paper Scissors component
      case 5:
        return <Meditation/>; // Placeholder for Meditation component
      case 6:
        return <FirstComponent/>; // Placeholder for Form Wizard component
      case 7:
        return <ShoppingCart/>; // Display FirstComponent when the last tab is selected
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <Navbar onTabChange={handleTabChange} />
      <div style={{ padding: '20px' }}> {/* Add padding for spacing */}
        {renderComponent()}
      </div>
    </ChakraProvider>
  );
};

export default App;
