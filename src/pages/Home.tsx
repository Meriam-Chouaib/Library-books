import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import CustomTextField from 'components/CustomTextField/CustomTextField'
import { ChangeEvent, useState } from 'react'

function Home() {
  const { t } = useTranslation()
  const [firstName, setFirstName] = useState('')

  const handleInputChange = (value: string) => {
    setFirstName(value)
  }

  return (
    <Box>
      {t('home.title')}

      {firstName}
    </Box>
  )
}

export default Home
