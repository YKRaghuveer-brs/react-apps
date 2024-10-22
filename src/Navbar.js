import React from 'react';
import { Box, Tab, TabList, Tabs, useBreakpointValue } from '@chakra-ui/react';

const Navbar = ({ onTabChange }) => {
  // Use breakpoint value to determine tab orientation
  const tabOrientation = useBreakpointValue({ base: 'vertical', md: 'horizontal' });
  const isVertical = tabOrientation === 'vertical';

  return (
    <Box bg="teal.500" padding={{ base: "2", md: "4" }} width="100%">
      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        defaultIndex={0}
        onChange={onTabChange}
        orientation={tabOrientation}
        isFitted={!isVertical} // Horizontal tabs will stretch to fit
      >
        <TabList
          flexDirection={isVertical ? 'column' : 'row'}
          justifyContent={isVertical ? 'center' : 'space-between'}
          alignItems="center"
          width={isVertical ? '100%' : 'auto'}
        >
          <Tab fontSize={{ base: "sm", md: "md" }}>Simple Clock</Tab>
          <Tab fontSize={{ base: "sm", md: "md" }}>Issues Tracker</Tab>
          <Tab fontSize={{ base: "sm", md: "md" }}>Rocket Launch</Tab>
          <Tab fontSize={{ base: "sm", md: "md" }}>Tic Tac Toe</Tab>
          <Tab fontSize={{ base: "sm", md: "md" }}>Rock Paper Scissors</Tab>
          <Tab fontSize={{ base: "sm", md: "md" }}>Meditation</Tab>
          <Tab fontSize={{ base: "sm", md: "md" }}>Form Wizard</Tab>
          <Tab fontSize={{ base: "sm", md: "md" }}>eCommerce</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default Navbar;
