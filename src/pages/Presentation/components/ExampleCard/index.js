
import PropTypes from "prop-types";

import Tooltip from "@mui/material/Tooltip";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ExampleCard({ image, name, count, pro, ...rest }) {
  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      sx={{
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      {...rest}
    >

      <MKBox
        component="img"
        src={image}
        alt={name}
        width="100%"

        my="auto"
        opacity={pro ? 0.6 : 1}
      />
    </MKBox>
  );

  return (
    <MKBox position="relative">
      {pro ? (
        <Tooltip title="Pro Element" placement="top">
          {imageTemplate}
        </Tooltip>
      ) : (
        imageTemplate
      )}
      {name || count > 0 ? (
        <MKBox mt={1} ml={1} lineHeight={1}>
          {name && (
            <MKTypography variant="h6" fontWeight="bold">
              {name}
            </MKTypography>
          )}

        </MKBox>
      ) : null}
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
  name: "",


};

// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.number,
  pro: PropTypes.bool,
};

export default ExampleCard;
