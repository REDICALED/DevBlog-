// src/app/api-doc/react-swagger.tsx

'use client';

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// `swagger-ui-react`를 클라이언트 사이드에서만 로드하도록 설정합니다.
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

type Props = {
  spec: Record<string, any>;
};

function ReactSwagger({ spec }: Props) {
  return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;