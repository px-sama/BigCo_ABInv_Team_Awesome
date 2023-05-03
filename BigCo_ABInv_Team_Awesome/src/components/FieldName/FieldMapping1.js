import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import mappings from './jsons/RosettaStone.json'

function FieldMapping({ oldFieldName, newFieldName, newFieldLink }) {
    return (
        <div key={oldFieldName} className="flex items-center justify-center mb-2 mr-4">
            <span className="text-black mr-2">{oldFieldName}</span>
            <span className="flex-1 h-px bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowRightLong} className="text-black" />
            </span>
            <a href={newFieldLink} className="ml-2 text-indigo-600 underline">
            <span className="ml-2 text-sky-700 underline">{newFieldName}</span>
            </a>
        </div>
    )
}


export default function FieldMappings1() {
    // const mappings = [
    //     { oldFieldName: 'CAL_NJ_T.CAL_DIM', newFieldName: 'DIMENSIONS.CALENDAR.CAL_DIM', newFieldLink: 'https://www.google.com/' },
    //     { oldFieldName: 'CALENDARS_T.CAL_DT', newFieldName: 'DIMENSIONS.CALENDAR.CAL_DT', newFieldLink: 'https://www.google.com/' },
    //     { oldFieldName: 'CALENDARS_T.CAL_DT_ALIMT', newFieldName: 'DIMENSIONS.CALENDAR.CAL_DT_ALIMT', newFieldLink: 'https://www.google.com/' },
    //     { oldFieldName: 'CALENDARS_T.CAL_MO', newFieldName: 'DIMENSIONS.CALENDAR.CAL_MO', newFieldLink: 'https://www.google.com/' },
    //     { oldFieldName: 'CALENDARS_T.CAL_MO_EXT', newFieldName: 'DIMENSIONS.CALENDAR.CAL_MO_EXT', newFieldLink: 'https://www.google.com/' },
    //     { oldFieldName: 'CALENDARS_T.CAL_QTR', newFieldName: 'DIMENSIONS.CALENDAR.CAL_QTR', newFieldLink: 'https://www.google.com/' },
    //     { oldFieldName: 'CALENDARS_T.CAL_TRI', newFieldName: 'DIMENSIONS.CALENDAR.CAL_TRI', newFieldLink: 'https://www.google.com/' },
    //     { oldFieldName: 'CALENDARS_T.CAL_WK', newFieldName: 'DIMENSIONS.CALENDAR.CAL_WK', newFieldLink: 'https://www.google.com/' },
    //     { oldFieldName: 'CALENDARS_T.CAL_YR', newFieldName: 'DIMENSIONS.CALENDAR.CAL_YR', newFieldLink: 'https://www.google.com/' }
    //   ];
    return (
        <div className="mb-10">
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
                            key={index}
                            oldFieldName={mapping.oldFieldName}
                            newFieldName={mapping.newFieldName}
                            newFieldLink={mapping.newFieldLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
  }
  