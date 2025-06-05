const models = window['powerbi-client'].models;

const environment = {
    PERMISSIONS: models.Permissions.View, // Permissions for the Power BI report
    // TOKEN_TYPE: models.TokenType.Aad, // Token type for azure active directory (AAD) authentication (Temporal token)
    TOKEN_TYPE: models.TokenType.Embed, // Token type for Power BI Embed (Permanent token)
    REPORT_ID: '<REPORT_ID>', // Replace with your Power BI Report ID
    EMBED_URL: '<EMBED_URL>', // Replace with your Power BI Embed URL
    ACCESS_TOKEN: "<ACCESS_TOKEN>", // Replace with your Power BI Embed Access Token or AAD Access Token
};
export default environment;