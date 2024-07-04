import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import Card from 'components/card/Card';

const threads = {
  1: { id: 1, title: 'Diabetes Support Group', description: 'Discuss tips and support for managing diabetes.' },
  2: { id: 2, title: 'Heart Health', description: 'Share experiences and advice for maintaining heart health.' },
  3: { id: 3, title: 'Mental Health Awareness', description: 'Talk about mental health issues and find support.' },
};

function ThreadPage() {
  const { id } = useParams();
  const thread = threads[id];

  return (
    <Box p="4" maxW="600px" mx="auto">
      <Card p="4">
        <Heading as="h3" size="lg">{thread.title}</Heading>
        <Text mt="4">{thread.description}</Text>
      </Card>
    </Box>
  );
}

export default ThreadPage;
