import { Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LandingPageButton } from "../components/Shared/Buttons";

export default function Unauthorized() {
  const navigate = useNavigate();
  return (
    <Box
      display="grid"
      placeItems="center"
      textAlign="center"
      height="100vh"
      margin="auto"
    >
      <Box>
        <Heading fontFamily='"Cabin", sans-serif' size="lg">
          403 FORBIDDEN
        </Heading>
        <Text fontFamily='"Inter", sans-serif'>
          Sorry, you're not authorized to go to this page.
        </Text>
        <LandingPageButton
          name="Home"
          type="primary"
          section={null}
          testid="login-button"
          navigate={() => navigate("/")}
        />
        <LandingPageButton
          name="Login"
          type="primary"
          section={null}
          testid="login-button"
          navigate={() => navigate("/login")}
        />
      </Box>
    </Box>
  );
}
