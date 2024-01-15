
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Washing from "../../../../assets/images/WashingMachineRepair.jpg"

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";



function WashingMachineRepair() {
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
                        )}, url(${Washing})`,
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
                            Washing machine repair

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
                            icon="W"
                            title="Washing machine repair"
                            description="Our professional technicians emphasize customer pleasure by providing upfront pricing, authentic components, and helpful maintenance advice. With our efficient services, you can make your washing routine more convenient."
                        />
                        <DefaultInfoCard
                            description="Rezoid is your dependable choice for on-demand washing machine repair services, covering all models—top load, front load, and semi-automatic."
                        />
                        <DefaultInfoCard
                            title="Our expert technicians address common issues such as "
                            description=""
                        />
                        <DefaultInfoCard
                            description="- power failures"
                        />
                        <DefaultInfoCard
                            description="- drainage problems"
                        />
                        <DefaultInfoCard
                            description="- washing/spinning issues"
                        />
                        <DefaultInfoCard
                            description="- water leakage"
                        />
                        <DefaultInfoCard
                            description="- noisy operation"
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

export default WashingMachineRepair;
