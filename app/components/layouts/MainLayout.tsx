import React from "react"

interface MainLayoutProps {
    children?: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="relative max-w-full min-h-screen bg-slate-100">

            <div className="absolute flex flex-col justify-center text-end pr-20 inset-x-0 top-0 h-15 bg-white">
                <p className="font-semibold text-base">Usuário</p>
            </div>

            <div className="absolute inset-y-0 left-0 w-44 flex flex-col gap-8 border-r border-slate-300 bg-white">
                <div className="w-full h-16 flex flex-col justify-center text-center">
                    <p className="font-bold uppercase text-xl">LOGO</p>
                </div>

                <div className="w-full h-full flex flex-col pl-7 py-24 gap-8">
                    <p className="w-full">Dashboard</p>
                    <p className="w-full">Disciplinas</p>
                    <p className="w-full">Estudo</p>
                    <p className="w-full">Configurações</p>
                </div>

            </div>

            <div className="max-w-7xl py-20 px-50">
                {children}
            </div>
        </div>
    )
}