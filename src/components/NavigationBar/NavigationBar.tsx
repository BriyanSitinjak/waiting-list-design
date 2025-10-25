import { LIST_NAVBAR } from '@/const/const'
import { Bell, MessagesSquare, UserRound } from 'lucide-react'

const NavigationBar = () => {
  return (
    <div className='flex px-20 py-2 items-center bg-[#F4F7F9]'>
      <div className='flex flex-row gap-2 w-max'>
        {LIST_NAVBAR.map((nav, idx) => (
          <p key={idx} className='text-[#313030] font-medium text-[14px] py-2.5 px-3'>{nav.name}</p>
        ))}
      </div>
      <div className='flex items-center gap-4 ml-auto'>
        <div className='p-2 hover:bg-gray-100 rounded-full transition-colors py-2'>
          <Bell size={24} className="text-gray-600" />
        </div>
        <div className='p-2 hover:bg-gray-100 rounded-full transition-colors py-2'>
          <MessagesSquare size={24} className="text-gray-600" />
        </div>
        <div className='flex flex-row py-0.5 items-center'>
          <div className='p-2 hover:bg-gray-100 rounded-full transition-colors h-max'>
            <UserRound size={24} className="hover:bg-gray-100 rounded-full transition-colors text-gray-600" />
          </div>
          <div>
            <p className='text-[#324054] text-[12px]'>Max Smith</p>
            <p className='text-[#4F6071] text-[12px]'>London, UK</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar