export const AppBackground = () => {
    return (
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(95,224,63,0.4),rgba(255,255,255,0))] opacity-50"></div>
        </div>
    )
}
