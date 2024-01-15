
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Sofa from "../../../../assets/images/SofaCleaning.jpg"

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";


function SofaCleaning() {
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
                        )}, url(${Sofa})`,
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
                            Sofa Cleaning
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
                            icon="S"
                            title="Sofa Cleaning"
                            description="Furniture adds interest to an otherwise uninteresting living setting. Sofas, in particular, provide not only aesthetic value but also comfort and homeliness. As a result, it is important to keep this everyone's favorite area clean and sanitary so that they do not become a blemish on first impressions or even one's health."
                        />
                        <DefaultInfoCard
                            description="Rezoid offers on-demand couch cleaning services such as couch Complete Dusting.
"
                        />
                        <DefaultInfoCard
                            description="- Vacuuming the sofa"
                        />
                        <DefaultInfoCard
                            description="- Removal of stains"
                        />
                        <DefaultInfoCard
                            description="- Shampooing and scrubbing the sofa"
                        />
                        <DefaultInfoCard
                            description="- Clean Sofa Covers"
                        />
                        <DefaultInfoCard
                            description="- Deep cleaning to eliminate allergies and dust"
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

export default SofaCleaning;
