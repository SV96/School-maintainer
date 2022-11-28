const env = require('./helper')

const re = {
  isAlpha: /^[a-zA-Z ]*$/,
  isAlphaNum: /^[a-zA-Z0-9 ]*$/,
  isMobileNum: /^[6-9]{1}[0-9]{9}$/,
  isReqLength: function (val, min, max) {
    let expression = '^.{' + min + ',' + max + '}$'
    const regex = new RegExp(expression)
    return regex.test(val)
  },
}

const validators = {
  checkAlpha: {
    validator: (val) => re.isAlpha.test(val),
    message: 'No special characters allowed',
  },
  checkAlphaNum: {
    validator: (val) => re.isAlphaNum.test(val),
    message: 'No special characters allowed',
  },
  checkMobileNum: {
    validator: (val) => re.isMobileNum.test(val),
    message: 'Invalid mobile number',
  },
  checkLenght: {
    validator: (val, min, max) => re.isReqLength.test(val, min, max),
    message: (min, max) =>
      `It should contain atleast ${min} to ${max} characters`,
  },
  checkMarks: {
    validator: (val) => val > 0 && val < 100,
    message: "Student marks can't greate than 100 or less than 0 ",
  },
}

const apiRoutes = {
  attendenceApi: {
    staff: '/huston-high/add',
    search: '/huston-high/search',
    student: '/huston-high/attendence-students',
  },
  accountsApi: {
    entries: '/huston-high/entires',
  },
  staffApi: {
    add: '/huston-high/add',
    caricullam: '/huston-high/caricullam-add',
  },
  studentApi: {
    add: '/huston-high/student-add',
    performance: '/huston-high/student-performance-add',
    parentInfo: '/huston-high/student-parents-info',
  },
  oAuthApi: {
    signUp: `/huston-high-signup/${env.singUpSecret}`,
    signIn: '/huston-high-signin',
    deleteUse: '/huston-high-remove-use',
  },
}

const accessiableApi = {
  superAdmin: [
    apiRoutes.attendenceApi.staff,
    apiRoutes.attendenceApi.search,
    apiRoutes.attendenceApi.student,
    apiRoutes.accountsApi.entries,
    apiRoutes.staffApi.add,
    apiRoutes.staffApi.caricullam,
    apiRoutes.studentApi.staff,
    apiRoutes.studentApi.add,
    apiRoutes.studentApi.parentInfo,
    apiRoutes.oAuthApi.signIn,
    apiRoutes.oAuthApi.deleteUse,
  ],
  teacher: [
    apiRoutes.staffApi.add,
    apiRoutes.studentApi.staff,
    apiRoutes.studentApi.add,
    apiRoutes.studentApi.parentInfo,
    apiRoutes.oAuthApi.signIn,
  ],
  HR: [
    apiRoutes.accountsApi.entries,
    apiRoutes.attendenceApi.search,
    apiRoutes.oAuthApi.signIn,
  ],
  student: [apiRoutes.attendenceApi.student, apiRoutes.oAuthApi.signIn],
}

module.exports = { re, validators, apiRoutes, accessiableApi }
