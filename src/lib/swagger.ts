import { createSwaggerSpec } from "next-swagger-doc";
import path from 'path';
import fs from 'fs';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "src/app/api", // define api folder under app folder
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API Example",
        version: "1.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [],
    },
  });

  const filePath = path.join(process.cwd(), 'swagger.json');
  fs.writeFileSync(filePath, JSON.stringify(spec, null, 2));

  return spec;
};