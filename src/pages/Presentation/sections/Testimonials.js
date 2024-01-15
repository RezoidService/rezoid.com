
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";



function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Dedication results in high-quality work</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1000+ customer
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Rezoid, a multifaceted expert in interior design, home care services, and insurance, is committed to providing great services in these areas. Our all-encompassing and collaborative strategy strives to create enticing interior spaces, improve household upkeep, and improve life security. Our clients range from individuals to corporations, all of which are looking to better their environments and future possibilities. Rezoid strives to be a trusted, productive, and preferred name in a variety of sectors by offering cutting-edge, inventive, and high-quality interior designs.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review=" I recently had a fantastic experience with Rezoid services & solutions for repairs and maintenance. The team's professionalism, attention to detail, and efficient problem-solving exceeded my expectations. My home is now in impeccable condition, and I appreciate their transparent pricing and adherence to timelines. Highly recommend for a hassle-free and top-notch home service!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"

              date="1 week ago"
              review=" As a busy professional, I found a reliable and trustworthy home services partner in Rezoid services & solutions. Their proficient and trustworthy team provided detailed explanations of needed repairs, fair pricing, and efficient completion of tasks, respecting both my time and home. For anyone in search of a dependable and skilled home services provider, [Home Services Company] is the perfect choice."

            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard

              date="3 weeks ago"
              review="Rezoid services & solutions is a standout in the home services industry, offering a highly skilled and customer-focused team. Their expertise, impressive variety of services, and outstanding quality of work make them my go-to choice for home maintenance. Fair pricing, transparent communication, and punctuality add to the overall exceptional experience."

            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />

      </Container>
    </MKBox>
  );
}

export default Information;
