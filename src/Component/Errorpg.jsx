import { useLocation } from 'react-router-dom'

export default function Errorpg() {
    const location = useLocation()
  return (

    <div>this  &apos; {location.pathname}  &apos;  no available</div>
  )
}
