export const ROUTE_CONSTANT = {
    doctorDashboard: '/doctor-dashboard',
    patientDasboard: '/patient-dashboard',
    landingPage: '/',
    meetingBoard: '/meeting-board/:id',
    labTest: '/lab-test/:testId',
    ehrTest: '/ehr-test/:testId',
    prescription: '/prescription/:testId',
}

export const LOADING_CONSTANT = {
    loginButton: 'login_button',
}

const END_POINT = 'http://ec3de6b59e13.ngrok.io';

export const APIUrls = {
    loginUser: () => `${END_POINT}/Login`,
}