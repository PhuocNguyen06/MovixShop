import Grid from "@mui/material/Unstable_Grid2";
import { Stack, Link, Avatar, Divider } from "@mui/material";
import Menu from "../Menu/menu";
// import Cart from '../features/cart/Cart'

const navbar = () => {
  <header>
    <Grid
      container
      paddingX={{ xs: 2, md: 0 }}
      paddingY={{ xs: 2, md: 4 }}
      alignItems="center"
    >
      <Grid xs={6} md={10}>
        <Stack direction="row" alignItems="center">
          <Menu />
          <Link ml={{ xs: 1, md: 0 }} mr={{ xs: 0, md: 3 }} href="#">
            <img src="images/logo.svg" alt="sneakers logo" />
          </Link>
          <Stack
            direction="row"
            spacing={{ md: 3, lg: 5 }}
            pl={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {["Collections", "Men", "Women", "About", "Contact"].map((text) => (
              <Link
                href="#"
                key={text}
                underline="none"
                sx={{
                  color: "secondary.dark",
                  "&:hover": {
                    color: "secondary.contrastText",
                    textDecoration: "underline solid hsl(26, 100%, 55%) 5px",
                    textUnderlineOffset: "48px",
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={6} md={2}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          {/* <Cart /> */}
          <Avatar
            src="/images/image-avatar.png"
            alt="Man with long hair"
            sx={{
              width: { xs: "24px", md: "40px" },
              height: { xs: "24px", md: "40px" },
              "&:hover": {
                border: "2px solid hsl(26, 100%, 55%)",
              },
            }}
          />
        </Stack>
      </Grid>
    </Grid>
    <Divider />
  </header>;
};

export default navbar;
