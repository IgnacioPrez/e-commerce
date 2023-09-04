import './succes.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function SuccesCode ({ isModalVisible }) {
  return (
    <section className='succes-container'>
      <CheckCircleIcon sx={{ fontSize: '6rem', color: '#18C07A' }} />
      <h2>Código verificado!</h2>
      <p>Su código fue verificado exitosamente</p>
      <div className={`modal ${isModalVisible ? 'active' : ''}`} />
    </section>
  )
}
