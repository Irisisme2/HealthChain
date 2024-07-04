// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  // Przykładowe dane medyczne
  const medicalData = [
    { title: "Blood Type", value: "A+" },
    { title: "Height", value: "180 cm" },
    { title: "Weight", value: "75 kg" },
    { title: "Allergies", value: "Pollen, Penicillin" },
    { title: "Medical Conditions", value: "Hypertension, Diabetes" },
    { title: "Medications", value: "Metformin, Lisinopril" },
    { title: "Last Checkup", value: "12/05/2023" },
    { title: "Next Appointment", value: "10/12/2024" },
    // Dodaj więcej danych medycznych według potrzeb
  ];

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'
      >
        Medical Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        {medicalData.map((data, index) => (
          <Information
            key={index}
            boxShadow={cardShadow}
            title={data.title}
            value={data.value}
          />
        ))}
      </SimpleGrid>
    </Card>
  );
}
