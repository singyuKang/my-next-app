import { Container } from "src/components/Container/Container";
import { Page } from "src/components/Page/Page";
import { Device } from "src/modules/common/device/Device";

export default async function Home() {
  const device = await Device.getDevice();
  return (
    <Page
      device={device.name}
      title={"pageTitle"}
      breadcrumbItems={["소비자보호", "개인정보보호", "pageTitle"]}
      containerVariant="wide"
    >
      <Container
        device={device.name}
        className="flex flex-col gap-y-[24px]"
        variant="wide"
      >
        <text>aaa</text>
      </Container>
    </Page>
  );
}
