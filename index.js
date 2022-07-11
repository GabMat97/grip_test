//stores actions in array
const ACTIONS = {
    START: 'start',
    STOP: 'stop',
};

//removes potential injection code 
function sanitizeString(str) {
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, " ");
    return str.trim();
}

    //consider renaming to searchForActionWithinTime
function getUsers(records, action, start, end) {
    //get matches according to criteria
    const matches = records.filter(record => {
        return (record.action === action && record.date_actioned >= start && record.date_actioned <= end);
    });
    //return array of matching userIds
    return matches.map(match => match.user_id);
};

//consider renaming to getUniquePlayBackTime
function getPlayBackTime(userId, records) {
    let uniqueTime = 0;
    let deviceArray = [];
    let startTime = 0;

    //get actions only from this user
    const usersActions = records.filter(record => record.user_id === userId);

    //keeps track of what devices are being played at any point
    usersActions.forEach(userAction => {
        if (deviceArray.length === 0) { //if first user action in array
            if (userAction.action == ACTIONS.START) { 
                deviceArray.push(userAction.device); //places device name in 'online' mode (ie. there is at least one device watching)
                startTime = userAction.date_actioned; //tracks inital start time of watching
            } else if (userAction.action == ACTIONS.STOP) { //stop action when length of device array is 0 should throw error
                throw new Error('Whoops! - Something has gone wrong')
            }
        } else if (deviceArray.length > 0) { //is there currently a device 'online' (watching)
            if (userAction.action == ACTIONS.START){ //checks for current action
                deviceArray.push(userAction.device); //pushes device name into device array ('online' mode)
            } else if (userAction.action == ACTIONS.STOP) { //checks for current action
                deviceArray = deviceArray.filter(device => device !== userAction.device); //removes device name from device array
                if (!deviceArray.length) { //if array is empty after stop action, it was the last action in that interval
                    uniqueTime += userAction.date_actioned - startTime //cumulatively adds the time between intervals
                }
            }
        }
    });

    return uniqueTime;
};

// console.log(getPlayBackTime(1, records))
// console.log(getUsers(records, "start", 700, 900))

module.exports = { 
    getPlayBackTime,
    getUsers
};
