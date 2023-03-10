import { Card, CardContent, Skeleton } from '@mui/material'
const CardSkeleton = () => {
  return (
    <Card>
      <Skeleton
        variant='rectangular'
        height={150}
        width={250}
        animation='wave'
      />
      <CardContent>
        <Skeleton
          variant='rectangular'
          height={30}
        />
      </CardContent>
    </Card>
  )
}

export default CardSkeleton
