import LoansImg from "../../../../assets/images/Loans.jpg"

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



function Loans() {
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
                        )}, url(${LoansImg})`,
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
                            Loans
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
                            icon="L"
                            title="Loans"
                            description="Everyone dreams of having a great life, yet financial restraints are common to everyone in some form, and one should not allow that stop them from attempting or achieving something. As a result, Rezoid also functions as a financial institution, offering modest to big loan services to assist anybody in achieving their goals."

                        />
                        <DefaultInfoCard
                            title="The following are some of the loans that Rezoid provides:"
                            description="Personal Loan - With a short inquiry and verification process, a rapid, dependable, and easy personal loan with much lower interest will be issued to your bank account quickly."
                        />
                        <DefaultInfoCard
                            description="Business Loan - To help your business grow and succeed, Rezoid understands and offers hassle-free loan services for every sort of business, with a quick and easy enquiry and verification procedure."

                        />
                        <DefaultInfoCard
                            description="Home Loan - Everyone wishes to own a home at some point in their lives, whether it is a modest or large home. With a simple enquiry and verification process, Rezoid's trouble-free home loans will be approved for purchase such as under-construction property, pre-owned houses or a ready-to-move-in property and even for house construction, house extension, and repair/renovation."

                        />
                        <DefaultInfoCard
                            description="Rezoid understands and offers hassle-free lending services for any type of business, with a quick and easy enquiry and verification method, to help your business develop and prosper."

                        />
                        <DefaultInfoCard
                            description="Home Loan - At some time in their life, everyone desires to buy a home, whether little or huge. Rezoid's hassle-free home loans will be granted for purchases such as under-construction property, pre-owned houses, or ready-to-move-in property, as well as for house building, house extension, and repair/renovation."

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

export default Loans;
