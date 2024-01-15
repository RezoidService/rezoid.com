
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import HomeStayImg from "../../../../assets/images/HomeStay.jpg"

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";



function HomeStay() {
    return (
        <>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",

                    label: "8073404372",
                    color: "info",
                }}
                sticky
            />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${HomeStayImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            HomeStayImg
                        </MKTypography>

                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <MKBox component="section" py={12}>
                    <Container>
                        <DefaultInfoCard
                            icon="H"
                            title="Home Stay"
                            description="Rezoid has its own private property located outside of the city that provides a beautiful habitat for nature lovers, hypnotic natural beauty, and the finest weekend gateway to have a great time with friends and family. "
                        />
                        <DefaultInfoCard
                            title="The following are the amenities;"
                            description="- A club classroom experience with a King size bed"
                        />
                        <DefaultInfoCard
                            description="- Room service, power backup, elevator/lift"
                        />
                        <DefaultInfoCard
                            description="- Toilets that are clean and sanitary"
                        />
                        <DefaultInfoCard
                            description="- Services for barbeques"
                        />
                        <DefaultInfoCard
                            description="- Wifi and TV are available."
                        />

                    </Container>
                </MKBox>

            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default HomeStay;
