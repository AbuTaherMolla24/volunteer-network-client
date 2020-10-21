import React from 'react';
import Task from '../../Task/Task';

const tasks = [
    {
        name: 'Animal Shelter',
        pic: 'animalShelter.png'
    },
    {
        name: 'Baby Sit',
        pic: 'babySit.png'
    },
    {
        name: 'Bird House',
        pic: 'birdHouse.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'cleanWater',
        pic: 'cleanWater.png'
    },
    {
        name: 'Clearn Park',
        pic: 'clearnPark.png'
    },
    {
        name: 'Cloth Swap',
        pic: 'clothSwap.png'
    },
    {
        name: 'Drive Safety',
        pic: 'driveSafety.png'
    },
    
    {
        name: 'Food Charity',
        pic: 'foodCharity.png'
    },
    {
        name: 'Refuse Shelter',
        pic: 'refuseShelter.png'
    },
    {
        name: 'Good Education',
        pic: 'goodEducation.png'
    },
    {
        name: 'IT Help',
        pic: 'ITHelp.png'
    },
    {
        name: 'Library Books',
        pic: 'libraryBooks.png'
    },
    {
        name: 'Music Lessons',
        pic: 'musicLessons.png'
    },
    {
        name: 'New Books',
        pic: 'newBooks.png'
    },
    {
        name: 'Refuse Shelter',
        pic: 'refuseShelter.png'
    }
]
const HomeMain = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
        <div className="row container ">
        {
            tasks.map(task =><Task task={task}></Task>)
        }     
        </div>
        
        </div>
        
    );
};

export default HomeMain;