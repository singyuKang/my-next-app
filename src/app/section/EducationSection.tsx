import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Text } from '@/foundation/Text/Text'

const EducationeSection = () => {
  return (
    <CustomSection id={'Education'}>
      <CustomSectionTitle title={'Education'} />
      <Text variant="subtitle5"> 정보처리기사</Text>
    </CustomSection>
  )
}

export default EducationeSection
