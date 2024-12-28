import React from 'react'

const SideBar = () => {
    return (
        <>
            <div className="flex">
                <div className="w-64 h-screen bg-green-700 text-white p-5 space-y-6">
                    <div className="flex justify-between gap-2">
                        <a href="#" className="text-2xl font-bold border-2 border-white w-64 h-20 p-4 bg-green-900">
                            My App
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideBar