export default {
  appName: 'ScreenSpace',
  welcome: 'Welcome to Kitten UI',
  error: {
    upps: 'Upss something went wrong',
  },
  cinemaHome: {
    title: 'Your Cinemas',
    showsButtonText: 'Shows',
    newCinemaButtonText: 'New Cinema',
  },
  cinemaForm: {
    buttonNextText: 'Next',
    buttonPreviousText: 'Previous',
    buttonFinishText: 'Finish',
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
  cinemaShows:{
    sectionName: 'Shows',
    noDataMessage: 'You do not have any shows yet\nStart by creating a new one!',
    newShowButton: 'Create new show',
    deleteShowWarningMessage: 'Are you sure you want to delete this item?\nYou cannot revert this action'
  },
  newCinemaShow:{
    sectionName: 'New Show',
    nextStepButtonLabel: 'Next Step',
    previousStepButtonLabel: 'Previous Step',
    submitButtonLabel: 'Create show',
    steps: {
      firstStep: {
        label: 'Cinema',
        title: 'Pick your Cinema',
        subtitle: '',
        searchBar: {
          placeholder: 'Look for you cinema'
        }
      },
      secondStep: {
        label: 'Hall',
        title: 'Pick your hall',
        subtitle: '',
        maxCapacityLabel: 'Maximum capacity',
        searchBar: {
          placeholder: 'Look for you hall'
        }
      },
      thirdStep: {
        label: 'Movie',
        title: 'Pick the movie',
        subtitle: '',
        searchBar: {
          placeholder: 'Look for the movie'
        }
      },
      fourthStep: {
        label: 'Date',
        title: 'Pick the date',
        subtitle: '',
      }
    },
  }
};
