'use client'
import { StackChip } from '@/components/Chip/StackChip'
import { UrlChip } from '@/components/Chip/UrlChip'
import ExtraInfoDialog from '@/components/Dialog/ExtraInfoDialog'
import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Companyli } from '@/components/Ul/Companyli'
import { Titleli } from '@/components/Ul/Titleli'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

const ExperienceSection = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })
  const tableHeaderItem = ['회사', '업무', '기여', '서비스']

  return (
    <CustomSection id={'Experience'}>
      <CustomSectionTitle title={'Experience'} subTitle={t(``)} />
      <Table>
        <TableHeader>
          {tableHeaderItem.map((headerItem) => (
            <TableColumn key={headerItem} align="center">
              {headerItem}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          <TableRow key={'엔투소프트'}>
            <TableCell>
              <Companyli
                name={'엔투소프트'}
                homepageUrl={'https://www.n2soft.co.kr/'}
                position={['프론트엔드 개발자']}
                period={{
                  start: '2022/08',
                  end: new Date(),
                }}
              />
            </TableCell>
            <TableCell>
              <Titleli
                list={[
                  'React, React Native를 활용해 저축은행 앱과 웹 개발 및 유지보수',
                  '저축은행 사용자에게 편리한 경험을 주는 서비스 개발',
                ]}
              />
            </TableCell>
            <TableCell>
              <ExtraInfoDialog
                iconType={'contribution'}
                dialogTitle={'엔투소프트'}
              >
                <Titleli
                  title={'What I learn'}
                  list={[
                    'React, Next, Typescript 기반의  웹 앱',
                    'MSA 아키텍체와의 원활한 JSON 상하차',
                    'Eslint부터 Stortbook, React-testing-library를 이용한 지속 가능한 소프트웨어',
                    '오디오을 사용한 모던 웹사이트 개발 경험',
                  ]}
                />
                <Titleli
                  title={'What I extpect'}
                  list={[
                    '가우디오랩의 핵심 코어가 될 오디어 관련 라이브러리 개발',
                    '깔끔하고 직관적인 UI를 통한 편리한 UX 제공',
                    '유저 데이터를 기반으로 한 의사 결정 및 기능 고도화',
                  ]}
                />
                <StackChip
                  title={'What I used'}
                  stackList={[
                    'ReactNative',
                    'React',
                    'JavaScript',
                    'Typescript',
                    'ReactQuery',
                    'Redux',
                    'Recoil',
                    'StyledComponent',
                  ]}
                />
              </ExtraInfoDialog>
            </TableCell>
            <TableCell align="center">
              <ExtraInfoDialog
                dialogTitle={'AI 오디오 서비스 : 가우디오 스튜디오'}
              >
                <Titleli
                  title={'서비스 목표'}
                  list={[
                    'AI를 활용한 음원 분리 기능 제공',
                    'AI를 활용한 노래방 기능 제공',
                    '사내에서 개발중 인 AI 기능 및 서비스의 런칭',
                  ]}
                />
                <div className="flex flex-row justify-center">
                  <UrlChip
                    title={'홈페이지'}
                    url={'https://studio.gaudiolab.io/'}
                  />
                  <UrlChip
                    title={'서비스 소개'}
                    url={'https://www.youtube.com/watch?v=R_5wSIYxSuc'}
                  />
                </div>
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CustomSection>
  )
}

export default ExperienceSection
