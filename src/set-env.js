const fs = require("fs");
const targetPath = "./src/environments/environment.prod.ts";
const envConfigFile = `
export const environment = {
  production: true,
  githubToken: '${process.env.githubToken}',
};
`;
fs.writeFileSync(targetPath, envConfigFile);
console.log(`Angular environment.ts file generated correctly at ${targetPath}`);
