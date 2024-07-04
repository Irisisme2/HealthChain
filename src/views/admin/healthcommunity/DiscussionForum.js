import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  Stack,
  Collapse,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Card from 'components/card/Card';

const forums = [
  { id: 1, title: 'Diabetes Support Group', description: 'Discuss tips and support for managing diabetes.' },
  { id: 2, title: 'Heart Health', description: 'Share experiences and advice for maintaining heart health.' },
  { id: 3, title: 'Mental Health Awareness', description: 'Talk about mental health issues and find support.' },
];

function DiscussionForum() {
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [showComments, setShowComments] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = () => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
    setNewPost({ title: '', content: '' });
  };

  const handleCommentChange = (postId, value) => {
    setComments({ ...comments, [postId]: value });
  };

  const handleCommentSubmit = (postId) => {
    const newComments = comments[postId] ? [...comments[postId]] : [];
    newComments.push(comments[postId]);
    setComments({ ...comments, [postId]: newComments });
    handleCommentChange(postId, '');
  };

  const toggleComments = (postId) => {
    setShowComments({ ...showComments, [postId]: !showComments[postId] });
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box p="4" maxW="600px" mx="auto">
      <Heading as="h3" size="lg" mb="4">Discussion Forums</Heading>
      {forums.map((forum) => (
        <Card key={forum.id} mb="4" p="4">
          <Flex justify="space-between" align="center">
            <Box>
              <Heading as="h4" size="md">{forum.title}</Heading>
              <Text>{forum.description}</Text>
            </Box>
            <Link to={`/forum/${forum.id}`}>
              <Button colorScheme="blue" size="sm">View Thread</Button>
            </Link>
          </Flex>
        </Card>
      ))}
      <Card mt="8" p="4">
        <Heading as="h4" size="md" mb="4">Create a New Post</Heading>
        <FormControl mb="4">
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            placeholder="Post title"
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Content</FormLabel>
          <Textarea
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            placeholder="Write your post here"
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handlePostSubmit}>Post</Button>
      </Card>
      <VStack mt="8" spacing="4" align="stretch">
        {posts.map((post) => (
          <Card key={post.id} p="4">
            <Heading as="h5" size="sm">{post.title}</Heading>
            <Text>{post.content}</Text>
            <Button size="sm" onClick={() => toggleComments(post.id)} mt="2">
              {showComments[post.id] ? 'Hide Comments' : 'Show Comments'}
            </Button>
            <Collapse in={showComments[post.id]} animateOpacity>
              <VStack mt="4" spacing="4" align="stretch">
                {comments[post.id] && comments[post.id].map((comment, index) => (
                  <Box key={index} p="2" borderWidth="1px" borderRadius="lg">
                    <Text>{comment}</Text>
                  </Box>
                ))}
                <FormControl>
                  <Textarea
                    value={comments[post.id] || ''}
                    onChange={(e) => handleCommentChange(post.id, e.target.value)}
                    placeholder="Write a comment"
                  />
                  <Button size="sm" mt="2" onClick={() => handleCommentSubmit(post.id)}>Add Comment</Button>
                </FormControl>
              </VStack>
            </Collapse>
          </Card>
        ))}
      </VStack>
    </Box>
  );
}

export default DiscussionForum;
