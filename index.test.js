const getPlayBackTime = require('./index');
const getUsers = require('./index')


test('getUsers works as intended', () => {
    records = [
        {
            user_id: 1,
            device: "Windows 10",
            action: "start",
            date_actioned: 100,
        },
        {
            user_id: 2,
            device: "OSX 15.4",
            action: "start",
            date_actioned: 200,
        },
        {
            user_id: 1,
            device: "iPhone 8s",
            action: "start",
            date_actioned: 250,
        },
        {
            user_id: 1,
            device: "Windows 10",
            action: "stop",
            date_actioned: 370,
        },
        {
            user_id: 1,
            device: "iPhone 8s",
            action: "stop",
            date_actioned: 410,
        },
        {
            user_id: 2,
            device: "OSX 15.4",
            action: "stop",
            date_actioned: 490,
        },
        {
            user_id: 3,
            device: "Android 9.1",
            action: "start",
            date_actioned: 700,
        }
    ]
  expect(getUsers(records, "start", 700, 900)).toStrictEqual([ 3 ]);
});

test('getPlayBackTime works as intended', () => {
    records = [
        {
            user_id: 1,
            device: "Windows 10",
            action: "start",
            date_actioned: 100,
        },
        {
            user_id: 2,
            device: "OSX 15.4",
            action: "start",
            date_actioned: 200,
        },
        {
            user_id: 1,
            device: "iPhone 8s",
            action: "start",
            date_actioned: 250,
        },
        {
            user_id: 1,
            device: "Windows 10",
            action: "stop",
            date_actioned: 370,
        },
        {
            user_id: 1,
            device: "iPhone 8s",
            action: "stop",
            date_actioned: 410,
        },
        {
            user_id: 2,
            device: "OSX 15.4",
            action: "stop",
            date_actioned: 490,
        },
        {
            user_id: 3,
            device: "Android 9.1",
            action: "start",
            date_actioned: 700,
        }
    ]
  expect(getPlayBackTime(1, records)).toBe(310);
});