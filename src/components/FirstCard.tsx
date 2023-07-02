import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Avatar,
  Box,
  Text,
} from "@chakra-ui/react";
import perfil from "../assets/images/image-jeremy.png";

interface Props {
  active: string;
  setActive: any;
}

export const FirstCard: React.FC<Props> = ({ setActive, active }) => {
  const changeActive = (value: string) => {
    setActive(value);
  };

  return (
    <Card
      variant="elevated"
      borderRadius="15"
      backgroundColor="var(--background-second-card)"
      width={{ base: "350px", sm: "250px", md: "220px" }}
    >
      <CardHeader
        backgroundColor="var(--background-first-card)"
        borderRadius="15px"
        padding="20px"
      >
        <Flex
          flexDirection={{ base: "row", sm: "column" }}
          alignItems={{ base: "center", sm: "flex-start" }}
        >
          <Avatar
            name="avatar"
            src={perfil}
            border="3px solid #fff"
            size="lg"
          />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            margin={{ base: "15px 0px ", sm: "30px 0px" }}
            marginLeft={{ base: "15px" }}
          >
            <Text color="#fff" fontWeight="300" fontSize="xs">
              Report for
            </Text>
            <Text
              fontSize={{ base: "2xl", sm: "4xl" }}
              fontWeight="300"
              color="#fff"
            >
              Jeremy Robson
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody
        display="flex"
        flexDirection={{ base: "row", sm: "column" }}
        justifyContent="space-around"
        padding="20px"
      >
        <Text
          color={active === "daily" ? "#fff" : "var(--text-first-card)"}
          onClick={() => changeActive("daily")}
          _hover={{ color: "#fff", cursor: "pointer" }}
        >
          Daily
        </Text>
        <Text
          color={active === "weekly" ? "#fff" : "var(--text-first-card)"}
          onClick={() => changeActive("weekly")}
          _hover={{ color: "#fff", cursor: "pointer" }}
        >
          Weekly
        </Text>
        <Text
          color={active === "monthly" ? "#fff" : "var(--text-first-card)"}
          onClick={() => changeActive("monthly")}
          _hover={{ color: "#fff", cursor: "pointer" }}
        >
          Monthly
        </Text>
      </CardBody>
    </Card>
  );
};
