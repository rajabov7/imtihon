import { Box, IconButton } from "@mui/material";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import GithubIcon from "../../assets/icons/GithubIcon";

const SocialIcons = () => {
  return (
    <Box display="flex" gap={2} mt={2}>
      <IconButton color="primary">
        <TwitterIcon />
      </IconButton>
      <IconButton color="primary">
        <FacebookIcon />
      </IconButton>
      <IconButton color="primary">
        <InstagramIcon />
      </IconButton>
      <IconButton color="primary">
        <GithubIcon />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
