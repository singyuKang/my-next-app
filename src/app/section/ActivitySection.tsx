import DescriptionIcon from '@mui/icons-material/Description'
import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Text } from '@/foundation/Text/Text'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'
import Link from 'next/link'

const ActivitySection = () => {
  const tableHeader = ['이름', '내용', '상세정보']

  const FirstActivityView = () => {
    return (
      <TableRow key={'algorithm study'}>
        <TableCell>
          <Text variant="subtitle5">알고리즘 스터디</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            · 주 5 문제씩 알고리즘 문제를 해결, 팀원들과 토론을 통해 코드 개선
            개선
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · 프로그래머스 216문제, 백준 265문제 해결
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · Solved AC 골드2 달성
          </Text>
        </TableCell>

        <TableCell>
          <Link
            href={'https://github.com/singyuKang/Swift_Cording_Test'}
            target="_blank"
          >
            <DescriptionIcon color="primary" />
          </Link>
        </TableCell>
      </TableRow>
    )
  }

  const SecondActivityView = () => {
    return (
      <TableRow key={'woowacourse'}>
        <TableCell>
          <Text variant="subtitle5">항해 플러스 프론트엔드 5기</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            · Vanilla JS 기반 SPA 를 직접 구현하며 라우터, 상태관리, DOM 조작 등
            웹 핵심 원리 학습
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · Jest 기반 테스트 코드 작성
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · AWS CodePipeline + S3 + CloudFront 를 활용한 CI/CD 파이프라인 구축
            및 배포 자동화 경험
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · React 의 useMemo, useCallback, React.memo 등을 활용한 불필요한
            렌더링 방지 및 성능 최적화 경험
          </Text>
        </TableCell>

        <TableCell>
          <Link
            href={
              'https://singyukang.tistory.com/category/%ED%95%AD%ED%95%B4%20%ED%94%8C%EB%9F%AC%EC%8A%A4%20%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%205%EA%B8%B0?page=1'
            }
            target="_blank"
          >
            <DescriptionIcon color="primary" />
          </Link>
        </TableCell>
      </TableRow>
    )
  }

  // const ThirdActivityView = () => {
  //   return (
  //     <TableRow key={'naverboostcamp'}>
  //       <TableCell>
  //         <Text variant="subtitle5">네이버 부스트캠프 iOS 베이직 과정</Text>
  //       </TableCell>
  //       <TableCell>
  //         <Text variant="body2" className="text-sm font-semibold">
  //           · Swift 프로그래밍 기술
  //         </Text>
  //         <Text variant="body2" className="text-sm font-semibold">
  //           · 팀 과제를 통해 커뮤니케이션과 문제 해결의 중요성
  //         </Text>
  //       </TableCell>

  //       <TableCell>
  //         <Link
  //           href={
  //             'https://gist.github.com/singyuKang/bbff61ea299448420e8409c80b69b454'
  //           }
  //           target="_blank"
  //         >
  //           <DescriptionIcon color="primary" />
  //         </Link>
  //       </TableCell>
  //     </TableRow>
  //   )
  // }

  return (
    <CustomSection id={'Activity'}>
      <CustomSectionTitle title={'Activity'} />
      <Table aria-label="customized activity table">
        <TableHeader>
          {tableHeader.map((headerItem, index) => (
            <TableColumn key={index}>{headerItem}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {SecondActivityView()}
          {FirstActivityView()}
          {/* {ThirdActivityView()} */}
        </TableBody>
      </Table>
    </CustomSection>
  )
}

export default ActivitySection
