import { forwardRef } from "react";

import PropTypes from "prop-types";

import MKTypography from "components/MKTypography";

import MKProgressRoot from "components/MKProgress/MKProgressRoot";

const MKProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <MKTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </MKTypography>
    )}
    <MKProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

MKProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

MKProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default MKProgress;
