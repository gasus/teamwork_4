import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { APP_CONST } from '../../../../consts'

type Props = {
  runGame: () => void
  isLoaded: boolean
}

export const StartScreen = ({ isLoaded, runGame }: Props): JSX.Element => {
  const instruction = (
    <>
      <Typography
        variant="h2"
        sx={{ textAlign: 'center', mb: '50px' }}
        gutterBottom>
        {APP_CONST.gameName}
      </Typography>
      <Typography variant="h4" gutterBottom>
        Игровой процесс:
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ul>
          <li>
            Накапливайте юнитов (подконтрольные вам территории генерируют нового
            юнита каждую секунду)
          </li>
          <li>Захватывайте нейтральные (серые) территории</li>
          <li>
            Собирайте войска вместе (перетаскивая юнитов между подконтрольными
            территориями)
          </li>
          <li>Для победы захватите все территории противника</li>
        </ul>
      </Typography>
    </>
  )

  const button = (
    <Box
      sx={{ mt: '30px', flex: 1, display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" onClick={runGame} disabled={!isLoaded}>
        Начать игру
      </Button>
    </Box>
  )

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Paper
        elevation={24}
        sx={{ maxWidth: 600, padding: '20px', borderRadius: '10px' }}>
        {instruction}
        {button}
      </Paper>
    </Box>
  )
}
