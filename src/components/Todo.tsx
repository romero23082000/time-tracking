import { type Todo as TodoType } from "../types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import { MenuCard } from "./MenuCard";

interface Props extends TodoType {
  onRemoveTodo: (id: number) => void;
  active: string;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  timeframes,
  img,
  fondo,
  onRemoveTodo,
  active,
}) => {
  return (
    <Card borderRadius="20px" backgroundColor={fondo} color="#fff">
      <CardHeader
        display="flex"
        justifyContent="end"
        overflow="hidden"
        height="40px"
        padding="0 20px"
        alignItems="center"
      >
        <Image src={img} width="70px" marginTop="12px" />
      </CardHeader>
      <CardBody
        borderRadius="16px"
        backgroundColor="var(--background-second-card)"
        _hover={{
          backgroundColor: "var(--hover-second-card)",
          cursor: "pointer",
        }}
        padding="20px"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width={{ sm: "180px" }}
        >
          <Text>{title}</Text>

          <MenuCard />
        </Flex>
        <Flex
          alignItems={{ base: "center", sm: "flex-start" }}
          justifyContent="space-between"
          width={{ sm: "180px" }}
          flexDirection={{ base: "row", sm: "column" }}
        >
          <Text
            fontSize={{ base: "2xl", sm: "44px" }}
            fontWeight="300"
            margin={{ sm: "15px 0px 8px 0px" }}
          >
            {timeframes[active].current}hrs
          </Text>
          <Text fontSize="xs" fontWeight="300">
            Last Week - {timeframes.weekly.previous}hrs
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
