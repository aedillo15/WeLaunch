const baseUrl = `https://localhost:44390`;
const baseApiUrl = `${baseUrl}/api`;

export const ApiUrls = {
    login: `${baseUrl}/connect/token`,
    register: `${baseApiUrl}/account/register`,
    logOut: `${baseApiUrl}/account/logout`,
}   