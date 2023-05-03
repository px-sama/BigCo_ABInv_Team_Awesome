import React from "react"
import PropTypes from "prop-types"
import { Disclosure } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function FieldMapping({ oldFieldName, newFieldName }) {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Old field name
              <br className="hidden sm:inline" />
              <span className="text-indigo-600"> {oldFieldName}</span>
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Now maps to new field name
              <br className="hidden sm:inline" />
              <span className="text-indigo-600"> {newFieldName}</span>
              <br className="hidden sm:inline" />
              Placeholder for some explanations or demonstrations if needed
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-6 lg:mt-0">
            <div className="flow-root">
              <a
                href="#"
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="ml-3 font-medium text-gray-900">
                  View Documentation
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FieldMapping.propTypes = {
  oldFieldName: PropTypes.string.isRequired,
  newFieldName: PropTypes.string.isRequired,
}

export default function FieldMappings() {
    const mappings = [
        { oldFieldName: 'CAL_NJ_T.CAL_DIM', newFieldName: 'DIMENSIONS.CALENDAR.CAL_DIM' },
        { oldFieldName: 'CALENDARS_T.CAL_DT', newFieldName: 'DIMENSIONS.CALENDAR.CAL_DT' },
        { oldFieldName: 'CALENDARS_T.CAL_DT_ALIMT', newFieldName: 'DIMENSIONS.CALENDAR.CAL_DT_ALIMT' },
        { oldFieldName: 'CALENDARS_T.CAL_MO', newFieldName: 'DIMENSIONS.CALENDAR.CAL_MO' },
        { oldFieldName: 'CALENDARS_T.CAL_MO_EXT', newFieldName: 'DIMENSIONS.CALENDAR.CAL_MO_EXT' },
        { oldFieldName: 'CALENDARS_T.CAL_QTR', newFieldName: 'DIMENSIONS.CALENDAR.CAL_QTR' },
        { oldFieldName: 'CALENDARS_T.CAL_TRI', newFieldName: 'DIMENSIONS.CALENDAR.CAL_TRI' },
        { oldFieldName: 'CALENDARS_T.CAL_WK', newFieldName: 'DIMENSIONS.CALENDAR.CAL_WK' },
        { oldFieldName: 'CALENDARS_T.CAL_YR', newFieldName: 'DIMENSIONS.CALENDAR.CAL_YR' }
      ];
      
    return (
      <div>
        {mappings.map((mapping, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                {/* <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                <span>{mapping.oldFieldName}</span>
                <svg
                  className={`${
                    open ? 'transform rotate-90' : ''
                  } w-5 h-5 text-gray-500`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Disclosure.Button> */}
                <Disclosure.Button className="w-full py-4 px-4 flex items-center justify-between text-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                    <span className="text-black">{mapping.oldFieldName}</span>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                    <FontAwesomeIcon icon={open ? faMinus : faPlus} size="sm" />
                    </div>
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <FieldMapping
                    oldFieldName={mapping.oldFieldName}
                    newFieldName={mapping.newFieldName}
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    )
  }
  