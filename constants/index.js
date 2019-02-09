const statusCodes = {
    POSTED: 'Posted',
    ACKNOWLEDGED: 'Acknowledged',
    WORK_IN_PROGRESS: 'Work in Progress',
    WORK_DONE: 'Work Done',
    CLOSED: 'Closed'
};

const statusCodesList = [
    statusCodes.POSTED,
    statusCodes.ACKNOWLEDGED,
    statusCodes.WORK_IN_PROGRESS,
    statusCodes.WORK_DONE,
    statusCodes.CLOSED
];

const regionReps = {
    'North Delhi': 'Mrs Ashwani',
    'South Delhi': 'Ms Pooja',
    'East Delhi': 'Mr Ankush',
    'West Delhi': 'Mr Sandeep'
}

const regionsList = [
    'North Delhi',
    'South Delhi',
    'East Delhi',
    'West Delhi'
];

const categoriesList = [
    'Education',
    'Tourism',
    'Agriculture',
    'Health',
    'Communication/Tech',
    'Transport',
    'Infrastructure',
    'Water',
    'Other'
];

const folderName = {
    PROBLEM_IMAGES: 'profile images'
}

module.exports = {
    statusCodes,
    statusCodesList,
    regionsList,
    categoriesList,
    regionReps,
    folderName
}