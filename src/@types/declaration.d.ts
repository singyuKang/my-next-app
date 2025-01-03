declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export { ReactComponent }; // 추가적으로 개별 내보내기
  export default ReactComponent; // 기본 내보내기
}
