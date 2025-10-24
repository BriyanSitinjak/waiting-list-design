'use client'

import { useRouter } from 'next/navigation';

const HomeScreen = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col text-center gap-4">
        <h1 className="text-4xl font-bold">Waitlist Apps</h1>
        <p className="text-lg text-gray-600">Fyaora Technical Test</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:cursor-pointer" onClick={() => {
          router.push('/human-resources');
        }}>Check The Result</button>
    </div>
  )
}

export default HomeScreen