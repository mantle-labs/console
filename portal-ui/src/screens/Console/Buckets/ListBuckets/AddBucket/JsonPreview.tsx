import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const JsonPreview = ({ tabs, showPasswords }: { tabs: any[], showPasswords: {[key: number]: boolean } }) => {
  
    const { t } = useTranslation();
    const transformedTabs = tabs.reduce((acc, tab, index) => {
        const { name, url, accessKey, secretKey, ...rest } = tab;
        acc[name] = {
            url,
            accessKey,
            secretKey: showPasswords[index] ? secretKey : "•".repeat(secretKey.length),
            ...rest,
    };
    return acc;
  }, {} as Record<string, any>);

  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: 2,
        padding: 2,
        backgroundColor: "#F9F9F9",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        overflowX: "auto",
      }}
    >
      <Typography variant="body2" fontWeight="bold">
        {t("JSON_preview")}
      </Typography>
      <pre>{JSON.stringify(transformedTabs, null, 2)}</pre>
    </Box>
  );
};
export default JsonPreview;
