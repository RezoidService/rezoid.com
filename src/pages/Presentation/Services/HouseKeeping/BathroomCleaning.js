import Bathroom from "../../../../assets/images/BathroomCleaning.jpg"

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";



function BathroomCleaning() {
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
                        )}, url(${Bathroom})`,
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
                            Bathroom Cleaning

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
                            icon="B"
                            title="Bathroom Cleaning
"
                            description="Maintaining cleanliness is critical for healthy health and well-being. However, hygiene is more than just bathing twice a day and wearing clean clothing. To prevent hazards, one must instead guarantee that the main portions of the house are well-tended."
                        />
                        <DefaultInfoCard
                            title="Rezoid offers dependable and reasonably priced bathroom cleaning services, which include the following:"
                            description=""
                        />
                        <DefaultInfoCard
                            description="- Basic bathroom cleaning"
                        />
                        <DefaultInfoCard
                            description="- Deep cleaning the bathroom"
                        />
                        <DefaultInfoCard
                            description="- Getting Rid of Stains"
                        />
                        <DefaultInfoCard
                            description="- Cleaning Services"
                        />
                        <DefaultInfoCard
                            description="- Cleaning of bathroom fixtures"
                        />
                        <DefaultInfoCard
                            description="- Cleaning and upkeep of bathroom drains"
                        />
                        <DefaultInfoCard
                            description="- Decontamination and sanitation"
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

export default BathroomCleaning;
