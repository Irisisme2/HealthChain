// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function Notifications(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  // Dane medyczne, dla których pacjent może wybrać powiadomienia
  const medicalNotifications = [
    "New test results available",
    "Appointment reminders",
    "Prescription updates",
    "Health tips and recommendations",
    "Emergency alerts",
    // Dodaj więcej opcji według potrzeb
  ];

  return (
    <Card mb="20px" mt="40px" mx="auto" maxW="410px" {...rest}>
      <Flex align="center" w="100%" justify="space-between" mb="30px">
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="2xl"
          mb="4px"
        >
          Medical Notifications
        </Text>
        <Menu />
      </Flex>
      {/* Generowanie przełączników dla dostępnych powiadomień medycznych */}
      {medicalNotifications.map((notification, index) => (
        <SwitchField
          key={index}
          isChecked={true} // Domyślnie zaznaczony
          reversed={true}
          fontSize="sm"
          mb="20px"
          id={`notification-${index}`}
          label={notification}
        />
      ))}
    </Card>
  );
}
