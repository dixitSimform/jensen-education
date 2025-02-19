import { Badge } from 'react-bootstrap'

type TPersonCard = {
  image: string
  name: string
  number: string
  email: string
  department: string
}

export const PersonCard = (props: TPersonCard) => {
  const { department, email, image, name, number } = props
  return (
    <div className='person-card'>
      <img src={image} alt={name} className='person-card__image' />
      <div className='person-card__content d-flex flex-column justify-content-center gap-3'>
        <h5 className='person-card__name mb-0'>{name}</h5>
        <div className='person-card__meta d-flex gap-2 flex-wrap'>
          <Badge pill>{number}</Badge>
          <Badge pill>{email}</Badge>
          <Badge pill>{department}</Badge>
        </div>
      </div>
    </div>
  )
}
