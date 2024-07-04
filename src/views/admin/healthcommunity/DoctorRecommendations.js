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
  Avatar,
  HStack,
  Collapse,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/card/Card';

const doctors = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', rating: 4.5, reviews: 20 },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Endocrinologist', rating: 4.7, reviews: 15 },
  { id: 3, name: 'Dr. Emily Johnson', specialty: 'Psychiatrist', rating: 4.8, reviews: 25 },
];

function DoctorRecommendations() {
  const [newReview, setNewReview] = useState({ doctorId: '', content: '' });
  const [reviews, setReviews] = useState({});
  const [showReviews, setShowReviews] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReviewSubmit = () => {
    const doctorId = newReview.doctorId;
    const newReviews = reviews[doctorId] ? [...reviews[doctorId]] : [];
    newReviews.push(newReview.content);
    setReviews({ ...reviews, [doctorId]: newReviews });
    setNewReview({ doctorId: '', content: '' });
  };

  const toggleReviews = (doctorId) => {
    setShowReviews({ ...showReviews, [doctorId]: !showReviews[doctorId] });
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box p="4" maxW="600px" mx="auto">
      <Heading as="h3" size="lg" mb="4">Doctor Recommendations</Heading>
      {doctors.map((doctor) => (
        <Card key={doctor.id} mb="4" p="4">
          <HStack spacing="4">
            <Avatar name={doctor.name} />
            <Box>
              <Heading as="h4" size="md">{doctor.name}</Heading>
              <Text>Specialty: {doctor.specialty}</Text>
              <Text>Rating: {doctor.rating} ({doctor.reviews} reviews)</Text>
              <Button size="sm" onClick={() => toggleReviews(doctor.id)} mt="2">
                {showReviews[doctor.id] ? 'Hide Reviews' : 'Show Reviews'}
              </Button>
              <Collapse in={showReviews[doctor.id]} animateOpacity>
                <VStack mt="4" spacing="4" align="stretch">
                  {reviews[doctor.id] && reviews[doctor.id].map((review, index) => (
                    <Box key={index} p="2" borderWidth="1px" borderRadius="lg">
                      <Text>{review}</Text>
                    </Box>
                  ))}
                </VStack>
              </Collapse>
            </Box>
          </HStack>
        </Card>
      ))}
      <Card mt="8" p="4">
        <Heading as="h4" size="md" mb="4">Add a Review</Heading>
        <FormControl mb="4">
          <FormLabel>Doctor ID</FormLabel>
          <Input
            name="doctorId"
            value={newReview.doctorId}
            onChange={handleInputChange}
            placeholder="Enter doctor ID"
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Review</FormLabel>
          <Textarea
            name="content"
            value={newReview.content}
            onChange={handleInputChange}
            placeholder="Write your review here"
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleReviewSubmit}>Submit Review</Button>
      </Card>
    </Box>
  );
}

export default DoctorRecommendations;
