'use client'
import { StackChip } from '@/components/Chip/StackChip'
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

const ProjectSection = () => {
  const ProjectSectionVAProp: ProjectSectionVAProp = {}
  return <ProjectSectionView {...ProjectSectionVAProp} />
}
type ProjectSectionVAProp = Record<string, unknown>

const ProjectSectionView = ({}: ProjectSectionVAProp) => {
  const tableHeader = ['프로젝트', '소개 / 사용기술', '상세정보']
  const FirstProjectView = () => {
    return (
      <TableRow key={'ibkLoan'}>
        <TableCell>
          <Text variant="subtitle5">IBK저축은행 간편대출</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React 기반 IBK-저축은행 간편 대출신청 웹 개발
          </Text>
          <StackChip
            stackList={[
              'React',
              'Typescript',
              'Recoil',
              'Tailwind',
              'Axios',
              'GitHub',
            ]}
          />
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

  const SecondProjectView = () => {
    return (
      <TableRow key={'hbBankApp'}>
        <TableCell>
          <Text variant="subtitle5">HB저축은행 앱</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React Native + TypeScript를 사용하여 HB저축은행 모바일 앱 개발
          </Text>
          <StackChip
            stackList={[
              'ReactNative',
              'Typescript',
              'ReactQuery',
              'Recoil',
              'Axios',
              'GitHub',
            ]}
          />
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

  const ThirdProjectView = () => {
    return (
      <TableRow key={'ibkBankApp'}>
        <TableCell>
          <Text variant="subtitle5">IBK저축은행 앱</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React Native + JavaScript를 사용하여 IBK저축은행 모바일 앱 개발
          </Text>
          <StackChip
            stackList={[
              'ReactNative',
              'JavaScript',
              'Redux',
              'Axios',
              'GitHub',
            ]}
          />
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

  return (
    <CustomSection id={'Project'}>
      <CustomSectionTitle title={'PROJECT'} subTitle={''} />
      <Table aria-label="customized project table">
        <TableHeader>
          {tableHeader.map((headerItem, index) => (
            <TableColumn key={index}>{headerItem}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {FirstProjectView()}
          {SecondProjectView()}
          {ThirdProjectView()}
        </TableBody>
      </Table>
    </CustomSection>
  )
}

export default ProjectSection
