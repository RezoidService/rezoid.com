
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ACRepair from "../../../../assets/images/ACRepair.jpg"


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";



function AcRepair() {
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
                        )}, url(${ACRepair})`,
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
                            AC Repair
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
                            icon="A"
                            title="AC Repair"
                            description="When refrigerators start to malfunction, prompt and dependable repair is essential. Rezoid, on the other hand, will not skimp on repair quality."

                        />
                        <DefaultInfoCard
                            description="We offer on-demand refrigerator repair and maintenance at your house, distinguished by quality, expertise, cost, and rapid response."
                        />
                        <DefaultInfoCard
                            description="- Cooling Problems"

                        />
                        <DefaultInfoCard
                            description="- Water Leakage Issues"
                        />
                        <DefaultInfoCard
                            description="- Airflow Concerns"

                        />
                        <DefaultInfoCard
                            description="- Noisy Appliance Repairs"

                        />

                        <DefaultInfoCard
                            description="- AC Jet Services"

                        />

                        <DefaultInfoCard
                            description="- AC Gas Refilling"

                        />
                        <DefaultInfoCard
                            description="- Other maintenance needs or issues"

                        />

                    </Container>
                </MKBox>

            </Card >
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default AcRepair;
