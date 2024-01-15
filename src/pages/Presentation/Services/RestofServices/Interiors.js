
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import InteriorsImg from "../../../../assets/images/Interiors.jpg"


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";



function Interiors() {
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
                        )}, url(${InteriorsImg})`,
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
                            Interiors
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
                            icon="I"
                            title="Interiors"
                            description="Even a magnificent edifice with a stunning appearance is incomplete unless the inside are well-tuned and repaired. Any structure requires competent and appealing interior design. Contact Rezoid for any type of bespoke interior design that is functional, dependable, and polished, with a dynamic appearance."
                        />
                        <DefaultInfoCard
                            title="Rezoid provided the following interior services:"
                            description="- Kitchen Design Interiors"
                        />
                        <DefaultInfoCard
                            description="- Living Room Design Interiors
"
                        />
                        <DefaultInfoCard
                            description="- Bathroom Design Interiors "
                        />
                        <DefaultInfoCard
                            description="- Office Design Interiors"
                        />
                        <DefaultInfoCard
                            description="- Bedroom Interior Design"
                        />
                        <DefaultInfoCard
                            description="- 3BHK House "
                        />
                        <DefaultInfoCard
                            description="- 2BHK House "
                        />
                        <DefaultInfoCard
                            description="- 1BHK House"
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

export default Interiors;
