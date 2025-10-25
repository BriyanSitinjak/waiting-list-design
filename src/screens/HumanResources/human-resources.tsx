import SideBar from '@/components/SideBar'
import MainContent from '@/components/MainContent'
import NavigationBar from '@/components/NavigationBar'

const HumanResources = () => {
  return (
    <div className='flex flex-col'>
        <NavigationBar />
        <div className='flex flex-row px-6 gap-6 pt-12'>
          <SideBar />
          <MainContent />
        </div>
    </div>
  )
}

export default HumanResources