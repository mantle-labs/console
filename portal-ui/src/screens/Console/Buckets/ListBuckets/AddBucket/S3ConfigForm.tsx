import React, { useEffect, useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { s3ConfigObject } from "./AddBucketS3Config";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";

interface S3ConfigFormProps {
  config: s3ConfigObject;
  index: number;
  handleInputChange: (
    index: number,
    field: keyof s3ConfigObject,
    value: any
  ) => void;
  validInput: boolean;
}

const S3ConfigForm: React.FC<S3ConfigFormProps> = ({
  config,
  index,
  handleInputChange,
  validInput,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  //Every time we change tabs, we hide the secretKey
  useEffect(() => {
    setShowPassword(false);
  }, [index]);

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="URL"
        value={config.url}
        onChange={(e) => handleInputChange(index, "url", e.target.value)}
        fullWidth
        margin="normal"
        error={validInput === false}
        helperText={validInput === false ? t("url_error_prefix_port") : ""}
      />
      <TextField
        label="Access Key"
        value={config.accessKey}
        onChange={(e) => handleInputChange(index, "accessKey", e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Secret Key"
        value={config.secretKey}
        onChange={(e) => handleInputChange(index, "secretKey", e.target.value)}
        fullWidth
        margin="normal"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormControlLabel
        label="Secure"
        labelPlacement="start"
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: "1.15rem",
            marginLeft: 0,
          },
        }}
        control={
          <Checkbox
            checked={!!config.secure}
            onChange={(e) =>
              handleInputChange(index, "secure", e.target.checked)
            }
          />
        }
      />
    </Box>
  );
};

export default S3ConfigForm;
