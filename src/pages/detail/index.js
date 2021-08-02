import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import Header from '../../components/Header'
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid'
import { BellIcon, FireIcon, HomeIcon, MenuIcon, TrendingUpIcon, UserGroupIcon, XIcon } from '@heroicons/react/outline'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
]
const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false },
]
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
      {/* <section class="flex pt-4 px-4 overflow-x-scroll overflow-y-hidden" style={{maxHeight: 400}}>
        <div class="flex flex-wrap -mx-4 overflow-x-scroll">
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          <div class="md:w-1/2 px-0.5 mb-2"><img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
        </div>
      </section> */}
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
              <p class="mt-2 text-sm font-thin text-gray-400 sm:text-base sm:truncate">1 Kallang Junction Singapore 339263, Singapore, Singapore 339263 - Confirmed Open</p>
            </div>
            <div className="mt-12 sm:px-3">
              <h2 className="text-base font-normal leading-7 text-gray-900 sm:text-base sm:truncate">24/7 Storage - 15x15 Space Size</h2>
              <p class="mt-2 text-sm font-thin text-gray-400 sm:text-base">The Hive Lavender combines coworking, beautiful work space, fantastic amenities and meeting rooms, with a Hive Café at the centre of the space surrounded by hotdesks, booth desks, 2 to 32 person private offices. Plus a full-sized fashion photography studio, portrait studio, You Tube Studio, plus a 3D printing & prototyping workshop all under the same roof.</p>
            </div>
          </main>
          <aside className="hidden xl:block xl:col-span-4">
            <div className="sticky top-4 space-y-4">
              <section aria-labelledby="who-to-follow-heading">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                      Who to follow
                    </h2>
                    <div className="mt-6 flow-root">
                      <ul className="-my-4 divide-y divide-gray-200">
                        {whoToFollow.map((user) => (
                          <li key={user.handle} className="flex items-center py-4 space-x-3">
                            <div className="flex-shrink-0">
                              <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a href={user.href}>{user.name}</a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a href={user.href}>{'@' + user.handle}</a>
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                              >
                                <PlusIcon className="-ml-1 mr-0.5 h-5 w-5 text-rose-400" aria-hidden="true" />
                                <span>Follow</span>
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-labelledby="trending-heading">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h2 id="trending-heading" className="text-base font-medium text-gray-900">
                      Trending
                    </h2>
                    <div className="mt-6 flow-root">
                      <ul className="-my-4 divide-y divide-gray-200">
                        {trendingPosts.map((post) => (
                          <li key={post.id} className="flex py-4 space-x-3">
                            <div className="flex-shrink-0">
                              <img className="h-8 w-8 rounded-full" src={post.user.imageUrl} alt={post.user.name} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm text-gray-800">{post.body}</p>
                              <div className="mt-2 flex">
                                <span className="inline-flex items-center text-sm">
                                  <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                    <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                                    <span className="font-medium text-gray-900">{post.comments}</span>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View all
                      </a>
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
