import SideBar from '@/components/SideBar'
import MainContent from '@/components/MainContent'
import NavigationBar from '@/components/NavigationBar'

const HumanResources = () => {
  return (
    <div className='flex flex-col border-2 border-solid border-red-500'>
        <NavigationBar />
        <SideBar />
        <MainContent />
    </div>
  )
}

export default HumanResources