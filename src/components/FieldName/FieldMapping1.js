import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

function FieldMapping({ oldFieldName, newFieldName }) {
    return (
        <div key={oldFieldName} className="flex items-center justify-center mb-2 mr-4">
            <span className="text-black mr-2">{oldFieldName}</span>
            {/* <span className="flex-1 h-px bg-gray-300 flex items-center justify-center">
                <span className="text-black">&#8594;</span>
            </span> */}
            <span className="flex-1 h-px bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowRightLong} className="text-black" />
            </span>
            <span className="ml-2 text-black">{newFieldName}</span>
        </div>
    )
}


export default function FieldMappings1() {
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
        <div className="mb-10">
            {/* <header className="bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="container mx-auto text-center py-10">
                    <div className="py-10">
                        <p class="mb-5 text-base font-bold">Data Migration</p>
                        <p class="text-5xl font-bold">Legacy Table &#8594; Modernized Table</p>
                    </div>
                </div>
            </header> */}
            <header className="bg-gradient-to-r from-purple-500 to-indigo-500">
            <div className="container mx-auto text-center py-10">
                <div className="py-10">
                <h1 className="text-white text-4xl font-bold mb-3">Data Migration</h1>
                <p className="text-white text-6xl font-bold">Legacy Table <FontAwesomeIcon icon={faArrowRightLong} className="mx-2 text-white" /> Modernized Table</p>
                </div>
            </div>
            </header>
            <div className="container px-20 py-8 bg-gray-100 rounded-lg shadow-lg">
                <div className="space-y-10">
                    {mappings.map((mapping, index) => (
                        <FieldMapping
                            oldFieldName={mapping.oldFieldName}
                            newFieldName={mapping.newFieldName}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
  }
  