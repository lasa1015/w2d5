import Header from './components/Header'
import Sidebar from './components/Sidebar'
import VideoCard from './components/VideoCard'
import ShortsCard from './components/ShortsCard'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0f0f0f]">
      <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-14 w-full min-w-0 max-w-screen-2xl items-center px-4 [&>header]:flex [&>header]:w-full [&>header]:items-center [&>header]:justify-between">
          <Header />
        </div>
      </div>

      <div className="mx-auto flex w-full min-w-0 max-w-screen-2xl">
        <aside className="hidden w-60 shrink-0 border-r border-neutral-200 bg-white px-3 py-4 lg:block [&>aside]:sticky [&>aside]:top-18 [&>aside]:space-y-3">
          <Sidebar />
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recommended</h2>
              <div className="h-2 w-24 rounded-full bg-neutral-200" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              <div className="min-h-[280px] rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm [&>article]:flex [&>article]:h-full [&>article]:flex-col [&>article]:justify-start">
                <VideoCard />
              </div>
              <div className="min-h-[280px] rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm" />
              <div className="min-h-[280px] rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm" />
              <div className="min-h-[280px] rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm" />
            </div>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Shorts</h2>
              <div className="h-2 w-16 rounded-full bg-red-500" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="min-h-[320px] rounded-2xl border border-neutral-200 bg-white p-4 [&>section]:flex [&>section]:h-full [&>section]:flex-col">
                <ShortsCard />
              </div>
              <div className="min-h-[320px] rounded-2xl border border-neutral-200 bg-white p-4" />
              <div className="min-h-[320px] rounded-2xl border border-neutral-200 bg-white p-4" />
              <div className="min-h-[320px] rounded-2xl border border-neutral-200 bg-white p-4" />
              <div className="min-h-[320px] rounded-2xl border border-neutral-200 bg-white p-4" />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
