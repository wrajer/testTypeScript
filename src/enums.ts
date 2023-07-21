enum Colors {
    RED,
    BLUE,
    GREEN,
}

let myColor: Colors = Colors.GREEN;

enum Days {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}

const getDailyMessage = (day: Days) => {
    switch (day) {
        case Days.MONDAY:
            return "Get a coffee and get busy!";
        case Days.FRIDAY:
            return "Push, through, only 1 day left!";
    }
};

console.log(Days);
console.log(Days.WEDNESDAY);
