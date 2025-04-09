import { Buttons } from '@/components/atoms/Buttons'
import { useLogOut } from '@/hooks/useAuth'
import { WindowModal } from '../ModalWindow'

export const Header = () => {
  const { logOut } = useLogOut()
  return (
    <div className=''>
      <WindowModal titleButton='Create' typeAction="create" />
      <Buttons title='Log out' handler={logOut} />
    </div>
  )
}
