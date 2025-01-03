import Link from "next/link";
// import ArrowRightIcon from "../../../assets/icon/arrow_right.svg";
// import HomeIcon from "../../../assets/icon/home.svg";
// import HomeIcon from "@assets/icon/home.svg";
// import ArrowUpIcon from "@assets/icon/arrow_up.svg";

import { Device, HasDevice } from "src/modules/common/device/Device";
import { Container } from "src/components/Container/Container";
interface BreadcrumbProps extends HasDevice {
  items: string[];
}

export const Breadcrumb = ({ device: rawDevice, items }: BreadcrumbProps) => {
  // console.log("🚀 ~ HomeIcon:", HomeIcon);

  const device = Device.of(rawDevice);
  if (device.isMobile()) {
    return <></>;
  }

  return (
    <div className="bg-gray2">
      <Container device={device.name} variant="widest">
        <ul className="flex flex-row justify-end items-center gap-x-[12px] py-[6px]">
          <li>
            <Link href="/" className="block" prefetch={false}>
              <div className="h-[12px] text-gray6">
                {/* <HomeIcon /> */}
                {/* <ArrowUpIcon /> */}
              </div>
            </Link>
          </li>
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative flex flex-row gap-x-[12px] items-center"
            >
              <div className="w-[auto] h-[10px] text-gray6">
                {/* <img src={ArrowUpIcon} />; */}
              </div>
              <div className="relative top-[1px]">
                {/* <Text
                  variant="caption3"
                  color={idx === items.length - 1 ? 'white' : 'gray6'}
                  className={`${
                    idx === items.length - 1 ? 'font-bold' : ''
                  } select-all`}
                >
                  {item}
                </Text> */}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
