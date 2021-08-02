import Header from '../../components/Header'
import { TrendingUpIcon } from '@heroicons/react/outline'

const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://source.unsplash.com/user/erondu',
  },
  // More people...
]

export default function Example() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* TODO: figure out how to do a image with horizontal scroll: perhaps use this: https://www.npmjs.com/package/react-responsive-carousel */}
      {/* <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
        </div>
      </div> */}
      <section class="flex pt-4 px-4 overflow-x-scroll overflow-y-hidden" style={{maxHeight: 400}}>
        <div class="flex flex-wrap -mx-4 overflow-x-scroll">
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
        </div>
      </section>
      {/* <div class="h-64 grid grid-rows-2 grid-flow-col gap-4 overflow-x-scroll">
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-96 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
      </div> */}
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-9 xl:col-span-8">
            <div className="sm:px-3">
              <h2 className="text-2xl font-normal leading-7 text-gray-900 sm:text-3xl sm:truncate">Open Storage - 30 Available at The Hive Lavender</h2>
              <p class="mt-2 text-sm font-light text-gray-400 sm:text-base sm:truncate">1 Kallang Junction Singapore 339263, Singapore, Singapore 339263 - Confirmed Open</p>
            </div>
            <div className="mt-12 sm:px-3">
              <h2 className="text-base font-normal leading-7 text-gray-900 sm:text-base sm:truncate">24/7 Storage - 15x15 Space Size</h2>
              <p class="mt-2 text-sm font-light text-gray-400 sm:text-base">The Hive Lavender combines coworking, beautiful work space, fantastic amenities and meeting rooms, with a Hive Café at the centre of the space surrounded by hotdesks, booth desks, 2 to 32 person private offices. Plus a full-sized fashion photography studio, portrait studio, You Tube Studio, plus a 3D printing & prototyping workshop all under the same roof.</p>
            </div>
          </main>
          <aside className="hidden xl:block xl:col-span-4">
            <div className="sticky top-4 space-y-4">
              <section aria-labelledby="who-to-follow-heading">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-8">
                    <h2 id="who-to-follow-heading" className="text-base text-gray-900">
                      This storage space is hosted by
                    </h2>
                    <div className="mt-6 flow-root">
                      <ul className="-my-4 divide-y divide-gray-200">
                        {whoToFollow.map((user) => (
                          <li key={user.handle} className="flex items-center py-4 space-x-3">
                            <div className="flex-shrink-0">
                              <img className="h-12 w-12 rounded-full" src={user.imageUrl} alt="" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-base font-base text-gray-900">
                                <a href={user.href}>{user.name}</a>
                              </p>
                              {/* <p className="text-sm text-gray-500">
                                <a href={user.href}>{'@' + user.handle}</a>
                              </p> */}
                            </div>
                            {/* <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                              >
                                <PlusIcon className="-ml-1 mr-0.5 h-5 w-5 text-rose-400" aria-hidden="true" />
                                <span>Follow</span>
                              </button>
                            </div> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flow-root">
                      <p className="text-xl">CAD $900/month</p>
                      <p className="text-sm font-medium">1 month min. term</p>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="w-full block text-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md text-white bg-white hover:bg-gray-50"
                        style={{backgroundColor: "#FF5C26"}}
                      >
                        Inquire
                      </a>
                      <div className="flex flex-row mt-2">
                        <a
                          href="#"
                          className="md:w-1/2 mr-1 w-full block text-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-50"
                          // style={{backgroundColor: "#FF5C26"}}
                        >
                          Bookmark
                        </a>
                        <a
                          href="#"
                          className="md:w-1/2 w-full block text-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-50"
                          // style={{backgroundColor: "#FF5C26"}}
                        >
                          Share
                        </a>
                      </div>
                    </div>
                    <div className="relative mt-6 mb-6">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                    </div>
                    <div className="flex flex-row align-middle mt-12">
                      <p className="text-base font-thin md:w-3/4">66 people are looking at this space</p>
                      <TrendingUpIcon height={40} width={40} strokeWidth={2} color="#FF5C26"/>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
