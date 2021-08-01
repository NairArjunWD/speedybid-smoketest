import React from "react";
import Header from "../../components/Header"
import MapView from "../../components/MapView"

/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Header />
      <div className="h-screen flex bg-gray-50 overflow-hidden">
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex xl:overflow-hidden">
              {/* Primary column */}
              <section
                aria-labelledby="primary-heading"
                className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
              >
                <h1 id="primary-heading" className="sr-only">
                  Account
                </h1>
                {/* Your content */}
                add listings here
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

