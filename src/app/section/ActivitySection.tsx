import ExtraInfoDialog from '@/components/Dialog/ExtraInfoDialog'
import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Titleli } from '@/components/Ul/Titleli'
import { Text } from '@/foundation/Text/Text'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'

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
            · 7개월간 주 5문제씩 알고리즘 문제 해결, 팀원들과 토론을 통해 코드
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
          <ExtraInfoDialog dialogTitle={'오디오 솔루션'}>
            <Titleli
              title={'개발 목표'}
              list={[
                '다양한 미디어 파일 지원 및 스트리밍 서비스 제공',
                '웹 기반 플레이어, 에디터 기능 제공',
                '돈을 버는 서비스 구축',
              ]}
            />
            <Titleli
              title={'개발 성과'}
              list={[
                '무료서비스 -> 유료서비스 전환 성공',
                'MAU 20만 달성, 매출 N억 달성',
              ]}
            />
            <Titleli
              title={'내 기여도'}
              list={[
                '프론트엔드 단독개발 -> 프론트엔드 리드 담당',
                '코어 기능 개발(웹 오디오, 플레이어)',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

  const SecondActivityView = () => {
    return (
      <TableRow key={'woowacourse'}>
        <TableCell>
          <Text variant="subtitle5">우아한테크코스 7기 웹 프리코스</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            · Javascript 프로그래밍 기술
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · Jest를 활용한 단위 테스트 경험
          </Text>
        </TableCell>

        <TableCell>
          <ExtraInfoDialog dialogTitle={'우아한 테크 코스'}>
            <Titleli
              title={'개발 목표'}
              list={[
                '다양한 미디어 파일 지원 및 스트리밍 서비스 제공',
                '웹 기반 플레이어, 에디터 기능 제공',
                '돈을 버는 서비스 구축',
              ]}
            />
            <Titleli
              title={'개발 성과'}
              list={[
                '무료서비스 -> 유료서비스 전환 성공',
                'MAU 20만 달성, 매출 N억 달성',
              ]}
            />
            <Titleli
              title={'내 기여도'}
              list={[
                '프론트엔드 단독개발 -> 프론트엔드 리드 담당',
                '코어 기능 개발(웹 오디오, 플레이어)',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

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
          {FirstActivityView()}
          {SecondActivityView()}
        </TableBody>
      </Table>
    </CustomSection>
  )
}

export default ActivitySection
