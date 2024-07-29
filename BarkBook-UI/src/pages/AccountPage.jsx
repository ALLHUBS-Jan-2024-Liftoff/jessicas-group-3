import testDogData from "/src/assets/test-data/testDogData.json";
import testEventData from "/src/assets/test-data/testEventData.json";
import testUserData from "/src/assets/test-data/testUserData.json";
import {DynamicTable} from "../components/DynamicTable.jsx";
import { Link } from 'react-router-dom';

export const AccountPage = () => {

    // const loadDogs = async() => {
        // call to get dogs associated with user
        // return resulting json
    // };
    // const dogList = loadDogs();

    // change into GET user data
    const userDisplayName = testUserData[0].name;
    const userLocation = testUserData[0].location;

    return (
        <>
            <br />
            <div className={"grid place-content-center"}>
                <h1 className={"font-bold"}>{userDisplayName}</h1>
                <br />
                <p>{userLocation}</p>
            </div>

            <br/>
            <div className={"flex place-content-around"}>
                <h1 className={"underline font-bold"}>My Dogs</h1>
                <Link className="bg-sky-500 hover:bg-sky-700 ..." to="/add-dog">
                    Add a Dog!
                </Link>
            </div>
            <DynamicTable data={testDogData}/>

            <br/>
            <div className={"flex place-content-around"}>
                <h1 className={"underline font-bold"}>My Events</h1>
                <Link className="bg-sky-500 hover:bg-sky-700 ..." to="/create-event">
                    Find Events!
                </Link>
            </div>
            <DynamicTable data={testEventData}/>
        </>
    )
}