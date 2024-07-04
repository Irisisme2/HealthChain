import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import DiscussionForum from './DiscussionForum';
import DoctorRecommendations from './DoctorRecommendations';

function HealthCommunity() {
  return (
    <Box p="4">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4">
        <DiscussionForum />
        <DoctorRecommendations />
      </SimpleGrid>
    </Box>
  );
}

export default HealthCommunity;
