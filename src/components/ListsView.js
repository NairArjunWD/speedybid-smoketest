/* This example requires Tailwind CSS v2.0+ */
import { withRouter } from "react-router-dom";
import base from '../api/base';

// const people = [
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   // More people...
// ]

function ListView({records}) {

  const recordsID = records.id;
  return (
    <ul className="flex-1 grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 p-2 overflow-y-scroll">
      {records.map((records) => (
        <li
          key={recordsID}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 rounded-md"
          onClick={() => records.push("/detail/111-1111-1111")}
        >
          <div className="flex-1 flex flex-col">
            <img className="w-full h-3/5 flex-shrink-0 mx-auto bg-black rounded-t-md" src={records.fields.pictures} alt="" />
            <div className="mt-3 mb-2 flex-1 flex flex-col justify-between">
            <div>
                <h3 className="text-gray-900 text-base font-medium text-left px-3">${records.fields.price_per_month}/mo</h3>
                <h3 className="mt-1 text-gray-500 text-sm font-light text-left px-3">{records.fields.unit_size} space</h3>
            </div>
            <h3 className="mt-3 text-gray-500 text-sm font-thin text-left px-3 sm:truncate">{records.fields.facility_address}</h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default withRouter(ListView)