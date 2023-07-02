export default {
  appName: 'ScreenSpace',
  welcome: 'Welcome to Kitten UI',
  error: {
    upps: 'Upss something went wrong',
  },
  initialLogin: {
    title: 'ScreenSpace',
    subtitle: 'Welcome to your all in one cinema booking app',
    buttons: {
      userLogin: 'Login with Google',
      adminLogin: 'Business Login',
    },
  },
  userLogin: {
    sectionName: 'Profile setup',
    form: {
      avatarTip: 'Add profile picture',
      username: {
        label: 'Username',
        placeholder: 'Add you prefered username',
      },
    },
    saveButtonText: 'Save changes',
    footer: 'You can always change it from ',
  },
  userSettings: {
    sectionName: 'Settings',
  },
  cinemaHome: {
    title: 'Your Cinemas',
    showsButtonText: 'Shows',
    newCinemaButtonText: 'New Cinema',
    noDataText: 'You do not have any cinema yet. Start by creating a new one!',
  },
  cinemaForm: {
    buttonNextText: 'Next',
    buttonPreviousText: 'Previous',
    buttonFinishText: 'Finish',
    successModalMessage: 'Your cinema was created successfully',
    successModalButtonMessage: 'Home',
    details: {
      title: 'Cinema details',
      inputName: 'Cinema Name',
      inputCompany: 'Company Name',
      inputPrice: 'Price per show',
      inputPricePlaceholder: 'Insert price ($)',
      inputStatus: 'Status',
      inputStatusPlaceholder: 'Temporary Unavailable',
    },
    address: {
      title: 'Cinema address',
      inputAddress: 'Street Address',
      inputPostalCode: 'Postal Code',
      inputCity: 'City',
      inputProvince: 'Province',
      inputCountry: 'Country',
    },
    stepIndicator: {
      firstStep: 'Cinema details',
      secondStep: 'Address',
      thirdStep: 'Summary',
    },
  },
  cinemaSummary: {
    formTitle: 'Summary',
    viewTitle: 'Cinema details',
    cinemaText: 'Cinema',
    streetText: 'Street',
    cityText: 'City',
    provinceText: 'Province',
    countryText: 'Country',
    priceText: 'Price per Seat',
    cinemaStatusText: 'Cinema Status',
    companyText: 'Company',
    cinemaStatusActive: 'Active',
    cinemaStatusInactive: 'Temporary Unavailable',
  },
  cinemaDetails: {
    title: 'Cinema Details',
    editButtonText: 'Edit Cinema',
    hallsButtonText: 'Halls',
  },
  cinemaHalls: {
    noDataText: 'You do not have halls yet',
    finishButtonText: 'Finish',
    form: {
      name: 'Hall Name',
      numberOfLinesText: 'Number of lines',
      numberOfSeatsText: 'Number of seats per line',
      status: 'Status',
      activeText: 'Active',
      inactiveText: 'Inactive',
      saveButtonText: 'Save Changes',
    },
  },
  hallCard: {
    removeButtonText: 'Remove',
    editButtonText: 'Edit',
  },
  hallHeader: {
    headerTitle: 'Halls',
    addButtonText: 'Add Hall',
  },
  cinemaShows: {
    sectionName: 'Shows',
    noDataMessage:
      'You do not have any shows yet\nStart by creating a new one!',
    newShowButton: 'Create new show',
    deleteShowWarningMessage:
      'Are you sure you want to delete this item?\nYou cannot revert this action',
    showCard: {
      hallLabel: 'Hall',
      dateTimeLabel: 'DateTime',
    },
  },
  newCinemaShow: {
    sectionName: 'New Show',
    nextStepButtonLabel: 'Next Step',
    previousStepButtonLabel: 'Previous Step',
    submitButtonLabel: 'Create show',
    finishButtonLabel: 'Go back to Shows',
    steps: {
      firstStep: {
        label: 'Cinema',
        title: 'Pick your Cinema',
        subtitle: '',
        isAvailableLabel: 'Temporarly unavailable',
        searchBar: {
          placeholder: 'Look for you cinema',
        },
      },
      secondStep: {
        label: 'Hall',
        title: 'Pick your hall',
        subtitle: '',
        maxCapacityLabel: 'Maximum capacity',
        isAvailableLabel: 'Temporarly unavailable',
        searchBar: {
          placeholder: 'Look for you hall',
        },
      },
      thirdStep: {
        label: 'Movie',
        title: 'Pick the movie',
        subtitle: '',
        movieLenghtLabel: 'Movie length',
        isShowingLabel: 'Not showing at the moment',
        searchBar: {
          placeholder: 'Look for the movie',
        },
      },
      fourthStep: {
        label: 'Date',
        title: 'Pick the date',
        subtitle: 'Select the date and time of the show',
        timePickerLabel: 'Start time',
        timePickerPlaceholder: 'Select start time',
      },
      summaryStep: {
        label: 'Summary',
        title: 'Your show was created successfully!',
        subtitle: '',
      },
    },
  },
  calendar: {
    dayNames: {
      short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      long: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    },
    monthNames: {
      short: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      long: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
  },
};
