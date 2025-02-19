import { Breadcrumb } from 'react-bootstrap'
import { Home } from './Icons'

export const Breadcrumbs = () => {
  return (
    <Breadcrumb className='mb-3'>
      <Breadcrumb.Item href='#'>
        <span>
          <Home className='fs-6' />
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
        <span>Persons</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <span>Search “John Smith”</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
