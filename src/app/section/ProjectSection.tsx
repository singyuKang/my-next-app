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

  const StellaProjectView = () => {
    return (
      <TableRow key={'stellaBranch'}>
        <TableCell>
          <Text variant="subtitle5">
            동양저축은행 스텔라 브랜치 태블릿 앱
          </Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React 19 + TypeScript 기반 저축은행 태블릿 앱 개발
          </Text>
          <StackChip
            stackList={[
              'React',
              'Typescript',
              'Vite',
              'Zustand',
              'ReactQuery',
              'Tailwind',
              'Shadcn',
              'Storybook',
              'Playwright',
            ]}
          />
        </TableCell>

        <TableCell>
          <ExtraInfoDialog
            dialogTitle={
              '동양저축은행 스텔라 브랜치 태블릿 앱 - 2025.11 ~ 2026.03(5개월)'
            }
          >
            <Titleli
              title={'주요 업무'}
              list={[
                'Claude Code + Playwright MCP 연동으로 AI 기반 테스트 자동화 파이프라인 구축',
                'Planner → Generator → Healer: 계획 수립, 코드 생성, 실패 테스트 자동 수정',
                'Playwright 기반 420개+ E2E 테스트 케이스, 10단계 대출신청 등 11개 핵심 플로우 검증',
                'MSW 기반 API Mocking으로 네트워크 독립적인 테스트 환경 구축',
                'Mermaid 다이어그램으로 13개 페이지의 플로우 구조 및 API 호출 시퀀스 문서화',
                'Storybook + MSW 연동으로 11개 플로우의 API 상태별(성공/에러/지연) 시각적 테스트 환경 구축',
                'shadcn/ui 패턴 기반 Button, Dialog, Drawer 등 40개+ 공통 컴포넌트 개발',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

  const FirstProjectView = () => {
    return (
      <TableRow key={'savingsBankLoan'}>
        <TableCell>
          <Text variant="subtitle5">
            저축은행 중앙회 중도금대출 관리 시스템
          </Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React + TypeScript 기반 보안 폐쇄망 환경의 중도금대출 관리 시스템
            개발
          </Text>
          <StackChip
            stackList={[
              'React',
              'Typescript',
              'Zustand',
              'ReactQuery',
              'Axios',
              'Storybook',
              'Tailwind',
            ]}
          />
        </TableCell>

        <TableCell>
          <ExtraInfoDialog
            dialogTitle={
              '저축은행 중앙회 중도금대출 관리 시스템 - 2025.03 ~ 2025.08(6개월)'
            }
          >
            <Titleli
              title={'주요 업무'}
              list={[
                '보안 폐쇄망 환경에서 yarn offline 캐시를 활용한 React 개발 환경 구축 및 배포',
                'RealGrid 샘플 코드를 분석하여, 중도금 대출 사용자 관리를 위한 스프레드시트 기능(필터, 엑셀 다운로드, 더블 클릭 등)을 Custom Hook으로 모듈화하고, 공통 로직을 추출하여 재사용 가능한 컴포넌트 형태로 구현',
                'Zustand를 활용한 UI 상태 관리와 함께 Accordion, Alert, Button, Form 등 34개의 공통 컴포넌트를 제작하고 Storybook을 활용해 문서화 및 가이드 제공, 팀 내 재사용성과 유지보수 효율성 향상',
                '다수의 입력 폼이 포함된 시스템에서 React Hook Form을 도입하여 폼 관리 효율성 향상 및 불필요한 리렌더링 최소화, Storybook을 통한 공통 폼 컴포넌트 문서화',
                'Dynamic Import 기반 동적 라우팅 시스템 구축으로 페이지 추가 시 라우트 설정 자동화',
                '300여개의 테스트 케이스를 포함한 커스텀 Hook 단위 테스트 작성',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

  const SecondProjectView = () => {
    return (
      <TableRow key={'ibkLoan'}>
        <TableCell>
          <Text variant="subtitle5">IBK저축은행 간편대출</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React/TypeScript 기반 모바일 웹 애플리케이션 개발 및 유지보수
          </Text>
          <StackChip
            stackList={['React', 'Typescript', 'Recoil', 'Tailwind', 'Axios']}
          />
        </TableCell>

        <TableCell>
          <ExtraInfoDialog
            dialogTitle={'IBK저축은행 간편대출 - 2024.02 ~ 2024.06(5개월)'}
          >
            <Titleli
              title={'주요 업무'}
              list={[
                '일일 대출 신청 510건 달성, React/TypeScript 기반 모바일 웹 애플리케이션 개발 및 유지보수',
                '보이스피싱 방지, 대출자가진단, 휴대폰인증, 약관동의, 신분증촬영, 정보입력, 안면인식 페이지 제작',
                '외부 인증 서비스 연동을 통해 신분증, 안면인식 인식 프로세스 구현',
                '대출 재신청시 처음부터 다시 시작해야 되는 불편함 발생하여 신청번호를 기준으로 대출 이어하기 페이지 제작하여 사용자에게 편의성 제공',
                'Recoil을 사용해 공통 컴포넌트 Alert, PopUp, Loading 구현, 대출신청시 필요한 데이터 관리',
                'JWT 토큰을 통해 휴대폰 인증후(로그인) 안전하게 서비스를 이용할 수 있도록 개선',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

  const ThirdProjectView = () => {
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
              'styledComponents',
            ]}
          />
        </TableCell>

        <TableCell>
          <ExtraInfoDialog
            dialogTitle={'HB저축은행 앱 - 2023.05 ~ 2024.02(8개월)'}
          >
            <Titleli
              title={'주요 업무'}
              list={[
                'App Center 기준 Android 4500명, iOS 850명 Active Devices 증가',
                '앱을 통한 신규 예금 계좌 개설 20% 증가, 대출 건수 30% 증가',
                'React Native를 사용하여 HB저축은행 모바일 앱 개발 및 유지보수',
                'JavaScript 코드를 TypeScript로 마이그레이션하여 코드의 안정성 향상, 개발 과정에서의 오류 발견을 용이',
                'WebView, injectedJavaScript, postMessage를 활용하여 앱 내에서 전자 계약 서명 기능을 구현, 사용자가 앱을 벗어나지 않고 서명을 완료가능하도록 구현',
                'React Native Bridge를 활용하여 금융 앱에 필요한 보안 네이티브 모듈 9개를 자체 패키지로 모듈화하고, 크로스 플랫폼에서 재사용 가능하도록 구현',
                '금융 상품 탐색 과정을 완전 탐색에서 이진 탐색으로 변경하여 탐색 속도를 0.02초 단축시키고 사용자 경험을 개선',
                'RESTful API와 React Query 데이터 캐싱으로 로딩 시간이 길었던 API 호출 횟수를 줄이고, 속도를 30% (약 3초) 개선',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

  const FourthProjectView = () => {
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
              'styledComponents',
            ]}
          />
        </TableCell>

        <TableCell>
          <ExtraInfoDialog
            dialogTitle={'IBK저축은행 앱 - 2022.08 ~ 2023.02(7개월)'}
          >
            <Titleli
              title={'주요 업무'}
              list={[
                '구글플레이 50만 다운로드 달성, 앱을 통한 신규 예금 계좌 개설 30% 증가, 대출 건수 30% 증가',
                'React Native/JavaScript 기반 모바일 앱 개발 및 유지보수',
                '예금/대출 상품, 상품 안내, 거래내역, 만기 수령 예상액 계산, 약관, 추가이체 페이지 제작',
                '고령층 사용자의 디지털 접근성 향상을 위한 큰글씨 모드 컴포넌트 구현, Context API와 AsyncStorage를 활용한 사용자 설정 상태 유지',
                'React Native Bridge를 활용하여 금융 앱에 필요한 보안 네이티브 모듈 8개를 자체 패키지로 모듈화하고, 크로스 플랫폼에서 재사용 가능하도록 구현',
                'JWT 토큰을 통해 네트워크를 구현하여 사용자가 매번 로그인할 필요 없이 안전하게 서비스를 이용할 수 있도록 개선',
                '약관이 자주 변경되는 문제를 해결하기 위해 WebView를 사용하여 약관 동의 화면을 구현, 약관 내용 변경 시 앱 업데이트 없이 즉시 반영이 가능하도록 개선',
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
          {StellaProjectView()}
          {FirstProjectView()}
          {SecondProjectView()}
          {ThirdProjectView()}
          {FourthProjectView()}
        </TableBody>
      </Table>
    </CustomSection>
  )
}

export default ProjectSection
