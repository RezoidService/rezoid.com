
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Home from "../../../../assets/images/HomeCleaning.jpg"

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";



function HomeCleaning() {
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
                        )}, url(${Home})`,
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
                            Home Cleaning

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
                            title="Home Cleaning"
                            description="Rezoid offers on-demand home cleaning and housekeeping services to help you keep your home clean and sanitary. Rezoid is second to none in offering the greatest house cleaning services, with professional quality equipment, on-time and dependable services, and trained workers."
                        />
                        <DefaultInfoCard
                            description="house Basic Cleaning is one of our house cleaning services."
                        />
                        <DefaultInfoCard
                            description="- Home Thorough cleaning"
                        />
                        <DefaultInfoCard
                            description="- Removal of stains."
                        />
                        <DefaultInfoCard
                            description="- Dusting and cleaning the floor"
                        />
                        <DefaultInfoCard
                            description="- Cleaning of furniture and cabinets"
                        />
                        <DefaultInfoCard
                            description="- Decontamination and sanitation"
                        />
                        <DefaultInfoCard
                            description="- Vacuuming and other tasks"
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

export default HomeCleaning;
