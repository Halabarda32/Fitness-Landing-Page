import { useEffect, useState } from 'react'
import Navbar from '@/scenes/Navbar'
import Home from '@/scenes/Home'
import Benefits from '@/scenes/Benefits'
import OurClasses from '@/scenes/OurClasses'
import ContactUs from '@/scenes/ContactUs'
import Footer from '@/scenes/Footer'
import { SelectedPage } from './shared/types'
function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
	const [isTopPage, setIsTopPage] = useState<boolean>(true)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopPage(true)
				setSelectedPage(SelectedPage.Home)
			}
			if (window.scrollY !== 0) setIsTopPage(false)
		}
	window.addEventListener('scroll', handleScroll)
	return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<div className="app bg-gray-20">
				<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopPage={isTopPage} />
				<Home setSelectedPage={setSelectedPage} />
				<Benefits setSelectedPage={setSelectedPage} />
				<OurClasses setSelectedPage={setSelectedPage} />
				<ContactUs setSelectedPage={setSelectedPage} />
				<Footer />
			</div>
		</>
	)
}

export default App
