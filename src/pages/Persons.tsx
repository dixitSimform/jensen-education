import { Breadcrumbs } from '../components/Breadcrumbs'
import { Header } from '../components/Header'
import { PersonCard } from '../components/PersonCard'

export const Persons = () => {
  return (
    <div className='persons'>
      <Header title='Persons' />
      <div className='persons__main'>
        <div className='persons__listing'>
          <Breadcrumbs />
          <div className='persons__list'>
            <PersonCard
              image='/images/1.avif'
              name='Courtney Henry'
              number='(239) 555-0108'
              email='Firstname.lastname.schoolname.com'
              department='School department'
            />
            <PersonCard
              image='/images/2.avif'
              name='Jerome Bell'
              number='(239) 555-0108'
              email='Firstname.lastname.schoolname.com'
              department='School department'
            />
            <PersonCard
              image='/images/3.avif'
              name='Dianne Russell'
              number='(239) 555-0108'
              email='Firstname.lastname.schoolname.com'
              department='School department'
            />
            <PersonCard
              image='/images/4.avif'
              name='Cameron Williamson'
              number='(239) 555-0108'
              email='Firstname.lastname.schoolname.com'
              department='School department'
            />
            <PersonCard
              image='/images/5.avif'
              name='Wade Warren'
              number='(239) 555-0108'
              email='Firstname.lastname.schoolname.com'
              department='School department'
            />
          </div>
          <div className='pagination'>Put Pagination Here</div>
        </div>
      </div>
    </div>
  )
}
