
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Refrigerator from "../../../../assets/images/RefrigeratorRepair.jpg"

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";



function RefrigeratorRepair() {
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
                        )}, url(${Refrigerator})`,
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
                            Refrigerator Repair
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
                            icon="R"
                            title="Refrigerator Repair"
                            description="When refrigerators begin to malfunction, fast and trustworthy repair is critical. However, you will not find Rezoid sacrificing on repair quality."

                        />
                        <DefaultInfoCard
                            description="We provide on-demand refrigerator repair and maintenance services at your home, distinguished by quality, competence, affordability, and prompt replies.
"
                        />
                        <DefaultInfoCard
                            description="- Compressor and Thermostat Challenges"
                        />
                        <DefaultInfoCard
                            description="- Sensor Problems"
                        />
                        <DefaultInfoCard
                            description="- Fan Motor Malfunctions"
                        />
                        <DefaultInfoCard
                            description="- Defrost Sensor and Timer Issues"
                        />
                        <DefaultInfoCard
                            description="- Heater Matrix Concerns"
                        />
                        <DefaultInfoCard
                            description="- PCBs and ECUs Repairs"
                        />
                        <DefaultInfoCard
                            description="- Other issues such as leaks, connectivity problems, and more."
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

export default RefrigeratorRepair;
