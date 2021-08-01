import React from "react";
import Header from "../../components/Header"
import MapView from "../../components/MapView"
import ListsView from "../../components/ListsView"
import { getWindowDimensions } from '../../util/window'
/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'

const { height } = getWindowDimensions()

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Header />
      <div className="flex bg-gray-50 overflow-hidden" style={{ height: height - 55}}>
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex xl:overflow-hidden">
              {/* Primary column */}
              <section
                aria-labelledby="primary-heading"
                className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
              >
                <div className="p-4">Storage spaces available in <span className="font-medium">San Francisco, CA</span></div>
                <ListsView />
              </section>

              {/* Secondary column (hidden on smaller screens) */}
              <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                {/* TODO: remove custom 28 rem with a tailwind class like w-96 */}
                <div className="h-full relative flex flex-col border-r border-gray-200 bg-white" style={{ width: '28rem'}}>
                  {/* Your content */}
                  <MapView />
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

