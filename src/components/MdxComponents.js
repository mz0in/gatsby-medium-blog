// defines mdx components styles to be used for post content
import * as React from "react"

import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

const shortcodes = {
  p: props => (
    <Typography
      variant="body1"
      sx={{
        color: "text.postBody",
        fontFamily: "Charter, serif",
        fontSize: "20px",
        lineHeight: "32px",
        letterSpacing: "-0.003em",
        mt: "1.5rem",
        wordBreak: "break-word",
        hyphens: "auto",
        "@media (max-width: 600px)": {
          fontSize: "17px",
          lineHeight: "28px",
          mt: "1rem",
        },
      }}
      {...props}
    />
  ),
  h1: props => (
    <Typography
      variant="h2"
      sx={{
        mt: "4rem",
        mb: "-12px",
        fontSize: "24px !important",
        fontWeight: "900",
        lineHeight: "28px",
        letterSpacing: "0",
        "@media (max-width: 600px)": {
          fontSize: "20px !important",
          mt: "2.5rem",
        },
      }}
      {...props}
    />
  ),
  h2: props => (
    <Typography
      variant="h3"
      sx={{
        mt: "3rem",
        mb: "-12px",
        fontSize: "20px !important",
        letterSpacing: "0",
        fontWeight: "900",
        "@media (max-width: 600px)": {
          fontSize: "17x !important",
          mt: "2rem",
        },
      }}
      {...props}
    />
  ),
  blockquote: props => (
    <Typography
      variant="h2"
      sx={{
        pl: 2,
        my: "2rem",
        lineHeight: "32px",
        borderLeft: "3px solid ",
        borderColor: "text.disabled",
        fontStyle: "italic",
        "& > p": {
          color: "text.disabled",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "400",
          letterSpacing: "-0.003em",
          lineHeight: "inherit",
          m: "unset",
        },
      }}
      {...props}
    />
  ),
  ul: props => (
    <ul
      {...props}
      style={{
        paddingLeft: "2rem",
        marginBottom: "4rem",
        marginTop: "2rem",
      }}
    />
  ),
  li: props => (
    <li
      {...props}
      style={{
        marginTop: "1.14em",
        marginBottom: "-0.46em",
        fontFamily: "Charter, serif",
        fontSize: "20px",
        lineHeight: "32px",
        letterSpacing: "-0.003em",
      }}
    />
  ),
  hr: props => (
    <Divider
      sx={{
        borderWidth: 0,
        textAlign: "center",
        height: "auto",
        "&:before": {
          content: '"..."',
          fontSize: "2rem",
          letterSpacing: "16px !important",
        },
      }}
      {...props}
    />
  ),
  a: props => (
    <MuiLink target="_blank" rel="noopener" {...props} color="inherit" />
  ),
  mark: props => (
    <mark
      {...props}
      style={{ background: "rgba(10, 132, 255, 0.15)", color: "inherit" }}
    />
  ),
  img: props => (
    <Box {...props} sx={{ my: "2rem", textAlign: "center" }}>
      <img {...props} style={{ width: "100%" }} alt={props.alt} />
      <figcaption style={{ lineHeight: "20px" }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: "14px",
            color: "text.disabled",
            letterSpacing: 0,
          }}
        >
          {props.alt}
        </Typography>
      </figcaption>
    </Box>
  ),
  figcaption: props => (
    <figcaption style={{ textAlign: "center" }}>
      <Typography
        variant="caption"
        {...props}
        sx={{
          lineHeight: "20px",
          fontSize: "14px",
          color: "text.disabled",
          letterSpacing: 0,
        }}
      ></Typography>
    </figcaption>
  ),
  Alert: props => (
    <Alert
      sx={{ my: "1.5rem", "@media (max-width: 600px)": { my: "1rem" } }}
      {...props}
    />
  ),
  SpecialLink: props => (
    <MuiLink href={props.href} underline="none" color={"inherit"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
            {props.title}
          </Typography>
          <Typography
            sx={{ color: "text.postBody", lineHeight: "20px" }}
            gutterBottom
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              lineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {props.description}
          </Typography>
          <Typography sx={{ color: "text.disabled", fontSize: "14px" }}>
            {props.site}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundImage: `url(${props.image})`,
            width: "100%",
            maxWidth: "160px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "@media (max-width: 600px)": {
              maxWidth: "140px",
            },
          }}
        ></Box>
      </Box>
    </MuiLink>
  ),

  Box: props => <Box {...props} />,
  Typography: props => <Typography {...props} />,
}

export default shortcodes
